import React,{useEffect, useState} from 'react'
import Bloglist from './Bloglist.jsx'
import Viewlist from './Viewlist.jsx'

 function Home() {

const [list, setList] = useState([
  {id:1, emri:"vehbi",age:25, city:"prishtine"},
  {id:2, emri:"arianit",age:30, city:"gjilan"},
  {id:3, emri:"fatlind",age:28, city:"ferizaj"},
  {id:4, emri:"bujar",age:35, city:"prizren"},
  {id:5, emri:"bekim",age:22, city:"peje"},
])

useEffect(()=>{
  console.log("Component loaded");
  console.log(list);
},[])

const deleteButton=(id)=>{
  const newList=list.filter(list=>list.id!==id)
  setList(newList);
}

  return (
    <>

    <h1>Home page</h1>
  <Bloglist list={list} x="Lista e Nxenesve" deleteButton={deleteButton} viewButton={viewButton}/>
         
    </>
  )
}
export default Home