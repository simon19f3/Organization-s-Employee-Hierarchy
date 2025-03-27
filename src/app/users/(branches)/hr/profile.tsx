import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import DeleteButton from './deletebutton';
import UpdateButton from './updateButton';
import AddEmployee from './addEmployee';
function Profile() {
  const employees=useSelector((state:any)=>state.employees)
  const profile = useSelector((state: any) => state.profile); 
  function Looper({ item }: { item: any }){
    return(
        <div>
        <div key={item.name} className='flex '>
            <div className='basis-1/2 m-20 text-2xl font-semibold text-gray-800 '>
          <h1 className='basis-1/2 m-20 text-5xl font-semibold text-gray-800 '>{item.name}</h1>
          <p>{item.description}</p>
         
          </div>
          <div className='basis-1/2 m-20 text-2xl font-semibold text-gray-800 '> {item.name} Profile
          <img 
        src="https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg" 
        alt="Sample Ima" 
        className="w-full h-full object-cover rounded-lg shadow-md"
      />
           </div>
          </div>
          <div className='space-y-1 flex flex-col items-center justify-center'>
          <div className='flex items-center justify-center w-3/12 place-self-center bg-blue-200 text-2xl font-bold'><UpdateButton NameV={item.name}/></div>
          {
           <div className='flex items-center justify-center w-3/12 place-self-center bg-red-200 text-2xl font-bold'><DeleteButton NameV={item}/></div>}
          <div className='flex items-center justify-center w-3/12 place-self-center bg-green-200 text-2xl font-bold'><AddEmployee NameV={item.name}/></div>
        </div>  
           </div>
      )   
  }  
  
  return (
    <div>
      {employees
        .filter((item: any) => item.name === profile) // Filter employees by profile name
        .map((item: any) => (
          <Looper key={item.name} item={item} /> // Render the filtered item
        ))}
        
    </div>
    
  )
}

export default Profile