import { Button, LinearProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { accessApi } from "../api";
import ClientForm from "./ClientForm";

const ActionClient = ({ method, url, showPercentage, showUsinData, page, pageAction }) => {
  const [newClientData, setNewClientData] = useState({ nomeCliente: '', numeroCliente: 99, usinas: [] });
  const [usinasObj, setUsinasObj] = useState({ usinaId: 1, percentualDeParticipacao: 10 });
  const [answerApi, setAnswerApi] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const fillCDataObj = ({ target: { name, value } }) => {
    setNewClientData({ ...newClientData, [name]: value });
    console.log(newClientData)
  };
  const fillUsinaObj = ({ target: { name, value } }) => {
    setUsinasObj({ ...usinasObj, [name]: Number(value) });
    console.log(usinasObj);
  };

  const submitOptions = {
    method: method,
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": '*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      clientData:
      {
        nomeCliente: newClientData.nomeCliente,
        numeroCliente: newClientData.numeroCliente,
        usinas: [usinasObj]
      }
    })
  };
  const handleSubmitClient = async () => {
    setShowSpinner(true);
    const sendToApi = await accessApi(url, submitOptions);
    setAnswerApi(sendToApi);
  };

  useEffect(() => {
    if (answerApi !== '') {
      setShowSpinner(false);
      setShowSuccess(true);
    }
  }, [answerApi]);

  useEffect(() => {
    console.log(showSpinner);
  }, [showSpinner]);

  const handleRedo = () => {
    setAnswerApi('');
    setShowSuccess(false);
  };

  const functionsObject = { fillCDataObj, fillUsinaObj, handleSubmitClient };
  return (
    <main>
      <h1>{ page } Cliente</h1>
      <ClientForm
        functionsObj={ functionsObject }
        selectValue={ usinasObj.usinaId }
        page={ page }
        showPercentage={ showPercentage }
        showUsinData={ showUsinData }
      />
      <section>
        { showSpinner ? <LinearProgress style={ { margin: '1em auto', width: '50%' } } /> : "" }
        { showSuccess ?
          <>
            <p> Cliente { pageAction } com sucesso!</p>
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

export default ActionClient;