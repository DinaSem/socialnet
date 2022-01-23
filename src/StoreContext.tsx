import React from 'react';
import {AppStateType} from "./redux/redux-store"

type PropsType={
  store: AppStateType
  children: React.ReactNode
}

const StoreContext = React.createContext({} as AppStateType )

const Provider = (props:PropsType) => {
  return <StoreContext.Provider value={props.store}>
    {props.children}
  </StoreContext.Provider>
}



  export default StoreContext
