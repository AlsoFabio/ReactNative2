import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';

const Card = (props) => {
    const { name, art, artIndex, borrar, changeImage } = props;
    //name,art y artIndex vienen del objeto, borrar y changeImagen son funciones que recibe

    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <TouchableOpacity onPress={changeImage} style={[styles.image]}>
                <Image source={{uri: art[artIndex]}} style={[styles.image]}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={borrar} style={styles.boton}>
                <Text>Eliminar</Text>
            <EvilIcons name="trash" size={24} color="black" style={styles.icon}/>
            </TouchableOpacity>
        </View >
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    item: {
        backgroundColor: "#0f0",
        padding: 3,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth: 1,
        borderRadius: 10,
    },
    image: {
        width: 150,
        height: 150,
        alignItems: "center",
        resizeMode: "contain"
    },
    boton: {
        marginVertical: 10,
        padding: 3,
        backgroundColor: "#f00",
        borderRadius: 15,
        borderWidth: 0.5
    },
    icon:{
        
    }
});