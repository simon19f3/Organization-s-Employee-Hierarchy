"use client"; 
import React from 'react';
import {useState} from "react"

function Add() {
  const [isAdded,setIsAdded]=useState(false);
  function handler(){
     setIsAdded(!isAdded);
  }  
  return (
    <div> 
        <button onClick={handler} className="border border-2 bg-green-600 object-center inset-11">add</button>
        { isAdded && <div className='border border-4'>
        <table>
  <tr>
    <th>employee</th>
    <th>id</th>
    <th>parent id</th>
  </tr>
  <tr>
    <td><input
        type="text"
       
        onChange={(e) => (e.target.value)}
        placeholder="Enter value"
      /></td>
    <td>ceo</td>
    <td>none</td>
  </tr>
  <tr>
    <td>cfo</td>
    <td>cfo</td>
    <td>ceo</td>
  </tr>
</table>
</div>}
    </div>
  )
}
export default Add ;