import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native';

export default function App() {

  function clicarBotao() {
    Alert.alert(
      'AVISO', 
    'Sua conta foi bloqueada. Que pena, voce nao podera fazer o login :(',
    [
      {text: 'Que pena'},
      {text: 'Que pena'},
      {text: 'Que pena'}
    ]
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TextInput
        style={styles.input}
        selectionColor="#FFF"
        placeholder='Digite seu nome'
        placeholderTextColor="#FFF"
        keyboardType='email-address'
        autoCapitalize='words'
        autoFocus
      />

      <TextInput
        style={styles.input}
        selectionColor="#FFF"
        placeholder='Digite sua senha'
        placeholderTextColor="#FFF"
        secureTextEntry={true}
      />

      <TextInput
        style={styles.inputTextarea}
        selectionColor="#FFF"
        placeholder='Digite sua historia'
        placeholderTextColor="#FFF"
        secureTextEntry={true}
        multiline
      />

      <TextInput
        style={styles.input}
        selectionColor="#FFF"
        placeholder='Digite sua UF'
        placeholderTextColor="#FFF"
        maxLength={2}
        autoCapitalize="characters"
        autoCorrect={false}

      />

      <TouchableOpacity style={styles.button} onPress={clicarBotao}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png' }}
          style={styles.imageButton}
        />
        <Text style={styles.textButton}>Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#3b5998',
    borderRadius: 10,
    padding: 5,
    height: 70,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  textButton: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: 'bold'
  },
  imageButton: {
    width: 50,
    height: 50,
    marginRight: 20
  },
  input: {
    backgroundColor: '#3b5998',
    height: 44,
    width: '70%',
    marginBottom: 20,
    borderRadius: 10,
    color: '#FFF',
    paddingLeft: 10,
    paddingRight: 10
  },
  inputTextarea: {
    backgroundColor: '#3b5998',
    minHeight: 70,
    width: '70%',
    marginBottom: 20,
    borderRadius: 10,
    color: '#FFF',
    paddingLeft: 10,
    paddingRight: 10
  }
});




















// import {
//   StyleSheet,
//   Image,
//   Text,
//   View,
//   StatusBar,
//   TouchableOpacity,
//   TextInput,
// } from "react-native";
// import { useState } from "react";

// export default function App() {
//   const [texto, setTexto] = useState("");
//   const [senha, setSenha] = useState("");
//   const [textArea, setTextArea] = useState("");

//   const [textoVisto, setTextoVisto] = useState("");

//   return (
//       <View style={styles.container}>
//           <StatusBar style="auto" />


//           <TextInput
//               style={styles.input}
//               onChangeText={(text) => setTexto(text)}
//               placeholder="Digite seu nome"
//               placeholderTextColor={'#fff'}
//               backgroundColor="blue"
//               autoCapitalize="words"
//           />
//           <TextInput
//             secureTextEntry={true}
//               style={styles.input}
//               onChangeText={(senha) => setSenha(senha)}
//               placeholder="Digite sua senha"
              
//               placeholderTextColor={'#fff'}
              
//               backgroundColor="blue"
//           />
//            <TextInput

//             secureTextEntry={true}
//               style={[styles.input,{height:100}]}
//               onChangeText={(textArea) => setTextArea(textArea)}
              
//               placeholderTextColor={'#fff'}
              
//               backgroundColor="blue"
//               multiline
//           />


//           <TouchableOpacity
//               onPress={() => {
//                   setTextoVisto(texto);
//               }}
//               style={styles.button}
//           >
//               <Image
//                   style={styles.img}
//                   source={{
//                       uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png",
//                   }}
//               />
//               <Text style={{color:'#fff',fontSize:30,}}>Facebook</Text>
//           </TouchableOpacity>
//           <Text>{"Bem Vindo " + textoVisto}</Text>
//       </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       backgroundColor: "#fff",
//       alignItems: "center",
//       justifyContent: "center",
//   },
//   button: {
//     flexDirection:"row",
//       justifyContent: "flex-start",
//       alignItems: "center",
//       width: 300,
//       height: 70,
//       borderColor: "black",
//       borderWidth: 2,
//       backgroundColor: "blue",
//       borderRadius: 15
//   },
//   img: {
//     marginLeft:5,
//     marginRight:20,
//       width: 50,
//       height: 50,
//   },
//   input: {
//       paddingLeft:5,
//       borderWidth: 2,
//       borderColor: "black",
//       width: 200,
//       height: 40,
//       borderRadius: 15,
//   },
// });
