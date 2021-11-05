import { Route, Switch } from 'react-router-dom';
import AddClientPage from '../pages/AddClientPage';
import DeleteClientPage from '../pages/DeleteClientPage';
import GraphicPage from '../pages/GraphicPage';
import LandingPage from '../pages/LandingPage';
import ModifyClientPage from '../pages/ModifyClientPage';
import ProfitPage from '../pages/ProfitPage';
import {
  addCliUrl, deleteCliUrl, graphicUrl, homeUrl, modifyCliUrl, profitUrl
} from '../utils/internalUrls';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ homeUrl } component={ LandingPage }></Route>
      <Route path={ graphicUrl } component={ GraphicPage }></Route>
      <Route path={ profitUrl } component={ ProfitPage }></Route>
      <Route path={ addCliUrl } component={ AddClientPage }></Route>
      <Route path={ deleteCliUrl } component={ DeleteClientPage }></Route>
      <Route path={ modifyCliUrl } component={ ModifyClientPage }></Route>
    </Switch>
  );
};

export default Routes;