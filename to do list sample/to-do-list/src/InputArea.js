import React from 'react';
import { useState } from 'react';


const InputArea = () => {
const [inputText,setInputText]= useState("hello");

const inpText=(event)=> {
const val=event.target.value;
setInputText(val);
}
  return (
    <div className='inputArea'>
        <input type="text" onChange={inpText}/>
        <button ><span>Add</span></button>
        <p>{inputText}</p>
    </div>
  )
}
 
export default InputArea
