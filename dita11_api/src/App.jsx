import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {
    setUsers(data.slice(0,5));

  })
  .catch(err => console.log(err));
  return (
    <>
     <div className='App'>
      <h1>Hello React</h1>
      <table border='2' style={{ margin: '0 auto'}}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))
        }
      </table>
     </div>
    </>
  )
}

export default App
