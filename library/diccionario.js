const diccionario = {
    traerDatos: async (url) => {
        try {
            const response = await fetch(url);
            const res = await response.json();

            return res;
        } catch (error) {
            return alert("O no tenes internet o no carga la api");
        }
    },
    ordenarName: (objeto) => {
        objeto.sort((a, b) => {//Ordenamiento por nombre
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        })
    }
}

module.exports = diccionario