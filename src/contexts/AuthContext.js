import {createContext, useEffect, useState} from "react";
import {setAuthToken} from "../auth/operations";

const AuthContext = createContext(undefined);

const AuthProvider = (props) => {
  const {children} = props
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    setAuthToken(token);
    setAuthenticated(Boolean(token));
  });

  return <AuthContext.Provider value={{authenticated, setAuthenticated}}>
    {children}
  </AuthContext.Provider>;
};

export {AuthContext, AuthProvider};
