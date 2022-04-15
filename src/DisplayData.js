import React, { useState } from 'react'
import { gql, useQuery, useLazyQuery } from '@apollo/client'

const QUERY_ALL_ROCKETS = gql`
    query GetAllRockets {  
      rockets {
        id
    description
    first_flight
    name
    }
}

`

const QUERY_ALL_DRAGONS = gql`
    query GetAllDragons {  
      dragons {
    name
    type
    description
    active
    crew_capacity
  }
}

`

const DisplayData = () => {
  
  const [dragonSearched, setDragonSearched] = useState("")
  
  const {data, loading, error} = useQuery(QUERY_ALL_ROCKETS);
  const {data: dragonData} = useQuery(QUERY_ALL_DRAGONS);



  if (loading) {
    return <h1>WELCOME TO THE MATRIX CHRIS</h1>
  }

  if (data) {
      console.log(data)

  }

  if (error) {

    console.log(error)
  }

  return (
    <div>
      {data && data.rockets.map((rockets, idx) => {
          return (<div>
            <h1 key= {idx}> </h1>
            <h1>Name: {rockets.name}</h1>
            <h1>Description: {rockets.description}</h1>
            <h1>Active: {rockets.active}</h1>
    </div>
          );

          
        
       })}

<br></br>
<br></br>
<h1>Below is the dragons!!</h1>
<br></br>
<br></br>



       {dragonData && dragonData.dragons.map((drg, idx) => {
         return (
           <div> 
              <div key={idx}></div>             
              <h1>Name:{drg.name}</h1>
              <h1>Description:{drg.description}</h1>
              <h1>Crew Compacity:{drg.crew_capacity}</h1>
              <h1>Active:{drg.active}</h1>


           </div>
         )
       })}
         <div>
            <input type="text" 
            placeholder="Intersellar" 
            onChange={(event) => {
              console.log("this has worked......")
            setDragonSearched(event.target.value) ; 
            }}></input>
              <button>Fetch data</button>
                
          </div>

              </div>
  );
}

export default DisplayData