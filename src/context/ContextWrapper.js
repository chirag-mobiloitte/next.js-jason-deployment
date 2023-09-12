
import React, { createContext} from "react";
import AppContext from "./AppContext";

export const AccountContext = createContext();

export default function ContextWrapper({ children }) {


  let data = {
   data:'hello'
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

