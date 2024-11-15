import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const EventosScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={('logo.png')} style={styles.logo} />
      <Text style={styles.title}>Gestión de Eventos y Citas</Text>
      
      <View style={styles.eventContainer}>
        <Text style={styles.event}>Evento 1</Text>
        <Text style={styles.event}>Evento 2</Text>
        <Text style={styles.event}>Evento 3</Text>
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
  eventContainer: {
    width: '90%',
  },
  event: {
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

export default EventosScreen;
