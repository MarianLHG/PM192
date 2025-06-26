/* Zone 1: Importaciones */
import { ImageBackground, StyleSheet, Text, View, SafeAreaView, TextInput, Switch, Button, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';

const FondoBienvenida = () => {
  return (
    <ImageBackground
      source={require('./assets/fondo.png')}
      style={styles.fondo}
    >
      <View style={styles.contenido}>
        <Text style={styles.titulo}>Bienvenido a PM</Text>
      </View>
    </ImageBackground>
  );
};

/* Zone 2: Main */

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); 
    }, 5000);

    return () => clearTimeout(timer); 
  }, []);

  const Registro = () => {
    if (!nombre.trim() || !correo.trim()) {
      Alert.alert('Error', 'Por favor llena todos los campos.');
      return;
    }
    if (!aceptaTerminos) {
      Alert.alert('Error', 'Debes aceptar los términos y condiciones.');
      return;
    }
    Alert.alert(
      'Registro exitoso',
      `Nombre: ${nombre}\nCorreo: ${correo}\nTérminos aceptados: Sí`
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {showSplash ? (
        <FondoBienvenida />
      ) : (
        <ImageBackground
          source={require('./assets/fondo2.jpg')}
          style={styles.fondo}
        >
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.formContainer}>
              <Text style={styles.mainText}>Registro de Usuario</Text>
              <View style={styles.formGroup}>
                <Text>Nombre:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ingresa tu nombre"
                  value={nombre}
                  onChangeText={setNombre}
                />
              </View>
              <View style={styles.formGroup}>
                <Text>Correo electrónico:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ingresa tu correo"
                  value={correo}
                  onChangeText={setCorreo}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              <View style={styles.switchGroup}>
                <Text>Acepto términos y condiciones</Text>
                <Switch
                  value={aceptaTerminos}
                  onValueChange={setAceptaTerminos}
                />
              </View>
              <Button
                title="Registrarse"
                onPress={Registro}
              />
            </View>
          </View>
        </ImageBackground>
      )}
    </SafeAreaView>
  );
}

/* Zone 3: Estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fondo: {
    flex: 1,
  },
  contenido: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)', 
  },
  titulo: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  formContainer: {
    backgroundColor: 'rgba(255,255,255,0.92)',
    padding: 24,
    borderRadius: 16,
    marginHorizontal: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  formGroup: {
    width: '80%',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    width: '100%',
  },
  switchGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});