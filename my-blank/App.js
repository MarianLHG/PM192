/* ZONA 1: Importaciones*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';


const Texto=({style}) => {
  const [contenido, setContenido]=useState("Hola mundo React Native");
  const actualizarTexto = () => {setContenido("Estado Actualizado")};
  return (
    <Text style={[styles.text, style]} onPress={actualizarTexto}>{contenido}</Text>
  )
}

/* ZONA 2: Main */
export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.red}> </Texto>
      <Texto style={styles.green}> </Texto>
      <Texto style={styles.blue}> </Texto>
      <StatusBar style="auto" />
    </View>
  );
}

/* ZONA 3: Estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  text:{
    color:'white',
    fontSize: 25,
    height: 100,
   
  },
  red:{ backgroundColor: 'red'},
  green: {  backgroundColor: 'green'},
  blue: {  backgroundColor: 'blue'},
});
