import React from 'react'
import { gql, useQuery } from '@apollo/client'

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

const DisplayData = () => {
  const {data, loading, error} = useQuery(QUERY_ALL_ROCKETS);


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
            <h1>First Flight: {rockets.first_flight}</h1>
            

    </div>
          );
    })}
              </div>
  )
}

export default DisplayData