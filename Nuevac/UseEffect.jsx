
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

const UseEffect = () => {
    const [users, setUsers] = useState([]); // Estado para almacenar los usuarios.
    const [isLoading, setIsLoading] = useState(true); // Estado para manejar el indicador de carga.

    useEffect(() => {
        // Función para obtener los datos de la API.
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json(); // Convertir la respuesta a JSON.
                setUsers(data); // Actualizar el estado con los datos obtenidos.
                setIsLoading(false); // Desactivar el indicador de carga.
            } catch (error) {
                console.error("Error al obtener los usuarios:", error);
            }
        };

        fetchUsers(); // Llamar a la función.
    }, []); // [] asegura que solo se ejecute al montar el componente.

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" /> // Indicador de carga.
            ) : (
                <FlatList
                    data={users} // Datos a mostrar.
                    keyExtractor={(item) => item.id.toString()} // Clave única para cada elemento.
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.email}>{item.email}</Text>
                        </View>
                    )}
                />
            )}
        </View>
    );
};

export default UseEffect;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f9f9f9",
    },
    card: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    email: {
        fontSize: 14,
        color: "#666",
    },
});
