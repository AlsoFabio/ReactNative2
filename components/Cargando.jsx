import { StyleSheet, Text, View } from 'react-native'

const Cargando = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cargando...</Text>
    </View>
  )
}

export default Cargando

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "trasparent",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  }
})