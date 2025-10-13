import React, { useState, useEffect, use } from 'react'
import BlogList from './BlogList.jsx'
import UseFetch from './UseFetch.jsx';

function Home() {

    const{
        list:list,
        error,
        loading,
    }= UseFetch('http://localhost:800/list');
    
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
        { loading && <div>Loading...</div>}

        { error && <div>{ error }</div> }
        
        { list && <BlogList  list={list} x = "Lista e Nxenesve" deleteButton={deleteButton} /> }
        
    </>
  )
}

export default Home