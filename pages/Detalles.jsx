import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import { fontStyle } from '../fontStyle';

const Detalles = ({ route }) => {
    const { name, details } = route.params;
    const { atkBase, atkMax, hpBase, hpMax, cards, gender, className } = details

    const vista = [
        { titulo: "BattleName", valor: name },
        { titulo: "Clase", valor: className },
        { titulo: "Genero", valor: gender },
        { titulo: "Atk Base", valor: atkBase },
        { titulo: "Atk Max", valor: atkMax },
        { titulo: "Hp Base", valor: hpBase },
        { titulo: "Hp Max", valor: hpMax },
        { titulo: "Cartas", valor: cards.join(", ") },
    ]

    const renderItem = ({ item }) => {
        return <Text style={[fontStyle.text, styles.text]}>{item.titulo} : {item.valor}</Text>
    }
    return (
        <ImageBackground style={styles.backgroundImage} source={require("../img/chaldea.jpg")}>
            <View style={styles.container}>
                <FlatList data={vista} renderItem={renderItem}></FlatList>
            </View>
        </ImageBackground>
    )
}

export default Detalles

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundImage: {
        flex: 1,
        height: "100%",
        resizeMode: 'center',
    },
    text: {
        color: "#ffffff",
        fontSize: 20,
        textAlign: "left",
    }
})