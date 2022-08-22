import { StyleSheet, Text, View,TextInput,SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { CmStyles } from '../Styles/CmStyles'

export default function LoginComp() {
  return (
    <SafeAreaView style={styles.conteiner}>
        {/* <Text style={{...CmStyles.textGreen, fontSize:20,fontWeight:'bold',marginLeft:2}}>Conta</Text> */}
        <TextInput placeholder='Conta' style={{...styles.input,fontSize:20,marginVertical:20}} />
        {/* <Text style={{...CmStyles.textGreen, fontSize:20,fontWeight:'bold',marginLeft:2,marginTop:10,}}>Senha</Text> */}
        <TextInput placeholder='Senha' secureTextEntry={true} style={{...styles.input,fontSize:20}}/>
        <TouchableOpacity style={{alignSelf:'center',marginTop:8,}}><Text style={{color:'#fff'}}>Esqueci minha senha</Text></TouchableOpacity>
    </SafeAreaView>
  )
}

export const botaoEntrar = {

}

const styles = StyleSheet.create({
    conteiner:{
        width: '80%'

    },
    input:{
        alignSelf:'center',
        width: '100%',
        height: 60,
        backgroundColor:'#fff',
        marginVertical:2,
        paddingLeft:5,
        borderRadius:10,
    },
    

})