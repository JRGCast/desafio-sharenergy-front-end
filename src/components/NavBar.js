import { AppBar, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import {
  addCliUrl, deleteCliUrl, graphicUrl, homeUrl, modifyCliUrl, profitUrl
} from '../utils/internalUrls';


const NavBar = () => {
  return (
    <nav>
      <AppBar position="static" style={ { marginBottom: '1em' } }>
        <Toolbar style={ { display: 'flex', justifyContent: 'space-around' } }>Menu
          <NavLink to={ homeUrl } color='white'>Home</NavLink>
          <NavLink to={ graphicUrl } color='white'>Para o gráfico</NavLink>
          <NavLink to={ profitUrl } color='white'>Para previsões de lucro</NavLink>
          <NavLink to={ addCliUrl } color='white'>Adicionar Cliente</NavLink>
          <NavLink to={ deleteCliUrl } color='white'>Deletar Cliente</NavLink>
          <NavLink to={ modifyCliUrl } color='white'>Modificar Cliente</NavLink>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default NavBar;