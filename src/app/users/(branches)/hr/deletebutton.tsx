"use client";
import { useSelector, useDispatch } from 'react-redux';
import { deleteB, deleTwo } from '@/redux/slices/employees';
import { useState } from 'react';
import React from 'react';
import { profileName } from '@/redux/slices/profileHandler';

function DeleteButton({ NameV }: any) {
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();
  const employees = useSelector((state: any) => state.employees);

  const handleDelete = (employeeName: any) => {
    dispatch(deleTwo(employeeName));
    dispatch(deleteB(employeeName));
    NameV.parent !== null ? dispatch(profileName(NameV.parent)) : dispatch(profileName(employees[1].name));
    setDisplay(true);
  };

  return (
    <div>
      <button
        onClick={() => handleDelete(NameV.name)}
        className="px-3 py-1 text-sm font-medium text-red-600 border border-red-600 rounded-md hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-200 ease-in-out"
      >
        Delete
      </button>
    </div>
  );
}

export default DeleteButton;