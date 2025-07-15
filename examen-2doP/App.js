import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ActivityIndicator, ScrollView, Image, TouchableOpacity, ImageBackground, SafeAreaView, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// SplashScreen de bienvenida
const FondoBienvenida = () => (
  <ImageBackground
    source={require('./assets/fondo.png')}
    style={styles.fondo}
  >
    <View style={styles.contenido}>
      <Text style={styles.titulo}>Clima</Text>
    </View>
  </ImageBackground>
);

const API_KEY = 'ca623c29c7e64373a00203127250707';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [matchingCities, setMatchingCities] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const searchCities = async (cityName) => {
    setLoading(true);
    setMatchingCities([]);
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${encodeURIComponent(cityName)}`
      );
      if (!res.ok) throw new Error('Error al buscar ciudades');
      const data = await res.json();
      if (data.length === 0) {
        Alert.alert('Sin resultados', 'No se encontraron coincidencias.');
        return;
      }
      setMatchingCities(data);
    } catch (err) {
      Alert.alert('Error', err.message || 'Error al buscar coincidencias');
    } finally {
      setLoading(false);
    }
  };

  const fetchWeather = async (cityObj) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityObj.url}&lang=es`
      );
      if (!res.ok) throw new Error('Ciudad no encontrada');
      const data = await res.json();
      return {
        name: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c,
        condition: data.current.condition.text,
        icon: `https:${data.current.condition.icon}`,
        id: data.location.name + '-' + data.location.lat + '-' + data.location.lon,
      };
    } catch (err) {
      Alert.alert('Error', err.message || 'Error de conexión');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleAddCity = async () => {
    const trimmed = city.trim();
    if (!trimmed) {
      Alert.alert('Campo vacío', 'Por favor, ingresa una ciudad.');
      return;
    }
    await searchCities(trimmed);
  };

  const handleSelectCity = async (cityObj) => {
    const exists = cities.some(
      c =>
        c.name.toLowerCase() === cityObj.name.toLowerCase() &&
        c.country.toLowerCase() === cityObj.country.toLowerCase()
    );
    if (exists) {
      Alert.alert('Ciudad existente', 'Esta ciudad ya fue agregada.');
      setMatchingCities([]);
      return;
    }
    const weather = await fetchWeather(cityObj);
    if (weather) {
      setCities([weather, ...cities]);
      setCity('');
      setMatchingCities([]);
    }
  };

  const handleRemoveCity = (id) => {
    setCities(cities.filter(c => c.id !== id));
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
          <View style={styles.innerContainer}>
            <View style={styles.headerBg}>
              <Text style={styles.title}>CLIMA DE CIUDADES</Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  placeholder="Ingresa una ciudad"
                  value={city}
                  onChangeText={setCity}
                  onSubmitEditing={handleAddCity}
                />
                <TouchableOpacity style={styles.addButton} onPress={handleAddCity}>
                  <Text style={styles.addButtonText}>Buscar</Text>
                </TouchableOpacity>
              </View>
            </View>

            {matchingCities.length > 0 && (
              <View style={styles.matchList}>
                {matchingCities.map((c, i) => (
                  <TouchableOpacity key={i} onPress={() => handleSelectCity(c)} style={styles.matchItem}>
                    <Text>{c.name}, {c.region}, {c.country}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {loading && <ActivityIndicator size="large" color="#ffffff" style={{ marginTop: 20 }} />}

            <ScrollView style={styles.scroll} contentContainerStyle={{ paddingBottom: 20 }}>
              {cities.map((c) => (
                <View key={c.id} style={styles.cityCard}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <Image source={{ uri: c.icon }} style={styles.icon} />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={styles.cityName}>{c.name}, {c.country}</Text>
                      <Text style={styles.temp}>{c.temp}°C</Text>
                      <Text style={styles.condition}>{c.condition}</Text>
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => handleRemoveCity(c.id)}>
                    <Text style={styles.removeBtn}>✕</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
            <StatusBar style="light" />
          </View>
        </ImageBackground>
      )}
    </SafeAreaView>
  );
}

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
  innerContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    alignSelf: 'center',
    color: '#ffffff',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: '#fff',
    marginRight: 8,
  },
  addButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  matchList: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    padding: 8,
  },
  matchItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  scroll: {
    flex: 1,
    marginTop: 8,
  },
  cityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    elevation: 2,
  },
  icon: {
    width: 50,
    height: 50,
  },
  cityName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 16,
  },
  condition: {
    fontSize: 14,
    color: '#555',
  },
  removeBtn: {
    fontSize: 22,
    color: '#ff4444',
    marginLeft: 10,
    padding: 4,
  },
  headerBg: {
    backgroundColor: 'rgba(0,0,0,0.45)',
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
});
