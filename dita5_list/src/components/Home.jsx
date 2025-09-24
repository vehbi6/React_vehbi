import React,{useState} from 'react'
import Bloglist from './Bloglist.jsx'

 function Home() {

const [list, setList] = useState([
  {id:1, emri:"vehbi",age:25, city:"prishtine"},
  {id:2, emri:"arianit",age:30, city:"gjilan"},
  {id:3, emri:"fatlind",age:28, city:"ferizaj"},
  {id:4, emri:"bujar",age:35, city:"prizren"},
  {id:5, emri:"bekim",age:22, city:"peje"},
])

  return (
    <>

    <h1>Home page</h1>
  <Bloglist list={list} x="Lista e Nxenesve" />
         
    </>
  )
}
export default Home