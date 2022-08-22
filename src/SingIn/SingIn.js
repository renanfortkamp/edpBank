import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { CmStyles } from "../Styles/CmStyles";
import LoginComp from "./LoginComp";

export default function SingIn() {
    const [renderLogin, setRenderLogin] = useState();
    const [renderLoginState, setRenderLoginState] = useState(false);

    function enter() {
      if(renderLoginState == false){
        setRenderLogin(LoginComp);
        setRenderLoginState(true)
      }else{
        setRenderLogin();
        setRenderLoginState(false)
      }
        
    }
    return (
        <SafeAreaView style={CmStyles.conteiner}>
            <TouchableOpacity activeOpacity={0.7} style={{marginRight:20,marginBottom:50}} >
                <Image
                    style={{ ...CmStyles.logoEdpCom, alignSelf: "center"}}
                    resizeMode="contain"
                    source={require("../imgs/logo.png")}
                />
                <Text style={CmStyles.logoText}>Bank</Text>
            </TouchableOpacity>
            {renderLogin}
            <TouchableOpacity onPress={enter} style={{...styles.button,alignSelf:'center'}}><Text style={{fontSize:20,fontWeight:'bold'}}>Entrar</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  button:{
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    width: "80%",
    height: 60,
    backgroundColor:'#28ff52',
}
});
