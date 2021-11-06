require('dotenv').config();

const optionsNoBody = {
  methods: "GET,PUT,POST,DELETE",
  mode: "cors",
  headers: {
    "Access-Control-Allow-Origin": '*'
  },
};

const accessApi = async (url, options = optionsNoBody) => {
  try {
    console.log('fetch', options);
    console.log('stringy opções', JSON.stringify(options));
    console.log('Objeto do back-end', JSON.stringify({
      "clientData": {
        "nomeCliente": "Fulano",
      },
      "updateData": {
        "novoNome": "Beltrano"
      }
    }));
    const fetching = await fetch(url, options);
    const jsoning = await fetching.json();
    return jsoning;
  } catch (error) {
    console.log(error);
    return (JSON.stringify(error.message));
  }
};

export { accessApi };
