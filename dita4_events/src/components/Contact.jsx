import React,{useState} from 'react'

 function Contact() {

const [list, setList] = useState([
  {id:1, emri:"vehbi",age:25, city:"prishtine"},
  {id:2, emri:"arianit",age:30, city:"gjilan"},
  {id:3, emri:"fatlind",age:28, city:"ferizaj"},
  {id:4, emri:"bujar",age:35, city:"prizren"},
  {id:5, emri:"bekim",age:22, city:"peje"},
])

  return (
    <>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Suscipit architecto cum repellat in quae natus aut atque tenetur velit adipisci aliquam qui dolor praesentium
         , alias deleniti maxime dignissimos eius quo.</p>

         {list.map((item) => (
          <div key={item.id}>
            <h3>{item.emri}</h3>
            <p>{item.age}</p>
            <p>{item.city}</p>
          </div>
         ))}
    </>
  )
}
export default Contact