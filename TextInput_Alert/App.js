/* ZONA 1: Importaciones*/
import React, { useState } from "react";
import { Alert, Text, View, TextInput, Button, StyleSheet } from 'react-native';

/* Componente Texto */
const Texto = ({ style }) => {
  const [contenido, setContenido] = useState('Hola Mundo');
  const actualizarTexto = () => {
    setContenido('Estado actualizado');
  };

  return (
    <Text
      style={[styles.text, style]}
      onPress={actualizarTexto}
    >{contenido}</Text>
  );
};

/* ZONA 2: Main */
export default function App() {
  const [nombre, setNombre] = useState('');
  const mostrarAlerta = () => {
    if (nombre.trim() === '') {
      Alert.alert('Error', 'Por favor escribe algo');
    } else {
      Alert.alert('Bienvenido', `Hola ${nombre}, bienvenido a nuestra app`);
      alert('Hola ' + nombre + ' bienvenido a nuestra app');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ingresa tu nombre</Text>
      <TextInput
        style={styles.input}
        placeholder='Escribe tu nombre: '
        onChangeText={setNombre}
        value={nombre}
      />
      <Button title='Enviar' onPress={mostrarAlerta} />
    </View>
  );
}

/* ZONA 3: Estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    color: 'black',
  },
});
