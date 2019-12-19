import React from 'react'
import {createDrawerNavigator} from 'react-native'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import {Invertido, MegaSena} from './componentes/Multi'

// export default createDrawerNavigator({
//     MegaSena: {
//         screen: () => <MegaSena numeros ={8} />,
//         navigationOptions: {title: 'Mega Sena'}
//     },
//     Invertido: {
//         screen: () => <Invertido texto = 'Arara' />,
//         navigationOptions: {title: 'Palavra Invertida'}
//     },
//     ParImpar: {
//         screen: () => <ParImpar numero ={33} />,
//         navigationOptions: {title: 'Par ou Impar ?'}
//     },
//     Simples: {
//         screen: () => <Simples texto ='Componente Simples' />
//     }
// }, { drawerWidth: 300 })