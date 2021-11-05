import { useContext } from "react";
import AppContext from "../Context/AppContext";

const UserName = () => {
  const { currClientName } = useContext(AppContext);
  return (<h2>Usuário { currClientName }</h2>);
};

export default UserName;