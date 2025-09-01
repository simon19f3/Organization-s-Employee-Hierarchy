"use client";
import React, { useState } from 'react';
import { addB } from '@/redux/slices/employees';
import { useDispatch } from 'react-redux';

// Define interface for Employee (matches employees.ts)
interface Employee {
  name: string;
  parent: string | null;
  image: string;
  description: string;
  children: Employee[];
}

interface AddEmployeeProps {
  NameV: string;
  className?: string; // Accept classes from parent
}

function AddEmployee({ NameV, className }: AddEmployeeProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [display, setDisplay] = useState(false); // Controls visibility of the form
  const dispatch = useDispatch();

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    const newEmployee: Employee = {
      name: name.trim(),
      parent: NameV,
      image: "https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg", // Default image (same as initial state in employees.ts)
      description: description.trim(), // Include description
      children: [],
    };

    if (newEmployee.name !== "") {
      dispatch(addB(newEmployee));
      setName("");
      setDescription("");
      setDisplay(false);
    }
  }

  function handleDisplay() {
    setDisplay(!display);
    setName("");
    setDescription("");
  }

  return (
    <div>
      {display && (
        <form onSubmit={handleAdd} className="flex flex-col space-y-3 p-4 bg-gray-800 rounded-lg shadow-inner">
          <input
            type="text"
            placeholder="Employee Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex space-x-2">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
            >
              Add Employee
            </button>
            <button
              type="button"
              onClick={handleDisplay}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {!display && (
        <button
          onClick={handleDisplay}
          className={className || "bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg text-xl transition-colors duration-200 shadow-md"}
        >
          Add Employee
        </button>
      )}
    </div>
  );
}

export default AddEmployee;