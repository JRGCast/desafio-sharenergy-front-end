import { TextField } from "@material-ui/core";
import { useContext } from "react";
import AppContext from "../Context/AppContext";

const LandingPage = () => {
  const { currClientName, setCurrClientName } = useContext(AppContext);

  const handleChange = ({ target }) => setCurrClientName(target.value);
  return (
    <div>
      <h1>Bem-vindo/a { currClientName }</h1>
      <TextField
        label='Como quer ser chamado/a?'
        type='text'
        onChange={ handleChange }
        style={ { margin: '1em auto' } }
      />
    </div>);
};

export default LandingPage;