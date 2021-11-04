require('dotenv').config();
const clientUrl = process.env.REACT_APP_CLIENT_URL_FULL;
const options = {
  methods: "GET,PUT,POST,DELETE",
  mode: "cors",
  headers: {
    "Access-Control-Allow-Origin": '*'
  },
};

const accessAllData = async (setState) => fetch(clientUrl, options).then(response => response.json()).then(jsoned => setState(jsoned))
  .then(console.log(clientUrl));


module.exports = { accessAllData };