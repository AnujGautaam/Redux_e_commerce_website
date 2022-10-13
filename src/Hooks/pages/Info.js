import React from 'react'

const Info = ({props}) => {
  return (
    <div>
        
        
        {/* {console.log(props.title)} */}
        {/* {console.log(props.id)} */}

        {/* <h1>S.No.: {props.id}</h1>
        <h1>User: {props.userId}</h1>
        <h1>Title: {props.title}</h1>
        <p>Content: {props.body}</p> */}




<div className="col">
    <div className="card"> 
      <div className="card-body">
        <h5 className="card-title">{props.userId}</h5>
        <h5 className="card-title">{props.title}</h5>

        <p className="card-text">{props.body}</p>
      </div>
    </div>

    </div>

    



        
        
        </div>
  )
}

export default Info