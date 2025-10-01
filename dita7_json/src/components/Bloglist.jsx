import React from 'react'
import Viewlist from './Viewlist';


 function Bloglist(props) {
 
    const list = props.list; 
   const x = props.x;
   const deleteButton = props.deleteButton;
  return (
    <>
        <h2>{ x }</h2>
        <table border="1" cellPadding="10">
 
           <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Action</th>

           </tr>
             {list.map((item) => (
           <tr key={item.id}>
                <td>{item.emri}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
                <td>
               <button onClick={() => deleteButton(item.id)}>Delete</button>
               <button onClick={() => viewButton(item.id)}>View</button>
                
                </td>
                </tr>
            ))}
        </table>
       
        
        </>
  )
}
export default Bloglist

