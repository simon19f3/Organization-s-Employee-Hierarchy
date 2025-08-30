"use client";

import { useSelector, useDispatch } from 'react-redux';
import React from "react";
import { useState } from "react";
import Profile from './profile';
import { profileName } from '@/redux/slices/profileHandler';

interface Child {
  name: string;
  parent: string | null; // `null` for root elements
  children: Child[]; // Array of nested children
}

function buildHierarchy(items: any): Child[] {
  const map: { [key: string]: Child } = {};
  const roots: any = [];

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

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation when toggling dropdown
    setIsOpen(!isOpen);
  };

  const navigation = () => {
    dispatch(profileName(item.name));
  }

  return (
    <div className="border-b border-gray-700"> {/* Adjusted border color */}
      <div
        onClick={navigation}
        className="flex items-center justify-between p-2 cursor-pointer hover:bg-blue-800 text-blue-700 hover:text-white transition-colors duration-200" // Adjusted text, hover bg, and hover text color
      >
        <span className="font-medium">{item.name}</span>
        {item.children.length > 0 && (
          <button onClick={toggleDropdown} className="ml-2 text-blue-400 hover:text-white"> {/* Adjusted button color */}
            {isOpen ? "▼" : "▶"}
          </button>
        )}
      </div>
      {isOpen && item.children.length > 0 && (
        <div style={{ marginLeft: "20px" }}>
          {item.children.map((child, index) => (
            <div key={child.name} className="">
              <Dropdown item={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Hr = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state: any) => state.employees);
  const hierarchy: Child[] = buildHierarchy(employees);

  return (
    <div className='bg-black text-blue-700 min-h-screen'> {/* Main background and text color */}
      <h1 className='flex items-center justify-center text-3xl font-bold p-8 bg-blue-900 text-white w-full'> {/* Header styling */}
        JOB Hierarchy
      </h1>
      <div className='flex'>
        <div className="w-fit basis-1/12 bg-gray-900 shadow-lg max-w-xl rounded-lg overflow-hidden mt-1 p-4 border-r border-blue-700"> {/* Hierarchy panel background, shadow, and border */}
          {hierarchy.map((item, index) => (
            <div className='border-b border-gray-700' key={index}> {/* Adjusted border color */}
              <Dropdown item={item} />
            </div>
          ))}
        </div>
        <div className='basis-11/12 p-4'> {/* Padding for the profile section */}
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Hr;