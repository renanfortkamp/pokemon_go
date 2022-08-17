import {
    View,
    Text,
    TextInput,
    StatusBar,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";

import { useState } from "react";
import background from "../../../assets/bg.jpg"
export default function Login({navigation}) {

    function navigationHome(){
        setTextoVisto(texto)
        navigation.navigate('Home')
    }

    function navigationNewPlayer(){
        
        navigation.navigate('NewPlayer')
    }

    const [texto, setTexto] = useState("");
    const [senha, setSenha] = useState("");

    const [textoVisto, setTextoVisto] = useState("");

    return (
        <ImageBackground
            resizeMode="stretch"
            style={style.background}
            source={background}
        >
            <StatusBar />

            <TextInput
                style={style.input}
                onChangeText={(text) => setTexto(text)}
                placeholder="Digite seu e-mail"
                backgroundColor="#fff"
                placeholderTextColor={"red"}
                textAlign={"center"}
            />
            <TextInput
                secureTextEntry={true}
                style={style.input}
                onChangeText={(senha) => setSenha(senha)}
                placeholder="Digite sua senha"
                placeholderTextColor={"red"}
                textAlign={"center"}
                backgroundColor="#fff"
            />

            <TouchableOpacity
                onPress={navigationHome}
                style={style.button}
            >
                <Text style={{ fontSize: 20, color: '#fff' }}>
                    Entrar
                </Text>
                
            </TouchableOpacity>
            <TouchableOpacity onPress={navigationNewPlayer} >
            <Text style={{ fontSize: 15, color: '#fff' }}>
                    Ainda não tem cadastro ?
                </Text>
            </TouchableOpacity>

            <Text>{textoVisto}</Text>
            
        </ImageBackground>
    );
}

const style = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems:'center',
        width: 120,
        height: 50,
        borderColor: '#DC5F43',
        borderWidth: 2,
        backgroundColor: "#0D4DA3",
        marginBottom: 10,
        borderRadius: 10,
    },
    img: {
        marginLeft: 5,
        marginRight: 20,
        width: 50,
        height: 50,
    },
    input: {
      backgroundColor: '#FFF',
      height: 50,
      width: '70%',
      borderColor: '#DC5F43',
      borderWidth: 3,
      borderRadius: 10,
      textAlign: 'center',
      color: '#DC5F43',
      marginBottom:10,
    },
});
