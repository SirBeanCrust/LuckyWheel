import axios from 'axios';
import { useState } from 'react';


  export default function MyComponent4() {

    const [data, setData] = useState(0);

    axios.get('http://localhost:5000/api/data')
      .then(response => {
        // Handle successful response
        console.log('Data from server:', response.data);
        setData(response.data); // Set the fetched data in state
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching data:', error);
      });

  ; 

   

    return(
      <>{data}</>
    ) 
}