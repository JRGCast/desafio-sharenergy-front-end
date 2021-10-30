import { useEffect, useState } from "react";
const LandingPage = () => {
  const [body, setTheBody] = useState({});
  const url = "https://desafio-sharenergy-back-end.herokuapp.com/clients";
  const options = {
    methods: "GET,PUT,POST,DELETE",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": '*'
    },
  };
  useEffect(() => {
    fetch(url, options).then(response => response.json()).then(jsoned => setTheBody(jsoned));
  }, []);

  return (
    <div>
      <h1>Iniciando</h1>
      <p>{ console.log(body) }</p>
    </div>);
};

export default LandingPage;