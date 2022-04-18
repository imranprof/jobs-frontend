import {createContext, useEffect, useState} from "react";
import {setAuthToken} from "../auth/operations";

const InitialPropContext = createContext(undefined);

const InitialPropProvider = (props) => {
  const {children} = props
  const [authenticated, setAuthenticated] = useState(false);
  const [modalType, setModalType] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('token');
    setAuthToken(token);
    setAuthenticated(Boolean(token));
  }, [authenticated]);

  const value = {
    authenticated,
    setAuthenticated,
    modalType,
    setModalType
  }

  return <InitialPropContext.Provider value={value}>
    {children}
  </InitialPropContext.Provider>;
};

export {InitialPropContext, InitialPropProvider};
