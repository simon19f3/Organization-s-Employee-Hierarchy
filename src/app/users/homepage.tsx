import React from 'react'
import { FaLinkedinIn, FaLocationArrow, FaPhone, FaTwitter } from 'react-icons/fa'
import { FaLocationPin, FaVoicemail } from 'react-icons/fa6';
import Link from 'next/link'

const Homepage = () => {
  return (
    <div>
       <div className='grid grid-col md:grid-cols-2 items-center justify-center gap-8 p-6  rounded-lg shadow-md'>
            <div className='p-4'>
            <h2 className='text-4xl mb-6'>Employee Hierarchy Management System</h2>
            <p className='text-xl text-slate-400'>This platform allows you to manage and view the hierarchy of employees within your organization.</p>
            </div> 
            <div>   
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Employee Hierarchy" className="w-full h-auto rounded-lg shadow-md" />
            </div>
      </div>
      <div className='p-10 mt-8  rounded-lg shadow-md text-center'>
        <h3 className='text-4xl mb-6 '>Our Mission</h3>
        <p className='text-slate-400 text-justify text-xl justify-center items-center px-40'>To provide a seamless and efficient way to visualize and manage the structure of your organization, ensuring clarity in roles and responsibilities.</p>
      </div>
      
        <div className='p-10 mt-8  rounded-lg shadow-md text-center'>
            <h3 className='text-4xl mb-6 '>Key Features</h3>
            <ul className='list-disc list-inside text-left text-slate-400 text-xl px-40'>
                <li>Visualize the hierarchy of employees from CEO to entry-level positions.</li>
                <li>Manage employee roles and responsibilities.</li>
                <li>Easy navigation through different levels of the organization.</li>
                <li>Profile management for each employee.</li>
            </ul>
          </div>
          <div className='justify-center items-center py-10 text-center'> 
          <Link href="/users" className='bg-blue-950 text-5xl p-4 rounded-md text-center justify-center items-center text-blue-100'> ceo</Link>
          </div>
          <div className='flex flex-row   justify-center gap-10 p-6 mb-12 rounded-lg shadow-md mt-8 mx-32 bg-blue-950'>
            <div>
            <h3 className='text-2xl text-blue-100 '>office</h3>
            <p className='text-slate-400 text-xl justify-center items-center'>_______</p>
            <div> 
            <div className='flex flex-row gap-3 py-3'>
              <FaLocationPin className='bg-blue-200 p-1 rounded-md text-xl'/>
              <p className='text-blue-100'>bole,12th street</p>  
            </div>
            <div className='flex flex-row gap-3 py-3'>
              <FaPhone className='bg-blue-200 p-1 rounded-md text-xl'/>
              <p className='text-blue-100'>+251901234567</p>  
            </div>
            <div className='flex flex-row gap-3 py-3'>
              <FaVoicemail className='bg-blue-200 p-1 rounded-md text-xl'/>
              <p className='text-blue-100'>simonassfaw@gmail.com</p>  
            </div>
            <div className='flex flex-row gap-3 py-3'>
              <FaLinkedinIn className='bg-blue-200 p-1 rounded-md text-xl'/>
              <p className='text-blue-100'>linkedIn</p>  
            </div>
            <div className='flex flex-row gap-3 py-3'>
              <FaTwitter className='bg-blue-200 p-1 rounded-md text-xl'/>
              <p className='text-blue-100'>twitter</p>  
            </div>
            </div>
            </div>
            <div>
            <h3 className='text-2xl text-blue-100'>News</h3>
            <p className='text-slate-400 text-xl  items-center mb-3 '>_______</p>
            <div className='flex flex-row gap-3 pb-3'>
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Employee Hierarchy" className="w-16 h-16 rounded-lg shadow-md" />
                  <div>
                  <p className='text-center text-blue-100'>News1 will be posted soon.</p>
                  <p className='text-center text-blue-100 '>12/06/2024</p> 
                  </div> 
            </div>
            <div className='flex flex-row gap-3 pb-3'>
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Employee Hierarchy" className="w-16 h-16 rounded-lg shadow-md" />
                  <div>
                  <p className='text-center text-blue-100'>News2 will be posted soon.</p>
                  <p className='text-center text-blue-100 '>12/06/2024</p> 
                  </div> 
            </div>
            </div>
            <div>
            <h3 className='text-2xl text-blue-100'>office</h3>
            <p className='text-slate-400 text-xl '>_______</p>
            <div className='flex flex-row gap-3 p-3'>
              <FaPhone className='bg-blue-200 p-1 rounded-md text-xl'/>
              <p className='text-blue-100'>simonassfaw@gmail.com</p>  
            </div>
            </div>
            <div>
              <h3 className='text-2xl text-blue-100'>Working Hours</h3>
              <p className='text-slate-400 text-xl '>_______</p>
              <div className='flex flex-row gap-3 py-3'>
                {/* <FaLocationArrow className='bg-blue-200 rounded-md text-2xl p-1 '/> */}
                <p className='text-blue-100'>Our support awaits to help you 24 hours a day and 6 days per week.</p>
              </div>
              <div>
              <p className='py-3 text-blue-100'>Mon-Fri_____ 8:30 AM - 6:00 PM</p>  
              <p className='text-blue-100'>Sat___________ 9:00AM-2:PM</p>  
              </div> 
            </div>
            
          </div>
    </div>
  )
}

export default Homepage;