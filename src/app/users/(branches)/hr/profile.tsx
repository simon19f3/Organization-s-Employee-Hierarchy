import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DeleteButton from './deletebutton';
import UpdateButton from './updateButton';
import AddEmployee from './addEmployee';

function Profile() {
  const employees = useSelector((state: any) => state.employees);
  const profile = useSelector((state: any) => state.profile);

  function Looper({ item }: { item: any }) {
    return (
      <div className='p-8 bg-gray-900 rounded-lg shadow-lg m-4'> {/* Darker background for the profile card */}
        <div className='flex flex-col md:flex-row items-center md:items-start justify-between mb-8'> {/* Responsive layout for top section */}
          <div className='basis-1/2 text-blue-100 mb-6 md:mb-0 md:mr-8'> {/* Adjusted text color for contrast */}
            <h1 className='text-5xl font-extrabold mb-4 text-blue-500'>{item.name}</h1> {/* Accent color for name */}
            <p className='text-xl leading-relaxed'>{item.description}</p>
          </div>
          <div className='basis-1/2 flex flex-col items-center'> {/* Centered image and profile title */}
            <h2 className='text-3xl font-bold mb-4 text-blue-300'>{item.name} Profile</h2> {/* Profile title color */}
            <img
              src="https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg"
              alt={`Profile of ${item.name}`}
              className="w-64 h-64 object-cover rounded-full shadow-xl border-4 border-blue-700" // Circular image with blue border
            />
          </div>
        </div>
        <div className='space-y-4 flex flex-col items-center'> {/* Spaced out action buttons */}
          <div className='w-full max-w-sm'> {/* Max width for buttons for consistency */}
            <UpdateButton NameV={item.name} className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg text-xl transition-colors duration-200 shadow-md" />
          </div>
          {
            <div className='w-full max-w-sm'>
              <DeleteButton NameV={item} className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg text-xl transition-colors duration-200 shadow-md" />
            </div>
          }
          <div className='w-full max-w-sm'>
            <AddEmployee NameV={item.name} className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg text-xl transition-colors duration-200 shadow-md" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='text-blue-700'> {/* Ensure default text color */}
      {employees
        .filter((item: any) => item.name === profile) // Filter employees by profile name
        .map((item: any) => (
          <Looper key={item.name} item={item} /> // Render the filtered item
        ))}
    </div>
  );
}

export default Profile;