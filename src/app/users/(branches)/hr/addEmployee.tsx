"use client";
import React from 'react';
import { useState } from "react";
import { addB } from '@/redux/slices/employees';
import { useSelector, useDispatch } from 'react-redux';

interface AddEmployeeProps {
  NameV: string;
  className?: string; // Add this prop to accept classes from parent
}

function AddEmployee({ NameV, className }: AddEmployeeProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [display, setDisplay] = useState(false); // Controls visibility of the form
  const dispatch = useDispatch();
  const employees = useSelector((state: any) => state.employees); // Kept for potential use

  function handleAdd(e: React.FormEvent) { // Use React.FormEvent for form submission
    e.preventDefault();
    const newEmployee = {
      name: name.trim(), // Trim whitespace
      parent: NameV,
      children: []
    };

    if (newEmployee.name !== "") { // Ensure the name is not empty
      dispatch(addB(newEmployee));
      setName(""); // Clear the input field after submission
      setDescription(""); // Clear the input field after submission
      setDisplay(false); // Hide the form after submission
    }
  }

  function handleDisplay() {
    setDisplay(!display);
    setName(""); // Clear input when showing/hiding form
    setDescription(""); // Clear description when showing/hiding form
  }

  return (
    <div>
      {display && (
        <form onSubmit={handleAdd} className="flex flex-col space-y-3 p-4 bg-gray-800 rounded-lg shadow-inner"> {/* Styled form container */}
          <input
            type="text"
            placeholder="Employee Name" // More descriptive placeholder
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" // Styled input
          />
          <input
            type="text"
            placeholder="Description" // Consistent placeholder
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" // Styled input
          />
          <div className="flex space-x-2"> {/* Container for form buttons */}
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200" // Styled submit button
            >
              Add Employee
            </button>
            <button
              type="button" // Prevent unintended form submission
              onClick={handleDisplay}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200" // Styled cancel button
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {!display && (
        <button
          onClick={handleDisplay}
          className={className || "bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg text-xl transition-colors duration-200 shadow-md"} // Apply passed className or use default
        >
          Add Employee
        </button>
      )}
    </div>
  );
}

export default AddEmployee;