import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const GaleriaScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={('logo.png')} style={styles.logo} />
      <Text style={styles.title}>Galería de Imágenes</Text>
      
      <View style={styles.imageContainer}>
        <Text style={styles.imagePlaceholder}>Imagen 1</Text>
        <Text style={styles.imagePlaceholder}>Imagen 2</Text>
        <Text style={styles.imagePlaceholder}>Imagen 3</Text>
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
  imageContainer: {
    width: '90%',
  },
  imagePlaceholder: {
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

export default GaleriaScreen;
