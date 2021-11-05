import { useState } from 'react';
import AppContext from './AppContext';


const ContextProvider = ({ children }) => {
  const [currClientName, setCurrClientName] = useState('Admin');
  const [allCompanyData, setAllCompanyData] = useState({});

  const contextValue = {
    allCompanyData,
    currClientName,
    setCurrClientName,
    setAllCompanyData
  };
  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );

};

export default ContextProvider;