import { useEffect, useState } from "react";
import { accessAllData } from "../api/Clients/access";
const LandingPage = () => {
  const [body, setTheBody] = useState({});

  useEffect(() => {
    const callApi = async () => accessAllData(setTheBody);
    callApi();
  }, []);

  return (
    <div>
      <h1>Iniciando</h1>
      <p>{ console.log(body) }</p>
    </div>);
};

export default LandingPage;