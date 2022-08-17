import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";

export const players = [];

export default function NewPlayer({ navigation }) {
    const [nick, setNick] = useState("");
    const [idade, setIdade] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function cadastrarPlayer() {
        if (nick && idade && telefone && email && senha != "") {
            players.push({
                nick: nick,
                idade: idade,
                telefone: telefone,
                email: email,
                senha: senha,
            });

            navigation.navigate("Login");
        } else {
            alert("Preencha todos os dados!");
        }
    }

    return (
        <View style={style.container}>
            <TextInput
                style={style.input}
                onChangeText={(nick) => setNick(nick)}
                placeholder="Digite seu nickname"
                backgroundColor="#fff"
                placeholderTextColor={"#0d4da4"}
                selectionColor={"#0d4da4"}
                textAlign={"center"}
            />
            <TextInput
                style={style.input}
                onChangeText={(idade) => setIdade(idade)}
                placeholder="Digite sua idade"
                placeholderTextColor={"#0d4da4"}
                selectionColor={"#0d4da4"}
                textAlign={"center"}
                keyboardType={"number-pad"}
                maxLength={3}
                backgroundColor="#fff"
            />
            <TextInput
                style={style.input}
                onChangeText={(telefone) => setTelefone(telefone)}
                placeholder="Digite seu telefone Ex:(DDD)NUMERO"
                backgroundColor="#fff"
                keyboardType={"number-pad"}
                maxLength={12}
                placeholderTextColor={"#0d4da4"}
                selectionColor={"#0d4da4"}
                textAlign={"center"}
            />
            <TextInput
                style={style.input}
                onChangeText={(email) => setEmail(email)}
                placeholder="Digite seu e-mail"
                backgroundColor="#fff"
                placeholderTextColor={"#0d4da4"}
                selectionColor={"#0d4da4"}
                textAlign={"center"}
            />
            <TextInput
                secureTextEntry={true}
                style={style.input}
                onChangeText={(senha) => setSenha(senha)}
                placeholder="Digite sua senha"
                placeholderTextColor={"#0d4da4"}
                selectionColor={"#0d4da4"}
                textAlign={"center"}
                keyboardType={"number-pad"}
                maxLength={8}
                backgroundColor="#fff"
            />

            <TouchableOpacity style={style.button} onPress={cadastrarPlayer}>
                <Text style={{ fontSize: 25, color: "#fff" }}>Cadastrar</Text>
            </TouchableOpacity>
            <Text>{nick}</Text>
            <Text>{idade}</Text>
            <Text>{telefone}</Text>
            <Text>{email}</Text>
            <Text>{senha}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        paddingTop: 10,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    button: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        height: 60,
        borderColor: "#fff",
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
        borderColor: "#0D4DA3",
        borderWidth: 3,
        borderRadius: 5,
        textAlign: "center",
        color: "#0D4DA3",
        marginBottom: 10,
    },
});
