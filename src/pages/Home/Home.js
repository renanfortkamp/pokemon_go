import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import background from "../../../assets/bg.jpg"


export default function Home({navigation}) {

  function navigationLogin(){
    navigation.navigate('Login')
}
  return (
    <ImageBackground
            resizeMode="stretch"
            style={style.background}
            source={background}
        >
            <TouchableOpacity
            style={style.button}
            >
                <Text onPress={navigationLogin} style={{ fontSize: 20, color: '#fff' }}>
                    Login
                </Text>
                
            </TouchableOpacity>
            
        </ImageBackground>
  )
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
