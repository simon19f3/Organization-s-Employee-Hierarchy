import React from 'react';
import { SiAdventofcode } from "react-icons/si";
import Link from 'next/link'
function Work() {
  return (
    <div className='mx-40 '>
      <div className=' text-7xl'>My Work</div>
      <div className='grid grid-cols-3 mt-20'>
      <div className="group relative overflow-hidden  object-cover">
  <div className='mr-10'>
    <img
      src='https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1611723380/1611723379.jpg'
      alt='upload photo'
      className="w-full h-full object-cover"
    />
  </div>
  <div className='absolute inset-0 transform transition-all duration-700
                 translate-y-full group-hover:translate-y-0 
                 bg-gradient-to-t from-red-500/80 to-transparent 
                 flex flex-col items-center justify-center p-4 text-white mr-10'>
    <h1 className='text-xl mb-4'>Language Model FineTuning</h1>
    <p className='text-center mb-8'>A simple example of fine tuning a large language model to be domain specific</p>
    <Link href='https://github.com/AwraGame'>
      <SiAdventofcode className='text-7xl hover:scale-110 transition-transform' />
    </Link>
  </div>
</div>
      <div className='mr-10'>
          <img
          src='https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1611723380/1611723379.jpg'
          alt='upload photo'
          className='hover:bg-red-200'/>
      </div>
      <div className='mr-10'>
          <img
          src='https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1611723380/1611723379.jpg'
          alt='upload photo'
          />  
      </div>
      </div>
      <div className='my-16 place-self-center 2xl box-border '><Link href='https://github.com/simon19f3' className='text-2xl border rounded-lg border-red-600 hover:bg-orange-400 py-3 px-16'>See More</Link></div>
    </div>  
  )
}

export default Work;