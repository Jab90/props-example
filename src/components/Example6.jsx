import React from 'react';

export default function Example6() { 
  //array of hobbies
  const hobbies = ["movies", "music", "sports", "cooking", "reading"];

  //array of objects
  const todos = [ 
    { 
      id: 1, 
      text: "take out trash",
      isCompleted: true
  },
  {
    id: 2,
    text: "meeting with boss",
    isCompleted: true
  },
  {
    id: 3, 
    text: "dentist appt",
    isCompleted: false
  },
  {
    id: 4, 
    text: "meeting with client",
    isCompleted: false
  }

  ];

  //map is used to loop through an array 

  return(
    <>
    {hobbies.map(hobby => (
      <li>I love {hobby}</li>
    ))}

    <p>Divider</p>

    {todos.map((todo, index) => (
      <li>{index} {todo.text}</li>
    ))}
    </>
  )
}