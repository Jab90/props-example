import React from 'react';

function Dog(props) { 
  const { name, Age, Habit} = props;
  return (
    <div>
      <p> Dog Name: {name}</p>
      <p>Age: {Age}</p>
      <p>Habit: {Habit}</p>
    </div>
  )
}

export default function() { 
  return (
    <>
      <Dog name="Fufu" Age={3} Habit="jumping"/>
      <Dog name="Bingo" Age={4} Habit="chewing"/>
    </>
  )
}