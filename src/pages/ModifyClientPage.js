import { Button, LinearProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { accessApi } from "../api";
import ModifyClientForm from "../components/ModifyClientForm";
import { clientUpdate } from "../utils/externalUrls";

const ModifyClientPage = () => {
  const [clientData, setClientData] = useState({ nomeCliente: '', });
  const [updateData, setUpdateData] = useState({ novoNome: '', novasUsinas: [] });
  const [usinasObj, setUsinasObj] = useState({ usinaId: 1, percentualDeParticipacao: 0 });
  const [answerApi, setAnswerApi] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const fillClientOldName = ({ target: { name, value } }) => {
    setClientData({ ...clientData, [name]: value });
  };

  const fillClientNewName = ({ target: { name, value } }) => {
    setUpdateData({ ...updateData, [name]: value });
  };

  const fillUsinaObj = ({ target: { name, value } }) => {
    setUsinasObj({ ...usinasObj, [name]: Number(value) });
    setUpdateData({ ...updateData, novasUsinas: [usinasObj] });
  };

  const requestBody = updateData.novasUsinas.length > 0 ?
    {
      clientData,
      updateData
    } : {
      clientData,
      updateData: { novoNome: updateData.novoNome }
    };

  const submitOptions = {
    method: "PUT",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": '*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody)
  };
  const handleSubmitClient = async () => {
    setShowSpinner(true);
    const sendToApi = await accessApi(clientUpdate, submitOptions);
    setAnswerApi(sendToApi);
    console.log(submitOptions);
  };

  useEffect(() => {
    if (answerApi !== '') {
      setShowSpinner(false);
      setShowSuccess(true);
    }
  }, [answerApi]);

  const handleRedo = () => {
    setAnswerApi('');
    setShowSuccess(false);
    setClientData({ nomeCliente: '' });
    setUpdateData({ novoNome: '', novasUsinas: [] });
  };

  const functionsObject = { fillClientOldName, fillClientNewName, fillUsinaObj, handleSubmitClient };
  return (
    <main>
      <h1>Modificar Cliente</h1>
      <ModifyClientForm
        functionsObj={ functionsObject }
        selectValue={ usinasObj.usinaId }
      />
      <section>
        { showSpinner ? <LinearProgress style={ { margin: '1em auto', width: '50%' } } /> : "" }
        { showSuccess ?
          <>
            <p> Cliente modificado! </p>
            <Button
              variant="contained"
              color='primary'
              onClick={ handleRedo }
              style={ { width: '40%', margin: '0 auto' } }>Outro?
            </Button>
          </> : "" }
      </section>
    </main>);
};

export default ModifyClientPage;