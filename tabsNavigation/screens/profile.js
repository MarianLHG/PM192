import { BottomTabBarHeightCallbackContext } from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Perfil de usuario</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.iconRow}>
          <Ionicons name="person-outline" size={28} color="green" />
          <Text style={styles.title}>Perfil de usuario</Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Detalle')}>
            <Text style={styles.buttonText}>Detalle del usuario</Text>
          </Pressable>        
        </View>
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
    iconRow: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'green',
    },
    button:{
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 8,
        marginBottom: 20,
        width: '80%',
        alignItems: 'center',
        backgroundColor: '#007BFF',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    
    });