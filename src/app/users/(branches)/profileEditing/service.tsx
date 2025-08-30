import Link from 'next/link'
import React from 'react'
import { IoLogoLinkedin } from "react-icons/io";
function Service() {
  const myServices:any=[
    {icon:'IoLogoLinkedin',
      name:'Appliction Development',
      description:'I have experience in Software application design, building and customization, using languages like java and python.',
      link:' https://chat.deepseek.com/a/chat/s/da7b7c1d-5123-463b-a530-e8d39b640181'},
    {name:'Machine learning',
      description:'I possess expertise in various machine learning algorithms, including model training, and am proficient in deploying models on cloud platforms',
      link:'https://chat.deepseek.com/a/chat/s/da7b7c1d-5123-463b-a530-e8d39b640181', 
    },
  {name:'Hardware Design',
    description:'I have expertise in hardware design using tools like Proteus, MATLAB, and Simulink, as well as proficiency in signal analysis.',
    link:'https://chat.deepseek.com/a/chat/s/da7b7c1d-5123-463b-a530-e8d39b640181'
}
]
  return (
    <div className='mx-40 mb-10'>
      <div className='text-7xl font-bold pb-20'>
       My Services
      </div>
      <div className='  grid grid-cols-3 mr-12  ' >
      {myServices.map((myService:any)=>(
      <div key={myService.name} className=' shadow-md   bg-gray-900  px-10 py-10 mr-12 mb-12 hover:bg-red-600  duration-300 hover:-translate-y-3 rounded-3xl'>
       <div className='text-7xl mb-10 ' ><IoLogoLinkedin /></div>
        <h1 className='text-4xl mb-8'>{myService.name}</h1>
        <p className=' mb-8'>{myService.description}</p>
      <Link href={myService.link}> learn</Link>
      </div>))}
     </div>
      </div>
  )
}

export default Service