
import React from 'react'

import Component from './component'
import Add from './add'
import Posts from './button'

const CFO  = () => {
  
  
  return (
   <div>
     <div>CFO page </div> 
    <div className="">
      <div className="text-6xl text-center my-5">ceo </div>
      <div className="flex flex-row flex-wrap h-40 overflow-auto space-x-14 justify-center">
    
      <div className="border border-8 border-gray-50 " >
        <div className="text-3xl">Category</div>
        <ul>
          <div>
            Page
            <ul>
            <div className="flex flex-row m-0">
              <div><Component/></div>
              <div>Sale-Page</div>
              </div>
              <div>Sale-Page</div>
            </ul>
          </div>
        </ul>
      </div>

      {/* Category 2 */}
      <div className="border border-8 border-gray-50 ">
        <h2 className="text-3xl">Category</h2>
        <ul>
          <li>
            Page
            <ul>
              <li>Sale-Page</li>
              <li>Page</li>
              <li>Sale-Page</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Category 3 */}
      <div className="border border-8 border-gray-50 ">
        <h2 className="text-3xl">Category</h2>
        <ul>
          <li>
            Page
            <ul>
              <li>Sale-Page</li>
              <li>Page</li>
              <li>Sale-Page</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Category 4 */}
      <div className="border border-8 border-gray-50 ">
        <h2 className="text-3xl">Category</h2>
        <ul>
          <li>
            Page
            <ul>
              <li>Sale-Page</li>
              <li>Page</li>
              <li>Sale-Page</li>
            </ul>
          </li>
        </ul>
      </div>
      </div>
    </div>
    <div className='flex flex-row space-x-4 object-center items-center justify-center'>
     <div><Add/></div>
     
    <button className="border border-2 bg-red-600">delete</button>
     
    </div>
    <Posts/>
  </div>
   
  );
};

export default CFO ;