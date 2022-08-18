import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ChoisePokemon() {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.title}>Qual seu Pokemon inicial ?</Text>
      <View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  conteiner:{
    backgroundColor:'#0d4da3',
    flex:1,
  },
  title:{
    marginTop:10,
    color:"#fff",
    fontSize:24,
    fontWeight:'bold',
    alignSelf:'center'
    
  }
})