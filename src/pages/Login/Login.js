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
import background from "../../../assets/bg.jpg";
import NewPlayer from "../NewPlayer/NewPlayer";
import { players } from "../NewPlayer/NewPlayer";

export default function Login({ navigation }) {
    const players1 = [
        { email: "renan", senha: "renan" },
        { email: "renan1", senha: "renan1" },
        { email: "renan2", senha: "renan2" },
        { email: "renan3", senha: "renan3" },
        { email: "renan4", senha: "renan4" },
        { email: "renan5", senha: "renan5" },
        { email: "renan6", senha: "renan6" },
        { email: "renan7", senha: "renan7" },
        { email: "renan8", senha: "renan8" },
        { email: "renan9", senha: "renan9" },
    ];
    const [emailLogin, setEmailLogin] = useState("");
    const [senhaLogin, setSenhaLogin] = useState("");

    const [textoVisto, setTextoVisto] = useState("");
    function userLogin() {
        if(players.length > 0){
            for (let i = 0; i < players1.length; i++) {
                if (
                    players[i].email == emailLogin &&
                    players[i].senha == senhaLogin
                ){
                    alert("Usuario Encontrado");
                    return;
                }
            }
            
        }else{alert("Usuario não cadastrado")}
        alert("não encontrado")
    }

    function navigationNewPlayer() {
        navigation.navigate("NewPlayer");
    }

    return (
        <ImageBackground
            resizeMode="stretch"
            style={style.background}
            source={background}
        >
            <StatusBar />

            <TextInput
                style={style.input}
                onChangeText={(emailLogin) => setEmailLogin(emailLogin)}
                placeholder="Digite seu e-mail"
                backgroundColor="#fff"
                placeholderTextColor={"red"}
                textAlign={"center"}
            />
            <TextInput
                // secureTextEntry={true}
                style={style.input}
                onChangeText={(senhaLogin) => setSenhaLogin(senhaLogin)}
                placeholder="Digite sua senha"
                placeholderTextColor={"red"}
                textAlign={"center"}
                backgroundColor="#fff"
            />

            <TouchableOpacity onPress={userLogin} style={style.button}>
                <Text style={{ fontSize: 20, color: "#fff" }}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigationNewPlayer}>
                <Text style={{ fontSize: 15, color: "#fff" }}>
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
        alignItems: "center",
        width: 120,
        height: 50,
        borderColor: "#DC5F43",
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
        backgroundColor: "#FFF",
        height: 50,
        width: "70%",
        borderColor: "#DC5F43",
        borderWidth: 3,
        borderRadius: 10,
        textAlign: "center",
        color: "#DC5F43",
        marginBottom: 10,
    },
});
