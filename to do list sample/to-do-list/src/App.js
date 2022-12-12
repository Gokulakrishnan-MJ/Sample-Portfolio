import React, { useState } from 'react'
import InputArea from './InputArea';
import ToDoItem from './ToDoItem';

const App = () => {

  const [items,setitems]=useState([]);
  return (
    <div className='container'>
      <div className='heading'>
         <h1>TO-Do List</h1>
      </div>
     
      <InputArea/>
      <ToDoItem></ToDoItem>
    </div>
  )
}

export default App
