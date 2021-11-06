import { Box, Button, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
const ModifyClientForm = ({ functionsObj, selectValue }) => {
  const { fillClientOldName, fillClientNewName, fillUsinaObj, handleSubmitClient } = functionsObj;
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={ { display: 'flex', flexDirection: 'column', width: '50%', margin: '0 auto' } }>
      <TextField
        id="input-name"
        label="Nome do Cliente"
        name="nomeCliente"
        type="text"
        defaultValue="Maria Coelho"
        variant="filled"
        onChange={ (e) => fillClientOldName(e) }
        InputLabelProps={ {
          shrink: true,
        } }
        style={ { marginBottom: '1em' } }
      />
      <TextField
        id="input-newname"
        label="Novo nome do Cliente"
        name="novoNome"
        type="text"
        variant="filled"
        onChange={ (e) => fillClientNewName(e) }
        InputLabelProps={ {
          shrink: true,
        } }
        style={ { marginBottom: '1em' } }
      />
      <InputLabel id="label-select-usina-id">Usina ID
        <Select
          id="select-usina-id"
          labelid="label-select-usina-id"
          label="Usina ID"
          name="usinaId"
          variant="outlined"
          onChange={ (e) => fillUsinaObj(e) }
          defaultValue={ 1 }
          value={ selectValue }
          style={ { marginBottom: '1em' } }
        >
          <MenuItem value={ 1 }>1</MenuItem>
        </Select>
      </InputLabel>
      <InputLabel id='input-porcentagem'>Percentual de participação</InputLabel>
      <TextField
        labelid='input-porcentagem'
        name='percentualDeParticipacao'
        defaultValue={ 1 }
        type='number'
        InputProps={ {
          inputProps: {
            inputMode: 'numeric',
            pattern: '[0-9]*',
            min: '0',
            max: '20',
            step: '1',
            defaultValue: '20'
          }
        } }
        step={ 1 }
        min={ 0 }
        max={ 20 }
        onChange={ (e) => fillUsinaObj(e) }
        style={ { margin: '1em auto', width: '10%' } }
      />
      <Button
        id='submit-client'
        variant="contained"
        color='primary'
        onClick={ handleSubmitClient }
        style={ { width: '40%', margin: '0 auto' } }
      > Modificar Cliente
      </Button>
    </Box >
  );
};

export default ModifyClientForm;