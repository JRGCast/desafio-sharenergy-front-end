const url = "https://desafio-sharenergy-back-end.herokuapp.com/clients";
const options = {
  methods: "GET,PUT,POST,DELETE",
  mode: "cors",
  headers: {
    "Access-Control-Allow-Origin": '*'
  },
};

export const accessAllData = async (setState) => fetch(url, options).then(response => response.json()).then(jsoned => setState(jsoned));