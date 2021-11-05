import { AppBar, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
const homeUrl = '/desafio-sharenergy-front-end';
const graphicUrl = `${homeUrl}/graphic`;
const profitUrl = `${homeUrl}/profit`;
const addCliUrl = `${homeUrl}/addnewclient`;

const NavBar = () => {
  return (
    <nav>
      <AppBar position="static" style={ { marginBottom: '1em' } }>
        <Toolbar style={ { display: 'flex', justifyContent: 'space-around' } }>Menu
          <NavLink to={ homeUrl } color='white'>Home</NavLink>
          <NavLink to={ graphicUrl } color='white'>Para o gráfico</NavLink>
          <NavLink to={ profitUrl } color='white'>Para previsões de lucro</NavLink>
          <NavLink to={ addCliUrl } color='white'>Para previsões de lucro</NavLink>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default NavBar;