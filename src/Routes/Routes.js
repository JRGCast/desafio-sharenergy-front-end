import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
const homeUrl = '/desafio-sharenergy-front-end';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ homeUrl } component={ LandingPage }></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;