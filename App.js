import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';
import Fatego from './pages/Fatego';
import Error from './pages/Error';
import Queso from './pages/Queso';
import { useEffect, useState } from 'react';
import { loadCustomFonts } from './fontStyle';


export default function App() {

  const Stack = createNativeStackNavigator();
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    const loadFont = async () => {
      await loadCustomFonts();
      setFontLoaded(true);
    };

    loadFont();
  }, [])

  if (!fontLoaded) {
    return null; // Otra vista de carga o indicador de carga
  }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown: false}}/>
          <Stack.Screen name="Fate" component={Fatego} /* options={{headerShown: false}} *//>
          <Stack.Screen name="No Existe" component={Error} />
          <Stack.Screen name="Quesito" component={Queso} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
