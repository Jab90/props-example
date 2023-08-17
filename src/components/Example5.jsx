import React from 'react';

export default function Example5() { 
  //variable 
  const name = 'John Dee'; //string
  const age = 30 + 5; //number

  //array
  //array always starts with 0
  //first item is 0
  const hobbies = ["movies", "music", "sports"]; // array
  
  //object
  const address = {
    street: "50 Main St",
    city: "Boston", 
    state: "MA"
  };

  //array of objects
  const todos = [ 
    { 
    id:1,
    text: "take out trash",
    isCompleted: true
  },
  {
    id:2, 
    text: "meeting with boss",
    isCompleted: true
    },
  {
    id:3, 
    text: "dentist appointment",
    isCompleted: false
  }
  ]


  //map function

  return (
    <>
    <div>{name}</div>
    <div>{age}</div>
    <div>{hobbies[0]}</div>
    <div>{address.street}</div>
    <div>{address['street']}</div>
    <div>{todos[0]['text']}</div>
    <div>{todos[1]['text']}</div>
    <div>{todos[2]['text']}</div>
    <div>{todos[2]['isCompleted']}</div>

    </>
  )
}