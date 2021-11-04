import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ LandingPage }></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;