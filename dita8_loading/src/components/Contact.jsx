import React from 'react'

function Contact() {
  return (
    <>

        {list.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>  
            <p>Age: {item.age}</p>
            <p>City: {item.city}</p>
          </div>
        ))}
    </>
  )
}

export default Contact