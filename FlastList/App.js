/*  ZONA 1: IMPORTACIONES*/
import React, { useState } from 'react';
import {View,Text, FlatList, StyleSheet,TouchableOpacity
} from 'react-native';

/*  ZONA 2: COMPONENTE PRINCIPAL Y LÓGICA*/
const App = () => {
  // Estado inicial con lista de datos
  const [datos, setDatos] = useState([
    { id: '1', nombre: 'Alexis' },
    { id: '2', nombre: 'Mario' },
    { id: '3', nombre: 'Estrella' },
    { id: '4', nombre: 'Paola' },
    { id: '5', nombre: 'Alonso' },
    { id: '6', nombre: 'Mariano' },
    { id: '7', nombre: 'Marlen' },
    { id: '8', nombre: 'Polo' },
    { id: '9', nombre: 'Yahir' },
    { id: '10', nombre: 'Gael' },
  ]);

  // Estado para refrescar la lista
  const [refrescando, setRefrescando] = useState(false);

  // Estado para indicar si ya se terminó de cargar todo
  const [noHayMasDatos, setNoHayMasDatos] = useState(false);

  // Estado para evitar que se agreguen más de una vez
  const [yaSeAgregaron, setYaSeAgregaron] = useState(false);

  // Refresca la lista al hacer "pull to refresh"
  const onRefresh = () => {
    setRefrescando(true);

    setTimeout(() => {
      setDatos([
        { id: '11', nombre: 'Diana' },
        { id: '12', nombre: 'Daniela' },
        { id: '13', nombre: 'Gabriel' },
        { id: '14', nombre: 'Miguel' },
        { id: '15', nombre: 'Monse' },
        { id: '16', nombre: 'Uriel' },
        { id: '17', nombre: 'Maximiliano' },
        { id: '18', nombre: 'Christian' },
        { id: '19', nombre: 'Antorio' },
        { id: '20', nombre: 'Gerson' },
        { id: '21', nombre: 'Mario Alberto' },
        { id: '22', nombre: 'Isay' },
      ]);
      setRefrescando(false);
      setYaSeAgregaron(true);
      setNoHayMasDatos(true);
    }, 2000);
  };

  // Lógica al llegar al final de la lista
  const onEndReached = () => {
    // Evita cargar más si ya se agregaron o no hay más
    if (yaSeAgregaron || noHayMasDatos) return;
    setNoHayMasDatos(true); // Simula que ya no hay más datos disponibles
  };

  // Renderiza cada ítem de la lista
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.textoItem}>{item.nombre}</Text>
    </TouchableOpacity>
  );

  // Encabezado de la lista
  const encabezado = () => (
    <Text style={styles.encabezado}>Alumnos S192</Text>
  );

  // Pie de la lista
  const pie = () => (
    <View style={styles.pie}>
      {noHayMasDatos && (
        <Text style={styles.textoPie}>No hay más alumnos para mostrar</Text>
      )}
    </View>
  );

  // Separador visual entre ítems
  const separador = () => <View style={styles.separador} />;

  // Vista principal
  return (
    <View style={styles.contenedor}>
      <FlatList
        data={datos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={encabezado}
        ListFooterComponent={pie}
        ItemSeparatorComponent={separador}
        refreshing={refrescando}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

/* ZONA 3: ESTILOS*/
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
    backgroundColor: '#fffbe7', 
  },
  item: {
    padding: 15,
    backgroundColor: 'pink',
    borderRadius: 50,
  },
  textoItem: {
    fontSize: 16,
    color: '#4b3621',
  },
  encabezado: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
    color: '#5a3e1b',
    textAlign: 'center',
  },
  pie: {
    alignItems: 'center',
    padding: 10,
  },
  textoPie: {
    color: '#888',
    marginTop: 5,
  },
  separador: {
    height: 10,
  },
});

export default App;
