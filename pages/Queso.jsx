import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Queso = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={require("../img/queso.jpg")} style={styles.imagen}></Image>
            </TouchableOpacity>
        </View>
    )
}

export default Queso

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    imagen: {
        alignItems: "center",
        justifyContent: "center",
        transform: [{ scale: 0.31622 }]
    }
})