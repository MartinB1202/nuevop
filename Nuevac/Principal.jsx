import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default function Principal() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Principal</Text>
      <View style={styles.buttonContainer}>
        <Button 
          title="Visualizar Avatar" 
          onPress={() => navigation.navigate('Avatar')} 
          color="#4CAF50" // Color del botón
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Visualizar Datos" 
          onPress={() => navigation.navigate('Datos')} 
          color="#1987bd" // Color del botón
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Visualizar Escuela" 
          onPress={() => navigation.navigate('Escuela')} 
          color="#7319bd" // Color del botón
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Uso de Fetch" 
          onPress={() => navigation.navigate('Fetch')} 
          color="#7319bd" // Color del botón
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Uso de UseEffect" 
          onPress={() => navigation.navigate('UseEffect')} 
          color="#7319bd" // Color del botón
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Uso de UseState" 
          onPress={() => navigation.navigate('UseState')} 
          color="#7319bd" // Color del botón
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo el espacio disponible
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
    backgroundColor: '#2d2a2a', // Fondo oscuro
    padding: 20,
  },
  title: {
    fontSize: 24, // Tamaño del texto
    fontWeight: 'bold', // Texto en negrita
    color: '#cbdbe3', // Color del texto
    marginBottom: 20, // Espacio debajo del título
  },
  buttonContainer: {
    marginBottom: 30, // Espacio entre los botones
    width: '60%', // Opcional: ajusta el ancho de los botones   
    borderWidth: 2, // Borde alrededor de la imagen
    borderColor: '#29007a', // Color del borde
  },
});

