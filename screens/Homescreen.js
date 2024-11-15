import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Contenedor del Logo y Botón de Login */}
      <View style={styles.headerContainer}>
        <Image source={('l.png')} style={styles.logo} />
        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginText}>Acceso</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Bienvenido a SUNSUCA</Text>
      <Text style={styles.subtitle}>Servicios de Agricultura Ecológica</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          color="#DCAE1D" 
          title="Servicios" 
          onPress={() => navigation.navigate('Servicios')} 
        />
        <Button 
          color="#DCAE1D" 
          title="Galería" 
          onPress={() => navigation.navigate('Galeria')} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 50,
  },
  logo: {
    width: 60,
    height: 60,
    alignSelf: 'left',
  },
  loginButton: {
    backgroundColor: '#DCAE1D',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  loginText: {
    fontSize: 16,
    fontFamily: 'Thonburi',
    color: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Thonburi',
    color: '#004D4D',
    marginBottom: 10,
    marginTop: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Thonburi',
    color: '#888888',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
  },
  button: {
    marginBottom: 15,
  },
});

export default HomeScreen;
