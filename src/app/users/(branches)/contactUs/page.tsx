"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

function Contacts() {
  const [formData,setFormData] =useState<FormData>({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState<FormStatus>("idle")

  const handleSubmit = async(e:React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setStatus("success");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus("error");
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData( prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    

  }  

   return (
    <div className='container max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-10 md:py-20'>
    <h1 className='text-3xl md:text-4xl font-bold mb-12 md:mb-20 text-center'>Contact Us</h1>
    
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16'>
        {/* Left Column: Contact Info */}
        <div className='space-y-6 md:space-y-8'>
            <h2 className='text-2xl font-semibold'>Get in Touch</h2>
            <p className='text-secondary md:w-3/4'>Feel free to reach out for collaborations, inquiries, or just to say hello!</p>
            <div className='space-y-6'>
                <div className='flex items-center gap-4'>
                    <FaEnvelope className='w-6 h-6 text-yellow-500' />
                    <div>
                        <h3 className='font-semibold'>Email:</h3>
                        <Link href="mailto:simonassfaw@gmail.com" className='text-secondary hover:text-primary break-all'>employeehierarchyhr@gmail.com</Link>
                    </div>
                </div>
                
                <div className='flex items-center gap-4'>
                    <FaPhone className='w-6 h-6 text-blue-500' />
                    <div>
                        <h3 className='font-semibold'>Phone:</h3>
                        <Link href="tel:+251 902511249" className='text-secondary hover:text-primary'>+251 901 234 567</Link>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <FaLinkedin className='w-6 h-6 text-blue-500' />
                    <div>
                        <h3 className='font-semibold'>LinkedIn:</h3>
                        <Link href="https://www.linkedin.com/in/employeehierarchy-98a347373/" className='text-secondary hover:text-primary break-all'>linkedin.com/in/employeehierarchy8a347373/</Link>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <FaMapMarkerAlt className='w-6 h-6 text-green-500' />
                    <div>
                        <h3 className='font-semibold'>Location:</h3>
                        <p className='text-secondary'>Bole, 12th Street, Addis Ababa</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className='bg-dark dark:bg-dark/50 p-6 rounded-lg shadow-md bg-gray-900'>
            <h2 className='text-2xl font-semibold mb-6'>Send a Message</h2>
            <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                    <label htmlFor='name' className='block text-sm font-medium mb-2'>Name</label>
                    <input required value={formData.name} onChange={handleChange} type="text" id="name" name='name' placeholder="Enter your name" className='text-white w-full px-4 py-2 placeholder:text-white/50 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-700 dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none'  />
                </div>
                <div>
                    <label htmlFor='email' className='block text-sm font-medium mb-2'>Email</label>
                    <input required value={formData.email} onChange={handleChange} type="email" id="email" name='email' placeholder="Enter your email" className='text-white w-full px-4 py-2 placeholder:text-white/50 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-700 dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none'  />
                </div>
                <div>
                    <label htmlFor='message' className='block text-sm font-medium mb-2'>Message</label>
                    <textarea value={formData.message} onChange={handleChange} required id="message" name='message' rows={4} placeholder="Type your message here" className='text-white w-full px-4 py-2 placeholder:text-white/50 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-700 dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none'></textarea>
                </div>
                <button type="submit" className='w-full btn btn-primary bg-blue-600 text-white py-3 rounded-md hover:bg-red-700 transition-colors duration-300'>
                    {status === "loading" ? "Sending..." : "Send Message"} 
                </button>
                {status === "success" && (<p className='text-green-500 mt-4'>Message sent successfully!</p>)}
                {status === "error" && (<p className='text-red-500 mt-4'>Failed to send message. Please try again later.</p>)}             
            </form>
        </div>
    </div>  
</div>
   )
}

export default Contacts;