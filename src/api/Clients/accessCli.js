require('dotenv').config();
const clientUrl = process.env.REACT_APP_CLIENT_URL_FULL;
const options = {
  methods: "GET,PUT,POST,DELETE",
  mode: "cors",
  headers: {
    "Access-Control-Allow-Origin": '*'
  },
};

const accessAllCliData = async (setState) => {
  try {
    const fetching = await fetch(clientUrl, options);
    const jsoning = await fetching.json();
    const setTheState = setState(jsoning);
    return setTheState;
  } catch (error) {
    console.log(error);
    return setState(JSON.stringify(error));
  }
};

export { accessAllCliData };
