import { Button, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { accessAllComDataWithRTime } from "../api/Company/accessCom";
import Graphic from "./Graphic";
import ToogleButtons from "./ToggleButtonGroup";

const DataWithTime = () => {
  const [allDataWTime, setAllDataWTime] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const [filteredData, setFilteredData] = useState('');
  const [filterLoaded, setFilterLoaded] = useState(false);
  const [objectToButtonData, setObjectToButtonData] = useState({});
  const [exibitionValue, setExibitionValue] = useState({ field: 'Campo', value: 0 });
  const [timeSelected, setTimeSelected] = useState({ hour: 5, minutes: 20 });

  const inputPropsTime = {
    inputPropsHour: {
      inputMode: 'numeric',
      pattern: '[0-9]*',
      min: '5',
      max: '17',
      defaultValue: '5'
    },
    inputPropsMinutes: {
      inputMode: 'numeric',
      pattern: '[0-9]*',
      min: '00',
      max: '55',
      step: '5',
      defaultValue: '20'
    }
  };

  useEffect(() => {
    const callApi = async () => {
      await accessAllComDataWithRTime(setAllDataWTime);
      if (typeof (allDataWTime) !== 'string' && allDataWTime.hasOwnProperty('modifiedData')) {
        setDataLoaded(true);
      } else {
        setDataLoaded(false);
        document.getElementById('span-alert').innerText = 'Não foi possível conectar com a API';
      }
    };
    callApi();
  }, [allDataWTime]);

  useEffect(() => {
    if (filterLoaded) {
      const { tensao_V, corrente_A, potencia_kW, temperatura_C } = filteredData[0];
      const objToButton = {
        "Tensão(V)": tensao_V,
        "Corrente(A)": corrente_A,
        "Potência(kW)": potencia_kW,
        "Temperatura(C)": temperatura_C
      };
      setObjectToButtonData(objToButton);
    }
  }, [filterLoaded, filteredData]);

  const checkMinutes5oClock = () => {
    const hourInput = document.getElementById('input-hours');
    const minutesInput = document.getElementById('input-minutes');
    if (hourInput.value < 6 && minutesInput.value < 20) minutesInput.value = 20;
  };

  const formatInputTime = ({ target: { name, value } }) => {
    setTimeSelected({ ...timeSelected, [name]: Number(value) });
  };

  const handleSearchData = async () => {
    const hourMinStr = `${timeSelected.hour}h${timeSelected.minutes}min`;
    const filterData = await allDataWTime.modifiedData.filter(({ tempo_humano }) => tempo_humano === hourMinStr);
    setFilteredData(filterData);
    setFilterLoaded(true);
    setExibitionValue({ field: 'Campo', value: 0 });
  };

  useEffect(() => {
    const minutesInput = document.getElementById('input-minutes');
    if (timeSelected.hour < 6) {
      checkMinutes5oClock();
      minutesInput.min = 20;
      if (timeSelected.minutes < 20) timeSelected.minutes = 20;
    } else {
      minutesInput.min = 0;
    }
  });

  const buttonFunc = ({ currentTarget }) => {
    setExibitionValue({ field: currentTarget.name, value: Number(currentTarget.value) });
  };

  return (
    <main>
      <section>
        <TextField
          id="input-hours"
          label="Hora"
          name="hour"
          type="number"
          inputProps={ inputPropsTime.inputPropsHour }
          onChange={ (e) => formatInputTime(e) }
          InputLabelProps={ {
            shrink: true,
          } }
        />
        <TextField
          id="input-minutes"
          label="Minutos"
          name="minutes"
          type="number"
          inputProps={ inputPropsTime.inputPropsMinutes }
          onChange={ (e) => formatInputTime(e) }
          InputLabelProps={ {
            shrink: true,
          } }
        />
        <Button
          id='search-data'
          variant="contained"
          disabled={ !dataLoaded }
          color='primary'
          onClick={ handleSearchData }
        >Buscar dados
        </Button><span id='span-alert' style={ { color: 'red' } }></span>
        <div style={ { marginTop: '0.5em' } }>
          { filterLoaded ? <ToogleButtons
            valuesObj={ objectToButtonData }
            onClickFunc={ buttonFunc } /> : '' }
        </div>
        <Graphic
          currField={ exibitionValue.field }
          currFValue={ exibitionValue.value } />
      </section>
      <button type='button' onClick={ () => console.log(JSON.stringify(allDataWTime)) }>Console Data</button>
    </main>
  );
};

export default DataWithTime;