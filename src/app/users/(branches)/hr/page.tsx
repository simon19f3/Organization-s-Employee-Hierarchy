"use client";

import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from "react";
import Profile from './profile';
import { profileName } from '@/redux/slices/profileHandler';

// Define interface for Child (already provided in the original code)
interface Child {
  name: string;
  parent: string | null; // `null` for root elements
  children: Child[]; // Array of nested children
}

// Define interface for Employee (same as Child, assuming employees match this structure)
interface Employee {
  name: string;
  parent: string | null;
  children: Child[];
}

// Define interface for Redux state
interface RootState {
  employees: Employee[];
}

function buildHierarchy(items: Employee[]): Child[] {
  const map: { [key: string]: Child } = {};
  const roots: Child[] = [];

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
  };

  return (
    <div className="border-b border-gray-700">
      <div
        onClick={navigation}
        className="flex items-center justify-between p-2 cursor-pointer hover:bg-blue-800 text-blue-700 hover:text-white transition-colors duration-200 w-full"
      >
        <span className="font-medium text-ellipsis overflow-hidden whitespace-nowrap">{item.name}</span>
        {item.children.length > 0 && (
          <button onClick={toggleDropdown} className="ml-2 text-blue-400 hover:text-white flex-shrink-0">
            {isOpen ? "▼" : "▶"}
          </button>
        )}
      </div>
      {isOpen && item.children.length > 0 && (
        <div className="ml-5">
          {item.children.map((child) => (
            <div key={child.name}>
              <Dropdown item={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Hr = () => {
  const employees = useSelector((state: RootState) => state.employees);
  const hierarchy: Child[] = buildHierarchy(employees);

  return (
    <div className="bg-black text-blue-700 min-h-screen">
      <h1 className="flex items-center justify-center text-3xl font-bold p-8 bg-blue-900 text-white w-full">
        JOB Hierarchy
      </h1>
      <div className="flex">
        <div className="w-fit min-w-[250px] max-w-[400px] bg-gray-900 shadow-lg rounded-lg overflow-hidden mt-1 p-4 border-r border-blue-700">
          {hierarchy.map((item) => (
            <div className="border-b border-gray-700" key={item.name}>
              <Dropdown item={item} />
            </div>
          ))}
        </div>
        <div className="flex-1 p-4">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Hr;