import React from 'react';

function Child(props) {
  const { name, age, isStudent} = props //destructuring
  return(
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Is student? {isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

export default function Example3() {
  //variables
  const name = "Maria"
  const age = 26
  const isStudent = false

    //object
    const david = { //object
      name: "David",
      age: 29,
      isStudent: true
    }
    const maria = {
      name: "Maria",
      age: 26,
      isStudent: false
    }
    return (
    <>
    <Child {...david} /> {/*Spread operator*/}
    <Child name={david.name} age={david.age} isStudent={david.isStudent}/>
    <Child name={maria.name} age={maria.age} isStudent={maria.isStudent}/>
    <Child name={name} age={age} isStudent={isStudent}/>
    </>
  )
}