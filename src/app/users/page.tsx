"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Simon() {
  const skills = [
    { name: 'Machine Learning', description: 'Supervised learning, Unsupervised learning' },
    { name: 'Software Development', description: 'Python, Java, C++, HTML, CSS' },
    { name: 'Data Structures and Algorithms', description: 'Efficient use of Python for data structures and algorithms' },
  ];

  const experience = [
    { name: ' REVIEWED: Computer Vision team leader at Ethiopian Artificial Intelligence Institute', description: 'Worked on line and character detection in computer vision projects.' },
    { name: 'Machine Learning developer at iCog', description: 'Developed deep learning models for various applications.' },
    { name: 'Tutoring', description: 'Part-time tutor for managment students, focusing on STEM subjects.' },
  ];

  const education = [
    { name: 'Addis Ababa University', description: 'B.Sc. in Electrical and Computer Engineering ' },
    { name: 'A2SV', description: 'Specialized training in Data Structures and Algorithms' },
    { name: 'Google IT Support', description: 'Certified in IT Support by Google' },
  ];

  const [abouts, setAbouts] = useState(skills);

  const buttonHandler = (variable: any) => {
    setAbouts(variable);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-blue-800 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-blue-200">CEO Profile</h1>
          <p className="text-center text-blue-300 mt-2 text-lg">
            Leading the organization with vision and innovation
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg"
              alt="CEO Profile"
              className="w-full max-w-md h-auto rounded-lg shadow-md"
            />
          </div>

          {/* About Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-blue-400">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Visionary CEO, brings over 20 years of leadership experience in technology and innovation. With a proven track record of steering high-growth companies to success, Also combines strategic insight with a passion for fostering creativity and collaboration. Commitment to empowering teams and embracing forward-thinking strategies continues to drive  mission to transform the future.
            </p>

            {/* Buttons for Skills, Experience, Education */}
            <div className="flex flex-row gap-4">
              <button
                onClick={() => buttonHandler(skills)}
                className={`px-4 py-2 rounded-md font-semibold text-lg transition-colors duration-200 ${
                  abouts === skills ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => buttonHandler(experience)}
                className={`px-4 py-2 rounded-md font-semibold text-lg transition-colors duration-200 ${
                  abouts === experience ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => buttonHandler(education)}
                className={`px-4 py-2 rounded-md font-semibold text-lg transition-colors duration-200 ${
                  abouts === education ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Education
              </button>
            </div>

            {/* Dynamic Content Display */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-inner">
              {abouts.map((about: any) => (
                <div key={about.name} className="mb-6">
                  <h3 className="text-xl font-semibold text-blue-300">{about.name}</h3>
                  <p className="text-lg text-gray-300 mt-2">{about.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-row justify-center gap-6">
          <Link
            href="/users/cfo"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            href="/users/hr"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200"
          >
            Hierarchy Management
          </Link>
          {/* <Link
            href="/users/profileEditing"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200"
          >
            Edit Profile
          </Link> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-200">
            &copy; 2025 Employee Hierarchy Management. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}