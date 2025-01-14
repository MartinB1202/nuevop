import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Datos({nombre}) {
  return (
    <View style={styles.container}>
      
      
      <TextInput style={styles.ti} placeholder='Dame tu nombre'></TextInput>
      <TextInput style={styles.ti} placeholder='Dame tu Apellido'></TextInput>
      <TextInput style={styles.ti} placeholder='Dame tu Edad'></TextInput>
      
       
    </View>
  );



}


styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2d2a2a',
  },
  ti:{
    textAlign: 'center',
    fontWeight: 'bold', 
    color: '#cbdbe3', 
    height: 40,
    borderColor: '29007a',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 8,
    marginBottom: 16,
    borderRadius: 15,
  },

});