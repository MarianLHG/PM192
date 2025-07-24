import React, { useState } from 'react';
import { Modal, View, Text, Button, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmacionVisible, setConfirmacionVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [mensajeError, setMensajeError] = useState('');

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');

  const guardarDatos = () => {
    if (nombre.trim()===''&& correo.trim()==='') {
      setCMensajeError('Faltan el nombre y correo');
      setErrorVisible(true);
    } else if(nombre.trim()===''){
      setMensajeError('Falta el nombre');
      setErrorVisible(true);
    } else if(correo.trim()===''){
      setMensajeError('Falta el correo');
      setErrorVisible(true);
    } else {
      setModalVisible(false);
      setConfirmacionVisible(true);
      setNombre('');
      setCorreo('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={style.title}>Formulario en Modal</Text>
      <Button title="Abrir Formulario" onPress={() => setModalVisible(true)} />
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Ingresa tus datos</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={nombre}
              onChangeText={setNombre}
            />
            <TextInput
              style={styles.input}
              placeholder="Correo"
              value={correo}
              onChangeText={setCorreo}
              keyboardType='email-address'
            />
            <View style={styles.buttonRow}> 
              <Button title="Guardar" onPress={guardarDatos} />
              <Button title="Cerrar" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal de error */}
      <Modal
      visible={confirmacionVisible}
      transparent={true}
      animationType='fade'
      onRequestClose={() => setConfirmacionVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Datos guardados correctamente</Text>
            <Button title="Cerrar" onPress={() => setConfirmacionVisible(false)} />
          </View>
        </View>
      </Modal>

      {/* Modal de error */}
      <Modal
        visible={errorVisible}
        transparent={true}
        animationType='fade'
        onRequestClose={() => setErrorVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.errorBox}>
            <Text style={styles.errorTitle}>Error</Text>
            <Text style={styles.errorMensaje}>{mensajeError}</Text>
            <Button tittle="OK" onPress={() => setErrorVisible(false)} />
          </View>
        </View>
      </Modal>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F2FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1D4ED8'
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '75%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    maxWidth: 400,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1E3A8A',
    textAlign: 'center',
  },
  input: {
    height: 45,
    borderColor: '#CBD5E1',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#F8FAFC',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  errorBox: {
    width: '75%',
    backgroundColor: '#FEE2E2',
    borderColor: '#DC2626',
    borderWidth: 2,
    borderRadius: 20,
    padding: 25,
    maxWidth: 400,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#B91C1C',
    textAlign: 'center',
  },
  errorMensaje:{
    fontSize:16,
    color: '#7F1D1D',
    textAlign: 'center',
    marginBottom:15,
  }
});
