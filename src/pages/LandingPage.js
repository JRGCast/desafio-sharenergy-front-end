import { useEffect, useState } from "react";
import { accessAllComData } from "../api/Company/accessCom";
import DataWithTime from "../components/DataWithTime";
const LandingPage = () => {
  const [body, setTheBody] = useState({});

  // useEffect(() => {
  //   const callApi = async () => accessAllComData(setTheBody);
  //   callApi();
  // }, []);

  return (
    <div>
      <h1>Iniciando</h1>
      <p>{ console.log(body) }</p>
      <DataWithTime />
    </div>);
};

export default LandingPage;