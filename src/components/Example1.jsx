import React from 'react';


 function Greetings(props) {
  const { name, prof} = props; //Destructuring
  return (
    <div>Hello, {name} I am a {prof}</div>
  )
}

export default function() { 
  return (
    <>
    <Greetings name="Kingsley" prof="Software Engineer" />
    <Greetings name="Jab" prof="Software Engineer"/> 
    </>
  )
}