// import logo from './logo.svg';
// import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


function App() {

  const apiCall = () => {
    axios.get('http://localhost:8080').then((data) => {
      console.log(data);
    })
  }

  apiCall();
  
  // const [backendData, setBackendData] = useState();
  // useEffect(() => {
  //   fetch('/api')
  //   .then(res => res.json())
  //   .then(data => setBackendData(data))
  // }, [])
  // const display = backendData.map(data => console.log(data))

  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
