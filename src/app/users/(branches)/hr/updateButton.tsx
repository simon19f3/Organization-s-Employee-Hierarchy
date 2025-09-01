"use client";
import React from 'react';
import { useState } from "react";
import { update, updateFamily } from '@/redux/slices/employees'; // Assuming addB, deleTwo, deleteB are not used here
import {  useDispatch } from 'react-redux';
import { profileName } from '@/redux/slices/profileHandler';

interface UpdateButtonProps {
  NameV: string;
  className?: string; // Add this prop to accept classes from parent
}

function UpdateButton({ NameV, className }: UpdateButtonProps) {
  const [name, setName] = useState("");
  const [display, setDisplay] = useState(false); // Controls visibility of the form
  const dispatch = useDispatch();
  // const employees = useSelector((state: any) => state.employees); // Not directly used in this component's render or logic

  function handleUpdate(e: React.FormEvent) { // Use React.FormEvent for form submission
    e.preventDefault();
    const newEmployee = {
      employeeName: NameV,
      updatedName: name.trim(), // Trim whitespace
    };

    if (newEmployee.updatedName !== "") { // Ensure the new name is not empty
      dispatch(updateFamily(newEmployee));
      dispatch(update(newEmployee));
      dispatch(profileName(newEmployee.updatedName));
      setName(""); // Clear the input field after update
    }
    setDisplay(false); // Hide the form after update
  }

  function handleDisplay() {
    setDisplay(!display);
    setName(""); // Clear input when showing/hiding form
  }

  return (
    <div>
      {display && (
        <form onSubmit={handleUpdate} className="flex flex-col space-y-3 p-4 bg-gray-800 rounded-lg shadow-inner"> {/* Styled form container */}
          <input
            type="text"
            placeholder={`New name for ${NameV}`} // More descriptive placeholder
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" // Styled input
          />
          <div className="flex space-x-2"> {/* Container for form buttons */}
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200" // Styled submit button
            >
              Update
            </button>
            <button
              type="button" // Important: set type="button" to prevent unintended form submission
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
          Update {NameV}
        </button>
      )}
    </div>
  );
}

export default UpdateButton;