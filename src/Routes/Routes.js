import { Route, Switch } from 'react-router-dom';
import GraphicPage from '../pages/GraphicPage';
import LandingPage from '../pages/LandingPage';
import ProfitPage from '../pages/ProfitPage';
const homeUrl = '/desafio-sharenergy-front-end';
const graphicUrl = `${homeUrl}/graphic`;
const profitUrl = `${homeUrl}/profit`;

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ homeUrl } component={ LandingPage }></Route>
      <Route path={ graphicUrl } component={ GraphicPage }></Route>
      <Route path={ profitUrl } component={ ProfitPage }></Route>
    </Switch>
  );
};

export default Routes;