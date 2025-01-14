import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FlatList} from 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native-web';

const Fetch = () => {
    

    const[products, setProducts] = useState([]); //Almacena el producto
    const[isLoading, setIsLoading] = useState(true); //Indica si los datos estan cargando
    
    useEffect(()=>{
        getProducts(); //useEffect llama a la funcion para obtner los datos de la api
    },[]);//Array vacio significa que solo se ejecutara una vez, si ponemos un valor dentro
    //el efecto cambiara cada vez que cambie
    
    const getProducts = () => {
        const URL = "https://fakestoreapi.com/products";
        fetch(URL) //Realiza solicitudos para obtener los datos del un servidor
        .then((res) =>{
            if(!res.ok){
            throw new Error("Algo salio mal");
        }
        return res.json();
        })
        .then((data) =>{
            setProducts(data);
            setIsLoading(false);
            console.log(data);
        })
        .catch((error) =>{
            console.log(error.message);
        });
        
    };

    return(
        <View>
            {isLoading ? (
                <ActivityIndicator color='red' size="large"/> 
            ): <FlatList showsVerticalScrollIndicator={false} data={products} renderItem={({item}) =>(
                <View style={styles.cardContainer}>
                    <Image source={{uri: item.image}} style={styles.image}/>
                    <Text style={{fontSize:18, textAlign:'center'}}>{item.price}</Text>
    
    
                </View>    
    
            )}/>}
       


        </View>

    );
    

};

export default Fetch;

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor:"#fff",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {width: 0, height:2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginTop: 20,
    },
    image:{
        height:200,
        width: 200,
    },
    errorStyle:{
        color:"red",
        fontSize: 18,
    }


    });