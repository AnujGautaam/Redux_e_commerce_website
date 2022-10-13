import { useEffect, useState } from "react"
import React from 'react'

const UseStateHook = () => {
    let [count,setCount] = useState(0)
    let [data,setData] = useState(10)






   
    // syntax is  [set_variable,function] = useState(initial value of the variable)

// the definition of the function is done above the return statement

// useEffect syntax is as follows: 
// useEffect(function, [state_variable])
// here function- effects to be shown
// [state_variable]- this triggers the function to take action, in the form of an array


/* the useEffect can be seen
1. on load-----everytime
2. [] - --- using empty array means the effect will be displayed only on load

3. empty --- use of no array or no value on the second portion of the useEffect means that the effect will take place for anykinds of change in the state_variables

4.[a,b,c]-----on change of state variables a,b,c

*/

useEffect(()=>{
window.alert("value is updated")
},[data,count])

// this means that whenever the value of count is updated the alert message pops up and the value of count is updates everytime the buttons are clicked


const increase = ()=>{
    
   return setCount(count++)
}


  return (
    <>
    
    <h1>{count}</h1>
    <button onClick={increase}>Increase1</button>
    {/* first i was using increase() and this caused too many rerenders issue, so avoid using brackets while calling here */}
    <button onClick={()=>setCount(++count)}>Increase2</button>
    {/* the count++ one would take two clicks while count++ would only take 1 to increase the value */}
    <button onClick={()=>increase()}>Increase1a</button>

    <button onClick={()=>setCount(count+1)}>Increase3</button>
    {/* this one also works for a single click */}

    <button onClick={()=>setCount(count-1)}>Decrease</button>


    {/* use of conditionals to block the reduciton of the number below 0 and above 10 */}
{
count>0 &&

    <button onClick={()=>setCount(count+1)}>Increase4</button>
}
{/* when the condition of count being greater than 0 is not met, the button disappers */}
{
   count>12 ? <button onClick={()=>setCount(count+1)}>Increase_to_doLoo</button>:<h1>Please get to the number 12 will ya</h1>
}

{
count<10 &&
<div>
    <button onClick={()=>setCount(count+1)}>Increase5</button>

  <h2>dont make the value greater than 9 or the increase5 button will disappear</h2> 
  </div>
}
{/* when the condition of count being greater than 10 is met, the button disappers */}

<h3>{data}</h3>
<button onClick={()=>{
  setData(data+20)
}}>Display Increase</button>
<button onClick={()=>{
  setData(data+20)
}}>Display Decrease</button>
    
    
    </>
  )
}

export default UseStateHook