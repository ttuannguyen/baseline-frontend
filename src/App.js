// import logo from './logo.svg';
// import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function App() {

  const EDAMAM_API_ID = '805a07f7';
  const EDAMAM_API_KEY = '48484be0535a5017a5e879330aa66712';

  const [input, setInput] = useState('');
  console.log(input);
  
  // test get request based on a search
  // axios.get('https://api.edamam.com/search', {
  //   params: {
  //     q: 'corn',
  //     app_id: EDAMAM_API_ID,
  //     app_key: EDAMAM_API_KEY,
  //   },
  // })
  // .then(response => {
  //   console.log(response.data);
  // })
  // .catch(error => {
  //   console.error('Error fetching data from Edamam API', error);
  // });


  
  const apiCall = () => {
    axios.get('http://localhost:8080').then((data) => {
      console.log(data);
    })
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hitting submit')
    setInput('');
  }
  

  return (
    <div className='App'>
      App
      <form onSubmit={handleSubmit}>
        <label>Search:
          <input type='text' name='input' value={input} onChange={(e) => setInput(e.target.value)}/>
        </label>
        <input type='submit' />
      </form>
    </div>
  );
}

export default App;
