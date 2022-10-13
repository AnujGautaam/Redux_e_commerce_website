import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Info from './Info'
import { GlobalContext } from '../GlobalContext'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { GC } from '../TempGlobalContext'




const Display = () => { 

    const [posts, setPost] = useState([])
 const [limit,setLimit] = useState(20)


    // const [limit, setLimit] = useState(20)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)

            //  if the url fails then the proceeding effects are mentioned in the .catch

            // but if the urls succeeds,the consequent actions are mentioned in the .then()
            .then((data) => {

                if (data.error) {
                    // console.log(data.error)
                }

                else {
                    setPost(data.data)
                }

            })
            .catch(() => {
                // console.log("this is a message displaying erronous code")

            })



    }, [])
    // const item_store = useSelector(store=>store)
    // console.log(item_store)



    // global context variable 
    // const value = useContext(GlobalContext)

    // const what = useContext(GC)

    const godam = useSelector(store=>store)
    return (
        <>
        <h1>No. of Items in the store is: {godam.no_of_items} </h1>
        


        {/* <h1>{value}</h1> */}
        {/* <h1>{what.name},{what.message}</h1> */}


        {/* <h1>No. of items in the store:{item_store.no_of_items}</h1> */}

        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                posts.map((item,i) => {
                    return <Info key="{i+1}" props={item}/>

                })
                // this is a cool way of treating the posts that are in an array as item represents each array and it has been passed as props for the Info component. Hence for the Info function , the items to be displayed will be the array elements.

                // posts.map((item,i) here, the second parameter i is for index
            }


        </div>
        </>
    )

}




export default Display