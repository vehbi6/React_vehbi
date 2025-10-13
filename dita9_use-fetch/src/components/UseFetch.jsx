import React ,{useState, useEffect,} from 'react';
import Home from './Home.jsx';

function UseFetch(url) {

const [list, setList] = useState([]);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
   setTimeout(() => {
    fetch(url)
    .then(res => {
        return res.json()
    })
    
    .then(data => {
        setList(data)
        setLoading(false)
    })
    .catch(err => {
        setError("Could not fetch the data");
        setLoading(false);
    })
    }, 1000);
},[]);

  return {
     list,
    error,
     loading
  }
  
  
}


export default UseFetch