import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GraphicPage from '../pages/GraphicPage';
import LandingPage from '../pages/LandingPage';
const homeUrl = '/desafio-sharenergy-front-end';
const graphicUrl = `${homeUrl}/graphic`;

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ homeUrl } component={ LandingPage }></Route>
        <Route path={ graphicUrl } component={ GraphicPage }></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;