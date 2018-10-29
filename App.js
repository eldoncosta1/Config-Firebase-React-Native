import firebase from 'firebase';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

export default class App extends Component {

  /*constructor(props) {
    super(props);
    this.state = {
      pontuacao: 0
    };
  }*/

  componentWillMount() {    
    var config = {
      apiKey: "AIzaSyC_U1owsZnma9DLFIkWS3GNKaxlaX3ck0I",
      authDomain: "projeto-react-native-a7670.firebaseapp.com",
      databaseURL: "https://projeto-react-native-a7670.firebaseio.com",
      projectId: "projeto-react-native-a7670",
      storageBucket: "projeto-react-native-a7670.appspot.com",
      messagingSenderId: "101475394824"
    };
    firebase.initializeApp(config);
  }

  /*salvarDados() {
    let funcionarios = firebase.database().ref("funcionarios");
    //funcionarios.child("002").child("nome").set("Jamilton");
    //funcionarios.push().child("nome").set("Marcelo");
    funcionarios.push().set({
      nome: "Eldon Costa",
      altura: "1,69",
      peso: "81"
    });

  }

  listarDados() {
    let pontuacao = firebase.database().ref("pontuacao");
    pontuacao.on('value', (snapshot) => {
      let pontos = snapshot.val();
      this.setState({pontuacao: pontos});
    });
  }*/

  cadastrarUsuario() {
    let email = "eldoncosta1@gmail.com";
    let senha = "email123";
    //alert('cadastrar usuario');
    const usuario = firebase.auth();
    usuario.createUserWithEmailAndPassword(email, senha)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/weak-password') {
        alert('A senha precisa ter no mínimo 6 caracteres!');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
    // [END createwithemail]

  }

  verificarUsuarioLogado() {

    const usuario = firebase.auth();
    /*const usuarioAtual = usuario.currentUser;

    console.log(usuarioAtual);

    if (usuarioAtual) {
      alert("Usuário está logado");
    } else {
      alert("Usuário não está logado");
    }*/

    usuario.onAuthStateChanged(
      (usuarioAtual) => {
        if (usuarioAtual) {
          alert("Usuário está logado");
        } else {
          alert("Usuário não está logado");
        }
      }
    );

  }

  deslogarUsuario() {
    const usuario = firebase.auth();
    usuario.signOut();
  }

  logarUsuario() {
    let email = "eldoncosta1@gmail.com";
    let senha = "email123";   
    
    const usuario = firebase.auth();
    usuario.signInWithEmailAndPassword(email, senha)
    .catch( (erro) => {
      alert(erro.message);
    });
    
  }

  render() {
    //let pontuacao = this.state.pontuacao;
    return (      
      <View >        
        <Button 
          onPress={ () => {this.cadastrarUsuario(); }}
          title="Cadastrar Usuário"
          color="#841584"
          accessibilityLabel="Cadastrar Usuário"
        />  

        <Button 
          onPress={ () => {this.verificarUsuarioLogado(); }}
          title="Verificar usuário logado"
          color="#841584"
          accessibilityLabel="Verificar usuário logado"
        />   

        <Button 
          onPress={ () => {this.deslogarUsuario(); }}
          title="Deslogar usuário"
          color="#841584"
          accessibilityLabel="Deslogar usuário"
        />  

        <Button 
          onPress={ () => {this.logarUsuario(); }}
          title="Logar usuário"
          color="#841584"
          accessibilityLabel="Logar usuário"
        />  

        <Text></Text>     
      </View>
    );
  }
}
