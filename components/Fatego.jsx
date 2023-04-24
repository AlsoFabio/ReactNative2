import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity, View, Text, Image } from 'react-native'

export default function Fatego() {
    const [Api, setApi] = useState([])
    const [activo, setActivo] = useState(true)
    const imagenFate = (item) => {
        return { uri: activo ? item.extraAssets.charaGraph.ascension[1] : item.extraAssets.charaGraph.ascension[2] }
    }

    const handleChangeActivo = () => {
        setActivo(!activo)
    }

    const handleAPI = async () => {
        const url = "https://api.atlasacademy.io/export/NA/nice_servant.json";
        const response = await fetch(url)
        const res = await response.json()

        setApi(res)
        console.log(res);
    }

    const handleApiLista = ({ item }) => (
        <View style={{ flex: 1, flexDirection: "col", alignItems: 'center', }}>
            <Text>{item.name}</Text>
            <TouchableOpacity onPress={handleChangeActivo} style={[styles.image]}>
                <Image source={imagenFate(item)} style={[styles.image]} />
            </TouchableOpacity>
        </View>
    )

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleAPI} style={styles.item}>
                <Text>Boton Api</Text>
            </TouchableOpacity>

            <ScrollView style={{ height: "500px" }}>
                <FlatList
                    data={Api}
                    renderItem={handleApiLista}
                />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: '#fff',
        padding: 3,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth: 1,
        borderRadius: 5,
    },
    image: {
        width: "50%",
        height: "150px",
        alignItems: "center",
    },
});
