import { AppBar, LinearProgress, Toolbar } from '@material-ui/core';
import { lazy, Suspense } from 'react';
import './App.css';
const Routes = lazy(() => import('./Routes/Routes'));
const homeUrl = '/desafio-sharenergy-front-end';
const graphicUrl = `${homeUrl}/graphic`;
const profitUrl = `${homeUrl}/profit`;

function App() {
  return (
    <div className="App">
      <nav>
        <AppBar position="static" style={ { marginBottom: '1em' } }>
          <Toolbar style={ { display: 'flex', justifyContent: 'space-around' } }>Menu
            <a href={ homeUrl } color='white'>Home</a>
            <a href={ graphicUrl } color='white'>Para o gráfico</a>
            <a href={ profitUrl } color='white'>Para previsões de lucro</a>
          </Toolbar>
        </AppBar>
      </nav>
      <Suspense fallback={ <LinearProgress /> }>
        <Routes />
      </Suspense>
    </div >
  );
}

export default App;
