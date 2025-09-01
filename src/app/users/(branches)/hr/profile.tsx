"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import DeleteButton from './deletebutton';
import UpdateButton from './updateButton';
import AddEmployee from './addEmployee';
import Image from 'next/image';

// Define interface for Employee (matches Child from previous responses)
interface Employee {
  name: string;
  parent: string | null;
  children: Employee[];
  description?: string; // Optional, based on usage in Looper
}

// Define interface for Redux state
interface RootState {
  employees: Employee[];
  profile: string; // Assuming profile is a string (name of the selected employee)
}

function Looper({ item }: { item: Employee }) {
  return (
    <div className='p-8 bg-gray-900 rounded-lg shadow-lg m-4'>
      <div className='flex flex-col md:flex-row items-center md:items-start justify-between mb-8'>
  <div className='basis-1/2 text-blue-100 mb-6 md:mb-0 md:mr-8 min-w-0'> {/* Add min-w-0 */}
    <h1 className='text-5xl font-extrabold mb-4 text-blue-500'>{item.name}</h1>
    <p className='text-xl leading-relaxed break-words'>{item.description ?? 'No description available'}</p>
  </div>
  <div className='basis-1/2 flex flex-col items-center'>
    <h2 className='text-3xl font-bold mb-4 text-blue-300'>{item.name} Profile</h2>
    <Image
      src="/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg"
      alt={`Profile of ${item.name}`}
      width={500}
      height={500}
      className="w-64 h-64 object-cover rounded-full shadow-xl border-4 border-blue-700"
    />
  </div>
</div>
      <div className='space-y-4 flex flex-col items-center'>
        <div className='w-full max-w-sm'>
          <UpdateButton
            NameV={item.name}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg text-xl transition-colors duration-200 shadow-md"
          />
        </div>
        <div className='w-full max-w-sm'>
          <DeleteButton
            NameV={item}
            className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg text-xl transition-colors duration-200 shadow-md"
          />
        </div>
        <div className='w-full max-w-sm'>
          <AddEmployee
            NameV={item.name}
            className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg text-xl transition-colors duration-200 shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

function Profile() {
  const employees = useSelector((state: RootState) => state.employees);
  const profile = useSelector((state: RootState) => state.profile);

  return (
    <div className='text-blue-700'>
      {employees
        .filter((item: Employee) => item.name === profile)
        .map((item: Employee) => (
          <Looper key={item.name} item={item} />
        ))}
    </div>
  );
}

export default Profile;