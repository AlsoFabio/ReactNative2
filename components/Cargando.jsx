import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cargando = () => {
  return (
    <View style={styles.container}>
      <Text>Cargando...</Text>
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
  }
})