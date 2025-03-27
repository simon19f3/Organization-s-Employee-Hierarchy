"use client"; 
import React from 'react';
import {useState} from "react"
import {addB,deleTwo, update,deleteB, updateFamily } from '@/redux/slices/employees';
import { useSelector,useDispatch } from 'react-redux';
import { profileName } from '@/redux/slices/profileHandler';


function UpdateButton({NameV}:any) {
  const [name,setName]=useState("");
  const [parent,setParent]=useState("");
  const [display,setDisplay]=useState(false);
  const dispatch=useDispatch();
  const employees=useSelector((state:any)=>state.employees)
  function handleUpdate(e:any){
    e.preventDefault();
    const newEmployee={
      employeeName:NameV,
      updatedName:name,
    }  
   if (newEmployee.updatedName!=="") {
     dispatch(updateFamily(newEmployee))
    dispatch(update(newEmployee))
    dispatch(profileName(newEmployee.updatedName)) 
  }
    setDisplay(!display);
  }
  function handleDisplay(){
    setDisplay(!display);
  }
  return (
    <div className='flex items-center justify-center w-3/12 place-self-center bg-blue-200 text-2xl font-bold'>
      <div>
        {display&&<form>
        <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e)=>setName(e.target.value)}/>
       <button onClick={handleUpdate}>update</button>
      </form>}</div>
     { !display &&<button onClick={handleDisplay} >update</button>}
      </div>
  )
}

export default UpdateButton;