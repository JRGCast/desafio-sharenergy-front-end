import { Box, TextField } from "@material-ui/core";
import { useState } from "react";

const clientUrl = process.env.REACT_APP_CLIENT_URL_FULL;
const clientAdd = `${clientUrl}/newclient`;

const AddClient = () => {
  const [newClientData, setNewClientData] = useState({ nomeCliente: '', numeroCliente: 99, usinas: [] });
  return (
    <main>
      <Box
        component="form"
        noValidate
        autoComplete="off">
        <TextField
          id="input-name"
          label="Nome do Novo Cliente"
          name="nomeCliente"
          type="text"
          // inputProps={ inputPropsTime.inputPropsHour }
          // onChange={ (e) => formatInputTime(e) }
          InputLabelProps={ {
            shrink: true,
          } }
        />
      </Box>
    </main>);
};

export default AddClient;