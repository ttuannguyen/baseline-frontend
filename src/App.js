// import logo from './logo.svg';
// import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FoodCard from './components/FoodCard';

function App() {

  const [ingredients, setIngredients] = useState('');
  const [foods, setFoods] = useState([]);

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
    axios.post('/api/search', {ingredients})
    .then(res => setFoods(res.data))
    .catch(err => console.log(err))
    setIngredients('');
  }

  const foodCards = foods.map(food => <FoodCard food={food} key={food.name} />)

  return (
    <div className='App'>
      <h1>Foodie</h1>
      <form onSubmit={handleSubmit}>
        <label>Search:
          <input type='text' name='ingredients' value={ingredients} onChange={(e) => setIngredients(e.target.value)}/>
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
