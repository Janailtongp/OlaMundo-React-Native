import React from 'react'
import {ScrollView, View, FlatList, Text} from 'react-native'

const alunos =[
    {id: 1, nome: 'João', nota: 10.0},
    {id: 2, nome: 'Maria', nota: 10.0},
    {id: 3, nome: 'Ana', nota: 8.7},
    {id: 4, nome: 'Bia', nota: 9.5},
    {id: 5, nome: 'Claudia', nota: 7.7},
    {id: 6, nome: 'Roberto', nota: 6.8},
    {id: 7, nome: 'Rafael', nota: 9.9},
    {id: 8, nome: 'Guilherme', nota: 10.0},
    {id: 9, nome: 'Tompero', nota: 4.9},
    
    {id: 11, nome: 'João', nota: 10.0},
    {id: 12, nome: 'Maria', nota: 10.0},
    {id: 13, nome: 'Ana', nota: 8.7},
    {id: 14, nome: 'Bia', nota: 9.5},
    {id: 15, nome: 'Claudia', nota: 7.7},
    {id: 16, nome: 'Roberto', nota: 6.8},
    {id: 17, nome: 'Rafael', nota: 9.9},
    {id: 18, nome: 'Guilherme', nota: 10.0},
    {id: 19, nome: 'Tompero', nota: 4.9},
]

const itemEstilo ={
    paddingHorizontal: 15,
    height: 50,
    backgoundCollor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',
    alignItems: 'center', // flex-start, center e flex-end
    justifyContent: 'space-between', //space-between, space-around 
    flexDirection: 'row' //Muda a direção MAIN da flexbox
    /*Flex 
        alignItems -> modifica com base no exio secundario. 
        justifyContent ->  modifica com base no eixo principal.
    */
    
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text> 
    </View>

export default props =>{
    const renderItem = ({item}) =>{
        return <Aluno {...item} />
    }

    return(
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}