import { InputLabel, LinearProgress, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { accessApi } from "../api";
import { companyAllIntervals } from "../utils/externalUrls";

const ProfitPage = () => {
  const [receivedData, setReceivedData] = useState({});
  const [numbersCalc, setnumbersCalc] = useState({ porcentagem: 20, preçoKw: 0.95 });


  const handleChange = ({ target: { name, value } }) => {
    setnumbersCalc({ ...numbersCalc, [name]: Number(value) });
  };

  useEffect(() => {
    const getIntervalsData = async () => {
      const theIntervals = await accessApi(companyAllIntervals);
      setReceivedData({
        tamanhoTotalIntervalos: theIntervals.intervals_diff.length,
        mediaIntervalos: theIntervals.intervals_avg,
        mediaKw: theIntervals.kw_avg,
        totalKw: theIntervals.kw_total
      });
    };
    getIntervalsData();
  }, []);

  return (
    <main>
      <h1>Cálculo Lucro</h1>
      <InputLabel id="input-percentage">Porcentagem a calcular
        <TextField
          labelid="input-percentage"
          name="porcentagem"
          type="number"
          onChange={ (e) => handleChange(e) }
          InputLabelProps={ {
            shrink: true,
          } }
          inputProps={ {
            inputMode: 'numeric',
            pattern: '[0-9]*',
            min: '00',
            max: '100',
            step: '1',
            defaultValue: '20'
          } } />
      </InputLabel>
      <InputLabel id="input-kw">Preço do KW
        <TextField
          labelid="input-kw"
          name="preçoKw"
          type="number"
          onChange={ (e) => handleChange(e) }
          InputLabelProps={ {
            shrink: true,
          } }
          inputProps={ {
            inputMode: 'numeric',
            pattern: '[0-9]*',
            min: '00',
            max: '100',
            step: '0.01',
            defaultValue: '0.95'
          } } />
      </InputLabel>
      <div style={ { margin: '1em auto' } }>
        { receivedData.hasOwnProperty('totalKw') ?
          <>
            <p>Há um total de { receivedData.tamanhoTotalIntervalos } amostrages;</p>
            <p>Com a média dos intervalos sendo { parseInt((receivedData.mediaIntervalos * 60), 10) } minutos;</p>
            <p>A empresa gera um total de { receivedData.totalKw.toFixed(2) } KW diariamente;</p>
            <p>Isto é, { (receivedData.mediaIntervalos * receivedData.totalKw).toFixed(2) } KWh por dia;</p>
            <p>Portanto o lucro diário é R${
              ((numbersCalc.porcentagem / 100) * ((receivedData.mediaIntervalos * receivedData.totalKw) * numbersCalc.preçoKw)).toFixed(2) }
            </p>
          </> : <LinearProgress /> }
      </div>
    </main>
  );
};

export default ProfitPage;