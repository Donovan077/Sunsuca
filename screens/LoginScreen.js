import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={('logo.png')} style={styles.logo} />
      <Text style={styles.title}>Acceso Clientes/Administradores</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Usuario" 
        placeholderTextColor="#888"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Contraseña" 
        secureTextEntry 
        placeholderTextColor="#888"
      />
      
      <View style={styles.buttonContainer}>
        <Button 
          color="#DCAE1D" 
          title="Ingresar" 
          onPress={() => navigation.navigate('Eventos')} 
        />
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
  input: {
    height: 40,
    borderColor: '#004D4D',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '80%',
    fontFamily: 'Thonburi',
    backgroundColor: '#FFFFFF',
  },
  buttonContainer: {
    width: '80%',
    marginTop: 20,
  },
});

export default LoginScreen;
