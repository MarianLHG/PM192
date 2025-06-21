/* ZONA 1: Importaciones*/
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image} from 'react-native';


/* ZONA 2: Main */
export default function App() {
  const [botonDesactivado, setBotonDesactivado] = useState(false);
  const [contador, setContador] = useState(0);

  return (
    <View style={{flex: 1,padding:20}}>
      <View style={styles.fila}>
        <Button
        title="Izquierda"
        color='#159753'
      ></Button>
      <Button
        title="Derecha"
        color='#5f9ea0'
        
      ></Button>
      </View>
      
      <View style={styles.dynamicButton}>
      <Button
        title="Presioname"
        color='#234354'
        onPress={() => alert('Me has presionado')}
        
      ></Button>
      </View>
      <View style={styles.dynamicButton}>
      <Button
        title={botonDesactivado ? "Desactivado" : "Desactivame"}
        disabled={botonDesactivado}
        onPress={() => setBotonDesactivado(true)}
      ></Button>
      </View>

      <View style={styles.ContadorButton}>
      <TouchableOpacity
        onPress={() => setContador(contador + 1)}>
          <Text style={styles.DynamicText}>
            Contador: {contador}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => alert('La pokebola ha sido presionada')}
      >
        <Image
          style={styles.imagen}
          source={require ('./assets/pokebola.png')}
        />
      </TouchableOpacity>
    </View>
      
    
  );
}

/* ZONA 3: Estilos */
const styles = StyleSheet.create({
  botonJustificado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dynamicButton:{
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  DynamicText:{
    color: 'pink',
    fontSize: 18,
  },
  imagen:{
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
  fila:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  ContadorButton: {
  padding: 10,
  marginTop: 10,
  borderRadius: 5,
  alignSelf: 'center',
  backgroundColor: 'purple', 
},
});
