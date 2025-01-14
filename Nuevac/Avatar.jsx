import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function Avatar({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Martin Botello Aguilar</Text>
      <Image source={require('../assets/giga.webp')} style={styles.image} />
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
  title: {
    fontSize: 24, // Tamaño del texto
    fontWeight: 'bold', // Texto en negrita
    color: '#cbdbe3', // Color del texto
    marginBottom: 20, // Espacio debajo del título
  },
  image: {
    width: 200, // Ancho de la imagen
    height: 200, // Alto de la imagen
    marginBottom: 20, // Espacio debajo de la imagen
    
    borderWidth: 2, // Borde alrededor de la imagen
    borderColor: '#ccc', // Color del borde
  },
});
