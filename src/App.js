import { AppBar, LinearProgress, Toolbar } from '@material-ui/core';
import { lazy, Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
const Routes = lazy(() => import('./Routes/Routes'));
const homeUrl = '/desafio-sharenergy-front-end';
const graphicUrl = `${homeUrl}/graphic`;
const profitUrl = `${homeUrl}/profit`;

const App = () => {
  return (
    <div className="App">
      <nav>
        <AppBar position="static" style={ { marginBottom: '1em' } }>
          <Toolbar style={ { display: 'flex', justifyContent: 'space-around' } }>Menu
            <NavLink to={ homeUrl } color='white'>Home</NavLink>
            <NavLink to={ graphicUrl } color='white'>Para o gráfico</NavLink>
            <NavLink to={ profitUrl } color='white'>Para previsões de lucro</NavLink>
          </Toolbar>
        </AppBar>
      </nav>
      <Suspense fallback={ <LinearProgress /> }>
        <Routes />
      </Suspense>
    </div >
  );
};

export default App;
