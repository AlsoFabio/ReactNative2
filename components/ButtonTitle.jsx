import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { fontStyle } from '../fontStyle'

const ButtonTitle = ({ title, action }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={action}>
      <Text style={[fontStyle.text,styles.title]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonTitle

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f0f0f050',
    borderRadius: 100,
    alignItems: 'center',
    // borderWidth:1,
    // borderColor:'skyblue'
  },
  title: {
    fontSize: 25,  
  }
})