import React from 'react'
import {createDrawerNavigator} from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import {Invertido, MegaSena} from './componentes/Multi'
import Contador from './componentes/Contador'

console.disableYellowBox = true
//console.ignoredYellowBox[ 'Warning' ];

export default createDrawerNavigator({
    Contador: {
        screen: () => <Contador numero ={8} />,
        navigationOptions: {title: 'Contador'}
    },
    MegaSena: {
        screen: () => <MegaSena numeros ={6} />,
        navigationOptions: {title: 'Mega Sena'}
    },
    Invertido: {
        screen: () => <Invertido texto = 'Arara' />,
        navigationOptions: {title: 'Palavra Invertida'}
    },
    ParImpar: {
        screen: () => <ParImpar numero ={33} />,
        navigationOptions: {title: 'Par ou Impar ?'}
    },
    Simples: {
        screen: () => <Simples texto ='Componente Simples' />
    }
}, { drawerWidth: 200,drawerPosition: "left", drawerBackgroundColor: "rgba(97,47,116,0.5)", 
    contentOptions: {
        activeTintColor: '#612f74',
        activeBackgroundColor: '#ffffff',
        inactiveTintColor:'#ffffff',
        itemsContainerStyle: {
          marginVertical: 0,
        },
        iconContainerStyle: {
            opacity: 1
        }
    } 
})
