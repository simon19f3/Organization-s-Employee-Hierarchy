'use client'
import { useState } from 'react';
import React from 'react';

function About() {
  const skills:any=[{name:'Machine Learning',description: 'Supervised learning, Unsupervised learning'},
    {name:'Software development',description:' Python, Java, C++, HTML, CSS'},
    {name:'Data structures and algorithms',description:'Effecient using python for data structures and algorithms'},]
  const[abouts,setAbouts]=useState<any[]>(skills)
  
  const experience:any=[{name:'Computer Vision Intern at Ethiopian Artificial Intelligence Institute',description:'computer Vision Intern working on line and character detection.'},
    {name:'Machine Learning Intern at iCog', description:'Machine Learning Intern working on Deep learning methods.'},
    {name:'Tutoring',description:'A part time tutor for grade 12 students.'}
  ]
  const education:any=[{name:'Addis Ababa University',description:'Currently studying Electrical and Computer Engineering'},
    {name:'A2SV', description:'Data structures and Algorithms'},
    {name:'Google IT support',description:'IT support certification from google'}
  ]
  const buttonHandler=(variable:any)=>{
      setAbouts(variable);
  }
  return (
    <div className='flex mt-32 mx-40 h-screen '>
    <div className='w-3/5'>
        <img 
        src="https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg" 
        alt="Sample Ima" 
        className=" h-4/5"/>
    </div>
    <div className='space-y-10  px-20 ' >
        <div className='space-y-10 '>
           <p className='text-7xl font-bold '> About Me</p>
           <p className='text-2xl'> I am a fourth year Electical and Computer Engineering student. I am a junior developer and have experience in machine learning.</p>
        </div>
        <div className='flex flex-row space-x-20 text-2xl'>
            <button onClick={()=>buttonHandler(skills)}>Skills</button>
            <button onClick={()=>buttonHandler(experience)}>Experience</button>
            <button onClick={()=>buttonHandler(education)}>Education</button>
        </div>
        <div className='my-8'>
          { abouts.map((about:any)=>(
           <div  key={about.name} className='my-5'> 
            <div className='text-red-600 text-xl '> {about.name} </div>
            <div className='space-y-5 text-2xl font-light'> {about.description} </div>
            </div>
          ))}  
        </div>
    </div>
    </div>
  )
}

export default About