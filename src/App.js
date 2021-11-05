import { LinearProgress } from '@material-ui/core';
import { lazy, Suspense } from 'react';
import './App.css';
import NavBar from './components/NavBar';
const Routes = lazy(() => import('./Routes/Routes'));

const App = () => {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <Suspense fallback={ <LinearProgress /> }>
        <Routes />
      </Suspense>
    </div >
  );
};

export default App;
