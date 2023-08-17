import React from 'react';

function Tasks(props) {
  const { items } = props
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default function Example7 () { 
  const itemsArray = [
    {id: 1, name: 'go shopping'},
    {id: 2, name: 'go to the gym'}, 
    {id: 3, name: 'go to the movies'}, 
    {id: 4, name: 'go to the park'},
  ]
  return (
    <Tasks items={itemsArray} />
     
  )
}