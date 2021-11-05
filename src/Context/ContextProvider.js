import { createContext, useState } from 'react';


const CreatedContext = createContext();

const ContextProvider = ({ children }) => {
  const [allCompanyData, setAllCompanyData] = useState({});
  const [allCurrClientData, setAllCurrClientData] = useState({});

  const contextValue = {
    allCompanyData,
    allCurrClientData
  };
  return (
    <CreatedContext.Provider value={ contextValue }>
      { children }
    </CreatedContext.Provider>
  );

};

export default ContextProvider;