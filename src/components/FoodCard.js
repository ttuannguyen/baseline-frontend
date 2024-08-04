import React from 'react'

const FoodCard = ({ food }) => {
  
    return (
    <div className='foodCard'>
        <h3>{food.name}</h3>
        <p>Calories: {food.calories}</p>
        <img src={food.image} alt='' />
        <p>Nutrient values:</p>
        {food.nutrients.map((n, index) => (
            <li key={index}>{n}</li>)
        )}
  </div>
  )
}

export default FoodCard