"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { SunIcon, MoonIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  // Make theme a state so it can be changed
  const [theme, setTheme] = useState("dark"); 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleThemeToggle = () => {
    setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
  };

  // A helper to close the menu when a link is clicked
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };
  
  // A helper to handle theme toggle from mobile menu
  const handleMobileThemeClick = () => {
    handleThemeToggle();
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-black border border-slate-600 round-md mb-7 text-white">
      
      <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5'>
       
        <div className='relative flex justify-between items-center h-16'> 
         
          <Link href="/" className='text-xl font-bold text-blue-600'> @employee</Link>
          
          
          <div className="hidden md:flex items-center space-x-8">
            <Link className='hover:text-blue-400 transition-colors' href="/">Home</Link>
            <Link className='hover:text-blue-400 transition-colors' href="/users">Our CEO</Link> 
            <Link className='hover:text-blue-400 transition-colors' href="/users/cfo">About Us</Link>
            <Link className='hover:text-blue-400 transition-colors' href="/users/hr">Employee Hierarchy</Link> 
            <Link className='hover:text-blue-400 transition-colors' href="/users/contactUs">Contact</Link>
            
           
            {/* <button onClick={handleThemeToggle} className='p-1 rounded-full hover:bg-gray-700 transition-colors cursor-pointer'> 
              {theme === "dark" ? (
                <SunIcon className='w-7 h-7'/>
              ) : (
                <MoonIcon className='w-7 h-7'/>
              )}
            </button> */}
          </div>
          
       
          <button onClick={toggleMobileMenu} className='md:hidden p-2 rounded-md hover:bg-gray-700 transition-colors cursor-pointer'>
            {isMobileMenuOpen ? (<XMarkIcon className='w-7 h-7'/>) : (<Bars3Icon className='w-7 h-7'/>)}
          </button>
        </div>

        {/* --- Mobile Menu Panel --- */}
        {isMobileMenuOpen && (
          // FIX 2: Added `z-50` to ensure the menu is on top of other content
          <div className='absolute top-16 left-0 bg-gray-900 text-white w-full p-4 md:hidden z-50'>
            <div className='flex flex-col items-start space-y-4'>
                {/* FIX 3: Moved onClick to the Link to close menu on navigation */}
                <Link onClick={handleMobileLinkClick} className='hover:text-blue-400 transition-colors' href="/">Home</Link>
                <Link onClick={handleMobileLinkClick} className='hover:text-blue-400 transition-colors' href="/users">Our CEO</Link>
                <Link onClick={handleMobileLinkClick} className='hover:text-blue-400 transition-colors' href="/users/cfo">About Us</Link>
                <Link onClick={handleMobileLinkClick} className='hover:text-blue-400 transition-colors' href="/users/hr">Employee Hierarchy</Link>
                <Link onClick={handleMobileLinkClick} className='hover:text-blue-400 transition-colors' href="/users/contactUs">Contact</Link>
                <div>
                  {/* FIX 4: Added onClick for the mobile theme toggle and removed broken class */}
                  {/* <button onClick={handleMobileThemeClick} className='flex items-center p-1 rounded-md hover:bg-gray-800 transition-colors'> 
                    {theme === "dark" ? (
                      <><SunIcon className='w-7 h-7 mr-2'/>Light mode</>
                    ) : (
                      <><MoonIcon className='w-7 h-7 mr-2'/>Dark mode</>
                    )}
                  </button> */}
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navigation;