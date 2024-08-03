// import logo from './logo.svg';
// import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FoodCard from './components/FoodCard';

function App() {

  // const EDAMAM_API_ID = '';
  // const EDAMAM_API_KEY = '';

  const [keywords, setKeywords] = useState('');
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
    axios.post('/api/search', {keywords})
    .then(res => {
      // console.log(res)
      setFoods(res.data);
    })
    .catch(err => console.log(err))
    setKeywords('');
  }

  const foodCards = foods.map(food => <FoodCard food={food} />)

  return (
    <div className='App'>
      <h1>Foodie</h1>
      <form onSubmit={handleSubmit}>
        <label>Search:
          <input type='text' name='keywords' value={keywords} onChange={(e) => setKeywords(e.target.value)}/>
        </label>
        <input type='submit' />
      </form>
      <div className='foodListContainer'>
        {foodCards}
      </div>
    </div>
  );
}

export default App;
