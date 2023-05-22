import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, TextInput } from "react-native";
import {
  FlatList,
  View,
} from "react-native";
import { ordenarName, traerDatos } from "../library/diccionario";
import Cargando from "../components/Cargando";
import Card from "../components/Card";
import Constants from 'expo-constants'

export default function Fatego() {
  const [Api, setApi] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    handleAPI();
  }, []);

  const handleAPI = async () => {
    const objeto = [];
    try {
      setCargando(true);
      const res = await traerDatos(
        "https://api.atlasacademy.io/export/NA/nice_servant.json"
      );
      ordenarName(res)// Ordena el objeto por el atributo name
      
      for (let i = 0; i < res.length; i++) {
        if(res[i].extraAssets.status.ascension){
          objeto[i] = {
            name: res[i].name,
            art: res[i].extraAssets.status.ascension,
            artIndex: 3,
          };
        }
      }

      setApi(objeto);
      setCargando(false);
    } catch (error) {
      alert(`Algo esta malito: ${error}`);
      setCargando(false);
    }
  };

  // const handleBuscado = (text) => {
  //   const filteredData = Api.filter((item) =>
  //     item.name.toLowerCase().includes(text.toLowerCase())
  //   );
  //   setFilteredApi(filteredData);
  //   setBuscado(text);
  // };

  const handleChangeImage = (name) => {
    // use chat GPT acá
    const updatedApi = Api.slice(); // crea una copia del estado Api
    const personaje = updatedApi.find((persona) => persona.name === name); // busca el objeto en la copia
    personaje.artIndex < 4 // actualiza el valor de indice de la imagen
      ? personaje.artIndex++
      : (personaje.artIndex = 1);
    setApi(updatedApi); // actualiza el estado Api con la copia actualizada
  };

  const handleBorrar = (nombresito) =>
    setApi(Api.filter((e) => e.name != nombresito)); // Borra la tarjeta elejida

  const handleApiLista = ({ item }) => (
    <Card
      name={item.name}
      art={item.art}
      artIndex={item.artIndex}
      changeImage={() => handleChangeImage(item.name)}
      borrar={() => handleBorrar(item.name)}
    ></Card>
  );

  const handleBuscar = Api.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={require('../img/main_bg.jpg')}>
        {cargando && <Cargando />}

        {!cargando && (
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar por nombre"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        )}
        <FlatList data={handleBuscar}
          renderItem={handleApiLista}
          style={{ width: "100%" }}
          numColumns={2} />
      </ImageBackground>
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
    marginVertical: "8@s",
    marginHorizontal: "16@s",
    borderWidth: "1@s",
    borderRadius: "10@s",
  },
  image: {
    width: "71%",
    height: "150@s",
    alignItems: "center",
  },
  boton: {
    marginVertical: "10@s",
    padding: "3@s",
    backgroundColor: "#f00",
    borderRadius: "15@s",
    borderWidth: "0.5@s",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: 'center',
    alignItems: "center",
  },
  searchInput: {
    width: "50%",
    textAlign: 'center',
    height: 30,
    color: "#00000050",
    borderRadius: 8,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: "#f0f0f0",
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
