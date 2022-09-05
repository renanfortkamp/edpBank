import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TextInput
} from "react-native";
import React, { useEffect, useState } from "react";
import { CmStyles } from "../Styles/CmStyles";

export default function SingIn() {
   
    const [dataClientes, setDataClientes] = useState([]);
    const [conta, setConta] = useState("");
    const [senha, setSenha] = useState("");
    const [contaValida,setContaValida] = useState(false);
    const [senhaValida,setSenhaValida] = useState(false);
  
    function enter() {
     
      if (conta != "" && senha != "") {
        let validado = dataClientes.some((cliente)=>{
          return cliente.numeroConta == conta && cliente.senha == senha
        })
        if(validado == true){
          alert("Cliente Validado")
        }else{alert("Cliente Invalido")}  

      } else {
          alert("Digite senha e login");
      }
      setContaValida(false)
      setSenhaValida(false)
  }

   
    function getClientes() {
        fetch(
            "http://eefb-2804-14d-bad7-8a7d-b4a2-3425-af11-6ca5.ngrok.io/clientes"
        )
            .then(async (response) => {
                const data = await response.json();
                setDataClientes(data);
            })
            .catch((error) => alert(error));
    }

    useEffect(() => {
        getClientes();
    }, []);

    
    return (
        <SafeAreaView style={CmStyles.conteiner}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={{ marginRight: 20, marginBottom: 50 }}
            >
                <Image
                    style={{ ...CmStyles.logoEdpCom, alignSelf: "center" }}
                    resizeMode="contain"
                    source={require("../imgs/logo.png")}
                />
                <Text style={CmStyles.logoText}>Bank</Text>
            </TouchableOpacity>
            <SafeAreaView style={styles.conteiner}>
        {/* <Text style={{...CmStyles.textGreen, fontSize:20,fontWeight:'bold',marginLeft:2}}>Conta</Text> */}
        <TextInput onChangeText={text=>setConta(text)} placeholder='Conta' style={{...styles.input,fontSize:20,marginVertical:20}} />
        {/* <Text style={{...CmStyles.textGreen, fontSize:20,fontWeight:'bold',marginLeft:2,marginTop:10,}}>Senha</Text> */}
        <TextInput onChangeText={text=>setSenha(text)} placeholder='Senha' secureTextEntry={true} style={{...styles.input,fontSize:20}}/>
        <TouchableOpacity style={{alignSelf:'center',marginTop:8,}}><Text style={{color:'#fff'}}>Esqueci minha senha</Text></TouchableOpacity>
        
        <TouchableOpacity onPress={enter}  style={{...styles.button,alignSelf:'center'}}><Text style={{fontSize:20,fontWeight:'bold'}}>Entrar</Text></TouchableOpacity>
    </SafeAreaView>
        </SafeAreaView>
    );
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
