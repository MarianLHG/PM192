/* ZONA 1: Importaciones*/
import { StyleSheet, Text, View, ImageBackground, SafeAreaView} from 'react-native';

const FondoBienvenida = ()  =>{
  return (
    <ImageBackground source= {require('./assets/fondo.png')} style={styles.fondo}>
      <View style={styles.contenido}>
        <Text style={styles.titulo}>Bienvenido a la app</Text>
      </View>
    </ImageBackground>
  );
};

/* ZONA 2: Main */
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FondoBienvenida/>
    </SafeAreaView>
    
  );
}

/* ZONA 3: Estilos */
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  fondo:{
    flex:1,
  },
  contenido:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,0.4)',
  },
  titulo:{
    fontSize:28,
    color: 'white',
    fontWeight:'bold',
  },

});
