import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/HomeScreen';
import Fatego from '../pages/Fatego';

const Rutas = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Fate" component={Fatego} /* options={{headerShown: false}} */ />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Rutas

const styles = StyleSheet.create({})