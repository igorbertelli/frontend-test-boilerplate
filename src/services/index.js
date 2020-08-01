import axios from "axios";

const getMarcas = () =>
  axios
    .get("https://parallelum.com.br/fipe/api/v1/carros/marcas")
    .then((res) => {
      return res.data;
    })
    .catch((err) => Promise.reject(err));

const getModelos = (marcaSelecionada) =>
  axios
    .get(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${marcaSelecionada}/modelos`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => Promise.reject(err));

export { getMarcas, getModelos };
