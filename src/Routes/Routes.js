import { Route, Switch } from 'react-router-dom';
import AddClientPage from '../pages/AddClientPage';
import GraphicPage from '../pages/GraphicPage';
import LandingPage from '../pages/LandingPage';
import ProfitPage from '../pages/ProfitPage';
import { addCliUrl, graphicUrl, homeUrl, profitUrl } from '../utils/internalUrls';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ homeUrl } component={ LandingPage }></Route>
      <Route path={ graphicUrl } component={ GraphicPage }></Route>
      <Route path={ profitUrl } component={ ProfitPage }></Route>
      <Route path={ addCliUrl } component={ AddClientPage }></Route>
    </Switch>
  );
};

export default Routes;