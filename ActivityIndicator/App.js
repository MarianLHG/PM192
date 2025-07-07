import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const IndicadorCarga = ({ color, size }) => {
  return <ActivityIndicator style={styles.indicador} color={color} size={size} />;
};

export default function App() {
  const [cargando, setCargando] = useState(false);

  const iniciarCarga = () => {
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
    }, 3000); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textoPrincipal}>Uso de ActivityIndicator</Text>
      {cargando ? (
        <IndicadorCarga color="deepskyblue" size="large" />
      ) : (
        <Text style={styles.textoSecundario}>Presiona el botón para comenzar</Text>
      )}
      <Button title="Iniciar carga" onPress={iniciarCarga} color="#ff6f61" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccff90',
    padding: 20,
  },
  textoPrincipal: {
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2e2e2e',
    textAlign: 'center',
  },
  textoSecundario: {
    fontSize: 18,
    color: '#3e3e3e',
    marginVertical: 20,
    textAlign: 'center',
  },
  indicador: {
    marginBottom: 20,
  },
});