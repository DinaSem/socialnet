import React from 'react';
import {storeType} from "./redux/store";

type PropsType={
  store: storeType
  children: React.ReactNode
}

const StoreContext = React.createContext({} as storeType )

const Provider = (props:PropsType) => {
  return <StoreContext.Provider value={props.store}>
    {props.children}
  </StoreContext.Provider>
}



  export default StoreContext
