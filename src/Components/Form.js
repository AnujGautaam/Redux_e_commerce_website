import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const Form = () => {
    const[name,setName] = useState("")
    const [address,setAddress] = useState("")
    const dispatch = useDispatch()
  return (
    <>
    <input type={"text"} onChange={(e)=>{setName(e.target.value)}}/>
    <button onClick={()=>{
        dispatch({type:"UPDATE_NAME",payload:name})
    }}>Update Value</button>



<input type={"text"} onChange={(e)=>{setAddress(e.target.value)}}/>
<button onClick={()=>{
        dispatch({type:"UPDATE_Address",payload:address})
    }}>Update address</button>

    </>
  )
}

export default Form