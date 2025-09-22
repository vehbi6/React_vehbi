import React,{useState} from 'react'

 function About() {

  const [name, setName] = useState("vehbi")

  return (
    <>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Suscipit architecto cum repellat in quae natus aut atque tenetur velit adipisci aliquam qui dolor praesentium
         , alias deleniti maxime dignissimos eius quo.</p>

         <button onClick={() =>  setName("Arianit")}>Ndroje emrin</button>
          <button onClick={() =>  setName("Vehbi")}>Ndroje emrin prap</button>
          <h2>{name}</h2>
    </>
  )
}
export default About