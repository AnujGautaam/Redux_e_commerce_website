import React from 'react'
import { createContext } from 'react'
// with the creation of this hook, a variable can be used at multiple places 

export const GC = createContext()

const TempGlobalContext = (props) => {
  return (
    <div>
        <GC.Provider value={{message:"this is something special is it not?",name:"tero bajey"}}>
            {/* this is for passing the value as an object */}

            {props.children}
        </GC.Provider>
        
    </div>
  )
}

export default TempGlobalContext