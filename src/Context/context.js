import { createContext, useState } from 'react';


const Context = createContext();

const ContextProvider = ({ children }) => {
  const [allCompanyData, setAllCompanyData] = useState({});
  const [allCurrClientData, setAllCurrClientData] = useState({});

  


  const contextValue = {
    allCompanyData,
    allCurrClientData
  };
  return (
    <Context.ContextProvider value={ contextValue }>
      { children }
    </Context.ContextProvider>
  );

};