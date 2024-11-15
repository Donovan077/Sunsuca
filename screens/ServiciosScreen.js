import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ServiciosScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={('logo.png')} style={styles.logo} />
      <Text style={styles.title}>Nuestros Servicios</Text>
      
      <View style={styles.serviceContainer}>
        <Text style={styles.service}>Sembrado Ecológico</Text>
        <Text style={styles.service}>Riego Automático</Text>
        <Text style={styles.service}>Cuidado del Medio Ambiente</Text>
        <Text style={styles.service}>Procesamiento de Residuos Biológicos</Text>
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A4D555',
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Thonburi',
    color: '#004D4D',
    marginBottom: 30,
    textAlign: 'center',
  },
  serviceContainer: {
    width: '90%',
  },
  service: {
    fontSize: 18,
    fontFamily: 'Thonburi',
    color: '#DCAE1D',
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#004D4D',
    textAlign: 'center',
  },
});

export default ServiciosScreen;
