import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';
import Fatego from './pages/Fatego';


export default function App() {

  const Stack=createNativeStackNavigator();

    // const render={
    //     rute:"Home",componente:HomeScreen,
    //     rute:"Fate",componente:Fatego,
    // }

    // const renderItem=({item})=>(<Stack.Screen name={item.rute} component={item.componente} />)

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Fate" component={Fatego} />
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
