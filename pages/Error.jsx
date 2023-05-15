import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Error = () => {

    return (
        <View style={[styles.container]}>
            <Image source={require('../img/error-404.png')} style={{ width: 350, height: 350 }} />
        </View>
    )
}

export default Error

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        flex:1
    }
})