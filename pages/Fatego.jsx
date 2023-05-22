import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
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
import { ScaledSheet } from "react-native-size-matters";
import Card from "../components/Card";

export default function Fatego() {
  const [Api, setApi] = useState();
  const [apiFiltrada, setApiFiltrada] = useState();
  const [cargando, setCargando] = useState(false);
  const [buscado, setBuscado] = useState("");

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
      // console.log(res);
      for (let i = 0; i < res.length; i++) {
        objeto[i] = {
          name: res[i].name,
          art: res[i].extraAssets.charaGraph.ascension,
          artIndex: 1,
        };
      }
      // ordenarName(objeto)// Ordena el objeto por el atributo name

      setApi(objeto);
      setCargando(false);
    } catch (error) {
      alert(`Algo esta malito: ${error}`);
      setCargando(false);
    }
  };

  const handleBuscado = (text) => {
    const filteredData = Api.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredApi(filteredData);
    setBuscado(text);
  };

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
    setApi((prevApi) => prevApi.filter((e) => e.name != nombresito)); // Borra la tarjeta elejida

  const handleApiLista = ({ item }) => (
    <Card
      name={item.name}
      art={item.art}
      artIndex={item.artIndex}
      changeImage={() => handleChangeImage(item.name)}
      borrar={() => handleBorrar(item.name)}
    ></Card>
  );

  return (
    <View style={styles.container}>
      {cargando && <Cargando />}

      {!cargando && (
        <TextInput
          placeholder="Buscar por nombre"
          value={buscado}
          onChangeText={handleBuscado}
        />
      )}

      {
        apiFiltrada
        ?<FlatList data={filteredApi} renderItem={handleApiLista} style={{width:'100%'}} />
        :<FlatList data={Api}
          renderItem={handleApiLista}
          style={{ width: "100%" }}
        />
      }
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
  boton: {
    marginVertical: 10,
    padding: 3,
    backgroundColor: "#f00",
    borderRadius: 15,
    borderWidth: 0.5,
  },
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
