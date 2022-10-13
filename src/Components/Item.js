import React from 'react'
import { useDispatch } from 'react-redux'
// one annoying thing that i encountered was that these hooks should be inside the curly brackets with one space at the start and one at the end in order for them to work

const Item = () => { 
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>{
            dispatch({type:"INCREASE"})
        }}>Increase</button>

<button onClick={()=>{
            dispatch({type:"DECREASE"})
        }}>Decrease</button>

<button onClick={()=>{
            dispatch({type:"RESET"})
        }}>Reset</button>

    </div>
  )
}

export default Item