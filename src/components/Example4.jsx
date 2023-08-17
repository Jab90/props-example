import React from 'react';

function Tasks(props) {
  const { children } = props
  return (
    <ul>
      {children}
    </ul>
  )
}

export default function Example4 () { 
  return (
    <Tasks>
      <li>Task 1</li>
      <li>Task 2</li>
      <li>Task 3</li>
    </Tasks>
  )
}