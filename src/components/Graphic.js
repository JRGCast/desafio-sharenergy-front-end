import {
  ArgumentAxis, BarSeries, Chart, ValueAxis
} from '@devexpress/dx-react-chart-material-ui';
import Paper from '@material-ui/core/Paper';
import React from "react";


const Graphic = ({ currField = 'Alright', currFValue = 40 }) => {
  // Sample data
  const data = [
    { argument: currField, value: currFValue },
  ];
  return (
    <Paper>
      <Chart
        data={ data }
      >
        <ArgumentAxis />
        <ValueAxis />
        <BarSeries valueField="value" argumentField="argument" barWidth={ 0.3 } />
      </Chart>
    </Paper>
  );
};

export default Graphic;