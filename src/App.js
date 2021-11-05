import { LinearProgress } from '@material-ui/core';
import { lazy, Suspense } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import UserName from './components/UserName';
import ContextProvider from './Context/ContextProvider';
const Routes = lazy(() => import('./Routes/Routes'));

const App = () => {
  return (
    <div className="App">
      <ContextProvider>
        <nav>
          <NavBar />
        </nav>
        <UserName />
        <Suspense fallback={ <LinearProgress /> }>
          <Routes />
        </Suspense>
      </ContextProvider>
    </div >
  );
};

export default App;
