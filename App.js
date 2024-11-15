import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Homescreen';
import ServiciosScreen from './screens/ServiciosScreen';
import GaleriaScreen from './screens/GaleriaScreen';
import LoginScreen from './screens/LoginScreen';
import EventosScreen from './screens/EventosScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#004D4D',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Thonburi',
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Servicios" component={ServiciosScreen} />
        <Stack.Screen name="Galeria" component={GaleriaScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Eventos" component={EventosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


