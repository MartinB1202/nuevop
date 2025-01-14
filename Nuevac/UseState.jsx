import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const UseState = () => {
    const [count, setCount] = useState(0); // Estado inicial del contador.

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contador: {count}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Incrementar" onPress={() => setCount(count + 1)} />
                <Button title="Decrementar" onPress={() => setCount(count - 1)} />
                <Button title="Reiniciar" onPress={() => setCount(0)} />
            </View>
        </View>
    );
};

export default UseState;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    buttonContainer: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-around",
    },
});
