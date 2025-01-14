
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Avatar from './Nuevac/Avatar';
import Datos from './Nuevac/Datos';
import Principal from './Nuevac/Principal';
import Escuela from './Nuevac/Escuela';
import Fetch from './Nuevac/Fetch';
import UseEffect from './Nuevac/UseEffect';
import UseState from './Nuevac/UseState';

const Stack = createStackNavigator(); // Crear el stack navigator correctamente

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal"
      screenOptions={{
        headerStyle: { backgroundColor: '#2d2a2a' }, // Color de fondo del encabezado
        headerTintColor: '#FFFFFF', // Color del texto y los íconos del encabezado
        headerTitleStyle: { fontWeight: 'bold' }, // Opcional: negrita en el título
      }}>
        {/* Define las pantallas dentro del stack */}
        <Stack.Screen name="Principal" component={Principal} options={{title:'Inicio'}}/>
        <Stack.Screen name="Avatar" component={Avatar} options={{title:'Mi avatar'}}/>
        <Stack.Screen name="Datos" component={Datos} options={{title:'Ingreso de datos'}}/>
        <Stack.Screen name="Escuela" component={Escuela} options={{title:'Imagen de la escuela'}}/>
        <Stack.Screen name="Fetch" component={Fetch} options={{title:'Uso de Fetch'}}/>
        <Stack.Screen name="UseEffect" component={UseEffect} options={{title:'Uso de useEffect'}}/>
        <Stack.Screen name="UseState" component={UseState} options={{title:'Uso de useState'}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}



