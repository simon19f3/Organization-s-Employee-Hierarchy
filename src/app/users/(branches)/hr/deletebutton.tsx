"use client";
import { useSelector,useDispatch } from 'react-redux';
import { deleteB,update,deleTwo } from '@/redux/slices/employees';
import { useState } from 'react';
import React from 'react'
import AddEmployee from './addEmployee';
import Profile from './profile';
import { profileName } from '@/redux/slices/profileHandler';






function DeleteButton({NameV}:any) {
  const [display,setDisplay]=useState(false);  
  const dispatch=useDispatch();
  const employees= useSelector((state:any)=>state.employees)
    
    
    
    const handleDelete=(employeeName:any)=>{
          dispatch(deleTwo(employeeName));
          dispatch(deleteB(employeeName));
          NameV.parent!==null?dispatch(profileName(NameV.parent)):dispatch(profileName(employees[1].name));
          setDisplay(true); }
    return (
    <div>
        <button onClick={()=>handleDelete(NameV.name)} className=" ">delete</button>
       
    </div>
  )
}

export default DeleteButton;