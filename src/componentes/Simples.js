import React  from "react";
import { Text } from "react-native";
import  Padrao  from "../estilo/Padrao";
//Arrow
export default (props)=> <Text style={Padrao.ex}> {props.texto}</Text>  

/*
    export default props => [
        <Text key={1}>{props.texto}</Text>,
        <Text key={2}>{props.texto}</Text>
        ]
*/

/*
    export default (props)=>{
        return (
                <Text>{props.texto}</Text>     
            );
    }
*/