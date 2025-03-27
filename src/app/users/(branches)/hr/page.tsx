"use client";

import { useSelector,useDispatch } from 'react-redux';
import { deleteB,update } from '@/redux/slices/employees';
import React from "react";
import { useState } from "react";
import AddEmployee from "./addEmployee";
import AddButton from "./deletebutton";
import UpdateButton from './updateButton';
import CssLearning from './cssLearning';
import Profile from './profile';
import { profileName } from '@/redux/slices/profileHandler';


interface Child {
  name: string;
  parent: string | null; // `null` for root elements
  children: Child[]; // Array of nested children
}

function buildHierarchy(items: any): Child[] {
  const map: { [key: string]: Child } = {};
  const roots: any= [];

  // Step 1: Create a map of all items
  items.forEach((item: Child) => {
    map[item.name] = { ...item, children: [] }; // Initialize each item with an empty children array
  });

  // Step 2: Build the hierarchy
  items.forEach((item: Child) => {
    if (item.parent) {
      // If the item has a parent, add it to the parent's children array
      map[item.parent].children.push(map[item.name]);
    } else {
      // If the item has no parent, it's a root item
      roots.push(map[item.name]);
    }
  });

  return roots; // Return the top-level items (hierarchy starts here)
}

const Dropdown = ({ item }: { item: Child }) => {
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
 const navigation=()=>{
  dispatch(profileName(item.name));  
 }

  return (
    <div className="border-b border-gray-200">
      <div onClick={navigation} className="" >
        {item.name} {item.children.length > 0 && (isOpen ?<button onClick={toggleDropdown}> "▼"</button> : <button onClick={toggleDropdown}> "▶"</button>)}
        
        {/* <AddButton key={item.name} NameV={item.name}/> */}
         {/* <div> <UpdateButton key={item.name} NameV={item.name}/></div>  */}
      </div>
      {isOpen && item.children.length > 0 && (
        <div style={{ marginLeft: "20px" }}>
          {item.children.map((child, index) => (
            <div key={child.name } className="">
              <Dropdown key={child.name } item={child} />
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Hr = () => {
 
  const dispatch=useDispatch();
  const employees=useSelector((state:any)=>state.employees);
  const hierarchy: Child[] = buildHierarchy(employees);

  return (
    <div className=' bg-transparent'>
      <h1 className='flex items-center justify-center text-2xl font-semibold text-gray-800 p-8 bg bg-orange-200 w-full'>JOB Hierarchy</h1>
      <div className='flex '>
        {/* <div className="w-full flex justify-start border-4 border-black"> */}
        <div className="w-fit basis-1/12 bg-white shadow-md max-w-xl bg-white rounded-lg overflow-hidden p-6 border-b border-gray-200 mt-1  " 
      >
        {hierarchy.map((item, index) => (
          <div className='border-b border-gray-200 ' key={index}>
          
          <Dropdown item={item} />
         
          </div>
        ))}
      </div>
        {/* </div> */}
      <div className='  basis-11/12'>
          <Profile />
      </div>
      </div>
      {/* <div><AddEmployee/></div> */}
      {/* <div><CssLearning/></div> */}
    </div>
  );
};

export default Hr;