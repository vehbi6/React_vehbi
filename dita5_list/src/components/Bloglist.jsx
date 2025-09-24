import React from 'react'

 function Bloglist(props) {
 
    const list = props.list; 
   const x = props.x;
  return (
    <>
        <h2>{ x }</h2>
        {list.map((item) => (
            <div key={item.id}>
                <h3>{item.emri}</h3>
                <p>Age: {item.age}</p>
                <p>City: {item.city}</p>
            </div>
            ))}

        </>
  )
}
export default Bloglist