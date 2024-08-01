// import logo from './logo.svg';
// import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function App() {

  // const EDAMAM_API_ID = '';
  // const EDAMAM_API_KEY = '';

  const [keyword, setKeyword] = useState('');
  const [foods, setFoods] = useState([]);

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
  
  useEffect(() => {
    axios.get('/api')
    .then((data) => {
      console.log(data);
    }).catch(error => {
      console.error('Error:', error);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/search', {keyword})
    .then(res => {
      // console.log(res)
      setFoods(res);
    })
    .catch(err => console.log(err))
    setKeyword('');
  }

  console.log(foods);

  return (
    <div className='App'>
      App
      <form onSubmit={handleSubmit}>
        <label>Search:
          <input type='text' name='keyword' value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
        </label>
        <input type='submit' />
      </form>
    </div>
  );
}

export default App;
