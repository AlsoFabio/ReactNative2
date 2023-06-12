import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Titulo from '../pages/Titulo';
import Fatego from '../pages/Fatego';
import Detalles from '../pages/Detalles';
import Formulario from '../pages/Formulario';
import HomeScreen from '../pages/HomeScreen';

const Rutas = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={HomeScreen} /* options={{ headerShown: false }} */ />
                <Stack.Screen name="Titulo" component={Titulo} options={{ headerShown: false }} />
                <Stack.Screen name="Fate" component={Fatego} options={{ headerShown: false }} />
                <Stack.Screen name="Formulario" component={Formulario} /* options={{headerShown: false}} */ />
                <Stack.Screen name="Detalles" component={Detalles} /* options={{headerShown: false}} */ />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Rutas

const styles = StyleSheet.create({})