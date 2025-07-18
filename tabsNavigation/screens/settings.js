import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Settings() {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
        <View style={styles.container}>
            <View style={styles.iconRow}>
                <Ionicons name="settings-outline" size={28} color="blue" />
                <Text style={styles.title}>Configuraciones de usuario</Text>
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
        color: 'blue',
    },
    });