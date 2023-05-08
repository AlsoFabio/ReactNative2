import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Image,
} from "react-native";
import { ordenarName, traerDatos } from "../library/diccionario";
import Cargando from "../components/Cargando";
import { ScaledSheet } from 'react-native-size-matters'


export default function Fatego() {
  const [Api, setApi] = useState();
  const [cargando, setCargando] = useState(false);
  useEffect(() => { }, [Api]);

  const handleAPI = async() => {
    const objeto = [];
    try {
      setCargando(true);
    const res=await traerDatos('https://api.atlasacademy.io/export/NA/nice_servant.json')
      for (let i = 0; i < res.length; i++) {
        objeto[i] = {
          name: res[i].name,
          art: res[i].extraAssets.charaGraph.ascension,
          artIndex: 1,
        };
      }
      ordenarName(objeto)// Ordena el objeto por el atributo name

      setApi(objeto);
      setCargando(false);
    } catch (error) {
      alert(`Algo esta malito: ${error}`)
      setCargando(false);
    }
  }

  const handleChangeImage = (name) => {// use chat GPT acá
    const updatedApi = Api.slice(); // crea una copia del estado Api
    const personaje = updatedApi.find((persona) => persona.name === name); // busca el objeto en la copia
    personaje.artIndex < 4 // actualiza el valor de indice de la imagen
      ? personaje.artIndex++
      : (personaje.artIndex = 1);
    setApi(updatedApi); // actualiza el estado Api con la copia actualizada
  };

  const handleApiLista = ({ item }) => (
    <View style={styles.container}>
      <Text>{item.name}</Text>
      <TouchableOpacity
        onPress={() => {
          handleChangeImage(item.name);
        }}
        style={[styles.image]}
      >
        <Image
          source={{
            uri:item.art[item.artIndex]}
          }
          style={[styles.image]}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {!Api && <TouchableOpacity onPress={handleAPI} style={styles.item}>
        <Text>Movistar</Text>
      </TouchableOpacity>}

      {cargando && <Cargando/>}
        

          <FlatList data={Api} renderItem={handleApiLista} />
        
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "#0f0",
    padding: 3,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 10,
  },
  image: {
    width: "71%",
    height: 150,
    alignItems: "center",
  },
  viewLista: {
    alignItems: "center",
  }
});
// const estilitos = ScaledSheet.create({
//   container: {
//       width: '100@vs', // = scale(100)
//       height: '300@vs', // = verticalScale(200)
//       padding: '2@vs', // = Math.round(moderateScale(2))
//       alignItems: "center",
//       justifyContent: "center",
//   },
//   row: {
//       padding: '10@mvs', // = moderateScale(10, 0.3)
//       width: '150@mvs', // = moderateScale(50)
//       height: '3@mvs0.3' // = moderateVerticalScale(30, 0.3)
//   }
// });
