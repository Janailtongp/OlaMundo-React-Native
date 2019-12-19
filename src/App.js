import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import {Invertido, MegaSena} from './componentes/Multi'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.f20}>Olá Mundo!</Text>
      <Simples texto ="By: Janailton Galvão Pereira"/>
      <ParImpar numero = {2} />
      <MegaSena />
      <Invertido texto = 'ognemalF'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cccc00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  f20: {
    fontSize: 30
  },
});
