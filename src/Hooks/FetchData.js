import React, {useState ,useEffect } from 'react'
import axios from 'axios'

const FetchData = () => {
 const [posts,setPost] = useState([])

 const [limit,setLimit] = useState(20)

 useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    
    //  if the url fails then the proceeding effects are mentioned in the .catch

    // but if the urls succeeds,the consequent actions are mentioned in the .then()
    .then((data)=>{

        if(data.error){
            console.log(data.error)
        }

        else{
            setPost(data.data)
        }
        
    })
    .catch((err)=>{
        console.log("this is a message displaying erronous code")

    })



 },[])


  return (
    <>
    {
    
    posts.slice(0,limit).map(item =>{return <p>{item.id} : {item.title}</p>}
        
    )
    
    } 

    {

        limit<posts.length &&
        <button onClick={()=>
            setLimit(limit+20)
        }>Show More</button>
    }

{

limit>0 &&
<button onClick={()=>
    setLimit(limit-20)
}>Show Less</button>
}

   

    
    
    
    </>
  )
}

export default FetchData