import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { fontStyle } from '../fontStyle';

const Card = (props) => {
    const { name, art, /* artIndex, */ borrar, details, } = props;
    //name,art y artIndex vienen del objeto, borrar y changeImagen son funciones que recibe

    return (
        <View style={styles.container}>

            <Text style={[fontStyle.text, styles.text]}>{name}</Text>

            <TouchableOpacity onPress={details} style={[styles.image]}>
                <Image source={{ uri: art[3] }} style={[styles.image]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={borrar} style={styles.boton}>
                <Text style={[fontStyle.text, styles.text]}>Eliminar</Text>
                <EvilIcons name="trash" size={24} color="black" />
            </TouchableOpacity>

        </View >
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff50",
        padding: 12,
        margin: 8,
        borderRadius: 5,
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
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        padding: 3,
        backgroundColor: "#3355ff50",
        borderRadius: 15,
        // borderWidth: 0.5
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        // textShadowRadius: 0
    }
});