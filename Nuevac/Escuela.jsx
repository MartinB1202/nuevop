import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function Escuela({ navigation }) {
  
  
  
    return (
    <View style={styles.container}>
      
      <Image source={require('../assets/ing.jpg')} style={styles.image} />
      <Button
        title="Regresar a principal"
        onPress={() => navigation.navigate('Principal')} // Navegar a la pantalla "Datos"
        color="#2196F3" // Color azul para el botón
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo el espacio disponible
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
    backgroundColor: '#2d2a2a', // Fondo claro
    padding: 20,
  },
  
  image: {
    width: 1000, // Ancho de la imagen
    height: 720, // Alto de la imagen
    marginBottom: 20, // Espacio debajo de la imagen
    
    borderWidth: 2, // Borde alrededor de la imagen
    borderColor: '#ccc', // Color del borde
  },
});
