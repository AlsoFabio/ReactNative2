import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';

export const fontStyle = StyleSheet.create({
  text: {
    fontFamily: 'fuentecita',
    textShadowColor: "#fff",
    color: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  }
});

// Código para cargar fuentes
export const loadCustomFonts = async () => {
  await Font.loadAsync({
    'fuentecita': require('@assets/fonts/AppleGaramond.ttf'),
  });
}