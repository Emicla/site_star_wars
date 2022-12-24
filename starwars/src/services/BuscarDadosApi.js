import axios from "axios";

export const buscarApi = (url) => {
    return new Promise(async (resolve, reject) => {
        try {
            axios.get(url)
                .then((dados) => {
                    // console.log(dados.data.results)
                    resolve (dados.data.results);
                })
                .catch((erro) => console.log("Algo deu errado: " + erro));
        } catch (error) {
            reject(error)
        }
    })
}