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
    <div className='flex items-center justify-center w-3/12 place-self-center bg-green-100 p-6 rounded-lg shadow-md text-2xl font-semibold'> 
    {display && <div className='flex flex-col w-full gap-4'>  
     
      <form className='flex flex-col gap-4'>
      <input 
      placeholder='Name'
      type='text'
      value={name}
      onChange={(e)=>setName(e.target.value)}
      className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400'/>
     <input 
      placeholder='Description'
      type='text'
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400'/> 
      <button 
      onClick={handleForm}
      className='bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200'>
      Submit
      </button>
      </form>
      
      </div>}
      {!display && 
      <button 
      className='flex items-center justify-center w-full py-3 px-4 bg-green-500 text-white rounded-md text-xl font-semibold hover:bg-green-600 transition duration-200' 
      onClick={handleVariable}>
      Add
      </button>}
     </div>
)
}
export default AddEmployee;