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
    const fetching = await fetch(url, options);
    const jsoning = await fetching.json();
    return jsoning;
  } catch (error) {
    console.log(error);
    return (JSON.stringify(error.message));
  }
};

export { accessApi, };
