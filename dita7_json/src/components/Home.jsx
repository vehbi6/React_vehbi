import React, { useState, useEffect, use } from 'react'
import BlogList from './BlogList.jsx'

function Home() {
    const [list, setList] = useState([])
    const [error, setError] = useState(null);

      useEffect(() => {
          fetch('http://localhost:800/list')
          .then(res => {
              return res.json()
          })
          .then(data => {
              setList(data)
          })
          .catch(err => {
              setError(err.message);
          })
      }, []);
      
      //Nje funksion mund te perdoret edhe si props
      //Ketu e kemi krijuar nje funksion qe do ta perdorim permes props, qe e kemi krijuar si button ne komponentin BlogList
      const deleteButton = (id) => {
          //const duke e perdorur per ta fshire nje element brenda array duke e perdorur id e seciles vlere.
          const newList = list.filter(list => list.id !== id);
          
          //ndryshimi i array duke e perdorur metoden qe e kemi krijuar
          setList(newList);
      }
  return (
    <>
        {/* {list.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>  
            <p>Age: {item.age}</p>
            <p>City: {item.city}</p>
          </div>
        ))} */}
        
        <BlogList  list={list} x = "Lista e Nxenesve" deleteButton={deleteButton} />
        {error && <div>{error}</div>}
    </>
  )
}

export default Home