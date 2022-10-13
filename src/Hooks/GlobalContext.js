import React from 'react'
import { createContext } from 'react'
// wherever the context is being declared create context is imported


export const GlobalContext = createContext()
// there might be conditions when one value needs to be passed through several layers and for this, globalcontext is applied

const GlobalContextProvider = (props) => {
  return (
    <div>
        <GlobalContext.Provider value={"Namaste"}>
          {/* .provider is a syntax used for altering the value of the contexed item */}
            {props.children}
            {/*  this will pass the value which is Namaste to all the children*/}

        </GlobalContext.Provider>


    </div>
  )
}

export default GlobalContextProvider