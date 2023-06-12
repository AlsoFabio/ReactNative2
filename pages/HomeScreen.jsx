import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonTitle from '../components/ButtonTitle'

const HomeScreen = ({ navigation }) => {

    const view = [
        { title: "FateGo", path: "Titulo" },
        { title: "Formulario", path: "Formulario" },

    ]

    const renderView = ({item}) => (
        <ButtonTitle title={item.title} action={() => navigation.navigate(item.path)} />
    )
    return (
        <View>
            <FlatList data={view} renderItem={renderView}></FlatList>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})