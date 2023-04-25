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

export default function Fatego() {
  const [Api, setApi] = useState([]);
  useEffect(() => {}, [Api]);

  const handleAPI = async () => {
    const objeto = [];
    try {
      const url = "https://api.atlasacademy.io/export/NA/nice_servant.json";
      const response = await fetch(url);
      const res = await response.json();
      console.log(res);
      for (let i = 0; i < res.length; i++) {
        objeto[i] = {
          name: res[i].name,
          art: res[i].extraAssets.charaGraph.ascension,
          boleano: 1,
        };
      }
      objeto.sort((a, b) => {
        if (a.name < b.name) return -1; // Si a.name es menor que b.name, devolver -1
        if (a.name > b.name) return 1; // Si a.name es mayor que b.name, devolver 1
        return 0; // Si a.name es igual que b.name, devolver 0
      });
      setApi(objeto);
      console.log(objeto);
    } catch (error) {
      alert("Algo malio sal");
    }
  };

  const handleChangeActivo = (name) => {
    const updatedApi = Api.slice(); // crea una copia del estado Api
    const personaje = updatedApi.find((persona) => persona.name === name); // busca el objeto en la copia
    personaje.boleano < 4 // actualiza el valor de boleano
      ? personaje.boleano++
      : (personaje.boleano = 1);
    setApi(updatedApi); // actualiza el estado Api con la copia actualizada
  };

  const handleApiLista = ({ item }) => (
    <View style={{ flex: 1, flexDirection: "col", alignItems: "center" }}>
      <Text>{item.name}</Text>
      <TouchableOpacity
        onPress={() => {
          handleChangeActivo(item.name);
        }}
        style={[styles.image]}
      >
        <Image
          source={
            item.art[
              item.boleano
            ] /* handleCambiarImagen(item.boleano, item.art) */
          }
          style={[styles.image]}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleAPI} style={styles.item}>
        <Text>Boton Api</Text>
      </TouchableOpacity>

      <ScrollView style={{ height: "500px" }}>
        <FlatList data={Api} renderItem={handleApiLista} />
      </ScrollView>
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
    backgroundColor: "#fff",
    padding: 3,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 5,
  },
  image: {
    width: "71%",
    height: "150px",
    alignItems: "center",
  },
});
