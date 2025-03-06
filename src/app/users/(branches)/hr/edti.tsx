"use client"; 
import React from 'react';
import {useState} from "react"

function Edit() {
  const [isAdded,setIsAdded]=useState(false);
  function handler(){
     setIsAdded(!isAdded);
  }  
  return (
    <div> 
        <div className='flex flex-row space-x-4 object-center items-center justify-center py-2'>
         <button onClick={handler} className="border border-2 bg-green-600 object-center inset-11">edit</button>
         <button  className="border border-2 bg-red-600 object-center inset-11">delete</button>
         <button onClick={handler} className="border border-2 bg-blue-600 object-center inset-11">add</button>
         </div>
        { isAdded && <div className=''>
        <table className='justify-self-center border border-4'>
  <tr>
    <th>employee</th>
    <th>id</th>
    <th>parent id</th>
  </tr>
  <tr>
    <td>ceo</td>
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
export default Edit ;