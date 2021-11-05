import { AppBar, Toolbar } from '@material-ui/core';
import './App.css';
import Routes from './Routes/Routes';
const homeUrl = '/desafio-sharenergy-front-end';
const graphicUrl = `${homeUrl}/graphic`;

function App() {
  return (
    <div className="App">
      <AppBar position="static" style={ { marginBottom: '1em' } }>
        <Toolbar style={ { display: 'flex', justifyContent: 'space-around' } }>Menu
          <a href={ graphicUrl } color='white'>Para o gráfico</a>
        </Toolbar>
      </AppBar>
      <Routes />
    </div>
  );
}

export default App;
