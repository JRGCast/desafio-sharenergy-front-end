import { LinearProgress } from '@material-ui/core';
import { lazy, Suspense } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ContextProvider from './Context/ContextProvider';
const Routes = lazy(() => import('./Routes/Routes'));

const App = () => {
  return (
    <div className="App">
      <ContextProvider>
        <nav>
          <NavBar />
        </nav>
        <Suspense fallback={ <LinearProgress /> }>
          <Routes />
        </Suspense>
      </ContextProvider>
    </div >
  );
};

export default App;
