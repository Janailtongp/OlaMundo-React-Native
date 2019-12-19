import React from "react";
import { View, Text } from "react-native";
import  Padrao  from "../estilo/Padrao";

export default props =>
    <View>
        {
         parOuImpar(props.numero)  
        }
    </View> 

    function parOuImpar(n){
        const res = n % 2 == 0 ? 'Par' : 'Impar'
        return <Text style={Padrao.ex}>{res}</Text> 
    }