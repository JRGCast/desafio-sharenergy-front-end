import { Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';

const Routes = () => {
  return (

    <Switch>
      <Route exact path='/' component={ LandingPage }></Route>
    </Switch>
  );
};

export default Routes;