import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';
const LandingPage = () => {
  const homeUrl = '/desafio-sharenergy-front-end';
  const graphicUrl = `${homeUrl}/graphic`;
  return (
    <div>
      <h1>Bem-vindo/a</h1>
      <AppBar position="static">
        <Toolbar style={ { display: 'flex', justifyContent: 'space-around' } }>Menu
          <NavLink to={ graphicUrl } color='white'>Para o gráfico</NavLink>
        </Toolbar>
      </AppBar>
    </div>);
};

export default LandingPage;