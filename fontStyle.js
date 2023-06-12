import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';

export const fontStyle = StyleSheet.create({
  text: {
    fontFamily: 'fuentecita',
    color: "#000",
    // textShadowColor: "#fff",
    // textShadowOffset: { width: -1, height: -1 },
    // textShadowRadius: 0,
  }
});

// Código para cargar fuentes
export const loadCustomFonts = async () => {
  await Font.loadAsync({
    'fuentecita': require('@assets/fonts/AppleGaramond.ttf'),
  });
}