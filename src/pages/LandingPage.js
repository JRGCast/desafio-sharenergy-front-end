import { useEffect, useState } from "react";
const clientApi = require("../api/Clients/access");
const LandingPage = () => {
  const [body, setTheBody] = useState({});
  // const url = "https://desafio-sharenergy-back-end.herokuapp.com/clients";
  // const options = {
  //   methods: "GET,PUT,POST,DELETE",
  //   mode: "cors",
  //   headers: {
  //     "Access-Control-Allow-Origin": '*'
  //   },
  // };
  useEffect(() => {
    const callApi = async () => clientApi.accessAllData(setTheBody);
    callApi();
  }, []);

  return (
    <div>
      <h1>Iniciando</h1>
      <p>{ console.log(body) }</p>
    </div>);
};

export default LandingPage;