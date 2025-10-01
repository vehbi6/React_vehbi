import React from 'react'
import Bloglist from './Bloglist.jsx'

function Viewlist() {
    const list = props.list;
    const x = props.x;
    const viewButton = props.viewButton;

    function viewButton(id) {
        const newList = list.filter(list => list.id === id)
        setList(newList);
    }
  return (
    <>
    <h2>{ x }</h2>
        {list ((item) => (
            <div key={item.id}>
                <h3>{item.emri}</h3>
                <p>Age: {item.age}</p>
                <p>City: {item.city}</p>

                <button onClick={() => deleteButton(item.id)}>Delete</button>
            </div>
            ))}
    </>
  )
}

export default Viewlist
