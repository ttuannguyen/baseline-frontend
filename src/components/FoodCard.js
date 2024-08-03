import React from 'react'

const FoodCard = ({ food }) => {
  return (
    <div className='foodCard'>
        <p>{food.name}</p>
        <p>Calories: {food.calories}</p>
        <img src={food.image} alt='' />
  </div>
  )
}

export default FoodCard