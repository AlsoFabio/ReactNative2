import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { loadCustomFonts } from './fontStyle';
import Rutas from './components/Rutas';

export default function App() {

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
    <Rutas/>
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
