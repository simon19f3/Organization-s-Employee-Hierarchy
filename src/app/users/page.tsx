"use client";
import React, { useState, useEffect, useMemo } from 'react'; // Import useMemo
import Link from 'next/link';
import Image from 'next/image';

// Define interface for About items (Skills, Experience, Education)
interface About {
  name: string;
  description: string;
}

export default function Simon() {
  // Memoize these arrays to ensure they are stable across renders
  const skills: About[] = useMemo(() => [
    { name: 'Machine Learning', description: 'Supervised learning, Unsupervised learning' },
    { name: 'Software Development', description: 'Python, Java, C++, HTML, CSS' },
    { name: 'Data Structures and Algorithms', description: 'Efficient use of Python for data structures and algorithms' },
  ], []); // Empty dependency array means this array is created once

  const experience: About[] = useMemo(() => [
    { name: 'Computer Vision team leader at Ethiopian Artificial Intelligence Institute', description: 'Worked on line and character detection in computer vision projects.' },
    { name: 'Machine Learning developer at iCog', description: 'Developed deep learning models for various applications.' },
    { name: 'Tutoring', description: 'Part-time tutor for management students, focusing on STEM subjects.' },
  ], []);

  const education: About[] = useMemo(() => [
    { name: 'Addis Ababa University', description: 'B.Sc. in Electrical and Computer Engineering' },
    { name: 'A2SV', description: 'Specialized training in Data Structures and Algorithms' },
    { name: 'Google IT Support', description: 'Certified in IT Support by Google' },
  ], []);

  const [abouts, setAbouts] = useState<About[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Set initial state on client-side after hydration
  useEffect(() => {
    setAbouts(skills);
    setIsClient(true);
  }, [skills]); // Now 'skills' is a stable reference due to useMemo, so it's safe here

  const buttonHandler = (variable: About[]) => {
    setAbouts(variable);
  };

  // Default className for server-side rendering
  const getButtonClassName = (section: About[]) => {
    if (!isClient) {
      return `px-4 py-2 rounded-md font-semibold text-lg transition-colors duration-200 ${
        section === skills ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
      }`;
    }
    return `px-4 py-2 rounded-md font-semibold text-lg transition-colors duration-200 ${
      abouts === section ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
    }`;
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
            <Image
              src="/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg"
              alt="CEO Profile"
              width={400}
              height={400}
              className="w-full max-w-md h-auto rounded-lg shadow-md object-cover"
            />
          </div>

          {/* About Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-blue-400">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-md">
              Visionary CEO with over 20 years of leadership experience in technology and innovation. With a proven track record of steering high-growth companies to success, combines strategic insight with a passion for fostering creativity and collaboration. Commitment to empowering teams and embracing forward-thinking strategies continues to drive our mission to transform the future.
            </p>

            {/* Buttons for Skills, Experience, Education */}
            <div className="flex flex-row gap-4">
              <button
                onClick={() => buttonHandler(skills)}
                className={getButtonClassName(skills)}
              >
                Skills
              </button>
              <button
                onClick={() => buttonHandler(experience)}
                className={getButtonClassName(experience)}
              >
                Experience
              </button>
              <button
                onClick={() => buttonHandler(education)}
                className={getButtonClassName(education)}
              >
                Education
              </button>
            </div>

            {/* Dynamic Content Display */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-inner">
              {isClient && abouts.map((about: About) => (
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