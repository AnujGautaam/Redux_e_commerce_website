import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Card from '../../Components/Card'
import Form from '../../Components/Form'
import Item from '../../Components/Item'
import { useState } from 'react'

const Homepage = () => {
  const [limit,setLimit] = useState(8)

  const [search, setSearch] = useState("")
  
  const[filteredItems, setFilteredItems] = useState([])
  const itemStore = useSelector(store => store.itemStore)
  const items_in_store = itemStore.items
  console.log(items_in_store)


  useEffect(()=>{
    setFilteredItems(items_in_store.filter((item)=>{
      return item.name.toLowerCase().match(search.toString().toLowerCase())
    }))

  },[])

  const searchItems = (e)=>{
    e.preventDefault()
    setFilteredItems(items_in_store.filter((item)=>{
      return item.name.toLowerCase().match(search.toString().toLowerCase())
    }))

  }



  



return (

    <>
      {/* Homepage<br/>
    <Item/><br/>
    <Form/>
     */}

<form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(event)=>setSearch(event.target.value)}/>
        <button className="btn btn-outline-success" type="submit" onClick={(e)=>searchItems(e)}>Search</button>
      </form>


      <div className='container mx-auto mt-5 text-center'>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          {
            // items_in_store.map(individual_item=><Card item={individual_item}/>)

       
      //  items_in_store.map(elements=>console.log(elements))

            // items_in_store.slice(0,limit).map((individual_item, i) => 
            //   <Card key={i} item={individual_item} />

            filteredItems.slice(0,limit).map((individual_item, i) => 
            <Card key={i} item={individual_item} />
            )
          }

        </div>
        {
          // either this or for displaying the message ternery operator can be used
          // limit<items_in_store.length && 

          // <button className='btn btn-danger mt-5' onClick={()=>{setLimit(limit+4)}}>Load More</button>

          // limit<items_in_store.length ?

          limit<filteredItems.length ?

          <button className='btn btn-danger mt-5' onClick={()=>{setLimit(limit+4)}}>Load More</button>
          :
          <h1>All items have been loaded</h1>
        
        }
        </div>

      </>
      )
}

export default Homepage