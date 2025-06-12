/* ZONA 1: Importaciones*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';


const Texto=() => {
  const [contenido, setContenido]=useState("Hola mundo React Native");
  const actualizarTexto = () => {setContenido("Estado Actualizado")};
  return (
    <Text onPress={actualizarTexto}>{contenido}</Text>
  )
}

/* ZONA 2: Main */
export default function App() {
  return (
    <View style={styles.container}>
      <Texto> </Texto>
      <Texto> </Texto>
      <Texto> </Texto>
      <Button title="Presioname, pero no tanto"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

/* ZONA 3: Estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
