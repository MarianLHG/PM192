import {View, Text, StyleSheet, Pressable} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function Detalles({ navigation }) {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
          <View style={styles.header}>
            <Pressable onPress={() => navigation.goBack()} style={styles.stylePressable}>
                <Ionicons name="chevron-back" size={28} color="black"/>
                <Text style={styles.textoVolver}>MainTabs</Text>
            </Pressable>
            <Text style={styles.headerText} >Detalle de usuario</Text>
          </View>
        <View style={styles.container}>
                <Text style={styles.title}>Detalle de usuario</Text>
                <Text style={styles.titledos}> Usando navegación stack </Text>
                
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        width: '100%',
        height: 100,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#eee',
        paddingTop: 20, 
        position: 'absolute',
        top: 0, 
        left: 0,
        zIndex: 1,
        
    },
    headerText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    stylePressable: {
        position: 'absolute',
        left: 20,
        top: 40,
    },
    title: {
        fontSize: 22,
        marginLeft: 10,
        color: 'black',
    },
    titledos: {
        fontSize: 15,
        marginLeft: 10,
        color: 'blue',
    },
    textoVolver: {
        fontSize: 8,
        color: 'black',
        marginLeft: 10,
    },
    });