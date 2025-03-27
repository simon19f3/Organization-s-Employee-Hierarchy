"use client"; 
import React from 'react';
import {useState} from "react"
import { addB } from '@/redux/slices/employees';
import { useSelector,useDispatch } from 'react-redux';

function AddEmployee({NameV}:any) {
  const[ name,setName]=useState("" );
  const [description,setDescription]=useState("");
  const [display,setDisplay]=useState(false);
  const dispatch=useDispatch(); 
  const employees= useSelector((state:any)=>state.employees);
   
 
  function handleForm(e:any){
    e.preventDefault();
    const newEmployee={
      name:name,
      parent:NameV,
      children:[]
   }
  if(newEmployee.name!==""){
   dispatch(addB(newEmployee));}
   setDisplay(!display);
   }
   function handleVariable(){
    setDisplay(!display);
   } 

  return (
    <div className='flex items-center justify-center w-3/12 place-self-center bg-green-200 text-2xl font-bold'> 
    {display && <div className='flex'>  
     
      <form >
      <input 
      placeholder='name'
      type='text'
      value={name}
      onChange={(e)=>setName(e.target.value)}/>
     <input 
      placeholder='description'
      type='text'
      value={description}
      onChange={(e)=>setDescription(e.target.value)}/> 
      <button onClick={handleForm}> submit</button>
      </form>
      
      </div>}
      {!display&& <button className='flex items-center justify-center w-3/12 place-self-center bg-green-200 text-2xl font-bold' onClick={handleVariable}>add</button>}
     </div>
    
  )
}
export default AddEmployee;