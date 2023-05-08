import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonTitle from '../components/ButtonTitle'

const HomeScreen = ({ navigation }) => {
  const views = [
    { title: 'Fate', path: 'Fate' },
  ]

  const renderItem = ({ item }) => <ButtonTitle title={item.title} action={() => navigation.navigate(item.path)} />

  return (
    <View>
      <FlatList data={views} renderItem={renderItem} />
    </View>
  )
}
export default HomeScreen

const styles = StyleSheet.create({})