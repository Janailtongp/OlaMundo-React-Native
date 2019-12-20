import React from 'react'
import {createDrawerNavigator} from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import {Invertido, MegaSena} from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import  {Avo} from './componentes/ComunicacaoDireta'

console.disableYellowBox = true
//console.ignoredYellowBox[ 'Warning' ];

export default createDrawerNavigator({
    Avo: {
        screen: ()=> <Avo nome="João" sobrenome="Silva" />
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps label="Teste: " ano={19}/>,
        navigationOptions: {title: 'Validação de propiedades'}
    },
    Plataformas: {
        screen: () => <Plataformas />,
        navigationOptions: {title: 'Plataforma'}
    },
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
}, { drawerWidth: 200,drawerPosition: "left", drawerBackgroundColor: "rgba(97,47,116,1)", 
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
