import { StyleSheet,ImageBackground, Text, View, Image } from 'react-native'
import React from 'react'
import ButtonTitle from '../components/ButtonTitle'

const Titulo = ({ navigation }) => {
  // const views = [
  //   {title:'no existe', path:'No Existe'},
  //   { title: 'Fate', path: 'Fate' },
  //   {title:'Quesiño', path:'Quesito'}
  // ]

  // const renderItem = ({ item }) => <ButtonTitle title={item.title} action={() => navigation.navigate(item.path)} />

  return (
    <ImageBackground source={require('../img/main_hd2.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* <View style={styles.logoConteiner}>
          <Image source={require("../img/Fate_Grand_Order_logo.png")} style={styles.logo}/>
        </View> */}
        {/* <View style={styles.botonConteiner}> */}
          <ButtonTitle title="See Servants" action={() => navigation.navigate('Fate')}/>
        {/* </View> */}
      </View>
    </ImageBackground>
  )
}
export default Titulo

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-end',
  },
  // botonConteiner:{
  //   justifyContent: 'flex-end',
  // }
  // logoConteiner:{
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginBottom: "350@s",
  // },
  // logo:{
  //   alignSelf: 'center',
  //   width: "100%",
  //   height:211,
  //   resizeMode:"contain"
  // },
})