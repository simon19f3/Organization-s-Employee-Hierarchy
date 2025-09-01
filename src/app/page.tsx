"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaEnvelope, FaLinkedinIn, FaPhone} from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';

function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the purpose of registering an employee hierarchy?",
      answer: "Registering an employee hierarchy helps define clear roles, responsibilities, and reporting structures within the company, streamlining communication and decision-making."
    },
    {
      question: "How do I add a new employee to the hierarchy?",
      answer: "Use the 'Add Employee' feature to input the employee's name, description, and their parent in the hierarchy. The system will update the organizational structure automatically."
    },
    {
      question: "Can I update employee details after registration?",
      answer: "Yes, the 'Update Employee' feature allows you to modify employee names and other details, ensuring the hierarchy remains accurate."
    },
    {
      question: "Is the hierarchy data secure?",
      answer: "Yes, all data is stored in a secure database with role-based access controls to protect sensitive employee information."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-blue-800 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Employee Hierarchy Management System</h1>
          <p className="text-center text-blue-200 mt-2 text-xl">
            Streamline your organization’s structure with clarity and efficiency
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <h2 className="text-3xl font-semibold text-blue-400 mb-6">Manage Your Workforce Effectively</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our platform enables seamless management and visualization of your organization’s employee hierarchy, from CEO to entry-level roles. Define roles, track reporting lines, and ensure efficient operations with an intuitive interface.
            </p>
            <Link
              href="/users"
              className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200"
            >
              View CEO 
            </Link>
          </div>
          <div>
            
            <Image
        src="/photo-1504384308090-c894fdcc538d.avif"
        alt="Sample"
        width={500 }
        height={500}
        className="w-full h-auto rounded-lg shadow-md"
      />

          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-12 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-blue-400 mb-6 text-center">Our Mission</h2>
        <p className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
          To provide a seamless and efficient way to visualize and manage your organization’s structure, ensuring clarity in roles, responsibilities, and reporting lines for enhanced productivity and collaboration.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-blue-400 mb-6 text-center">Key Features</h2>
        <ul className="list-disc list-inside text-lg text-gray-300 max-w-2xl mx-auto space-y-4">
          <li>Visualize the employee hierarchy from CEO to entry-level positions.</li>
          <li>Manage employee roles and responsibilities with ease.</li>
          <li>Navigate through different levels of the organization seamlessly.</li>
          <li>Secure profile management for each employee.</li>
        </ul>
      </section>

      {/* News Section */}
      <section className="container mx-auto px-4 py-12 bg-gray-800">
        <h2 className="text-3xl font-semibold text-blue-400 mb-6 text-center">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-300">Interactive Hierarchy Tool Launched</h3>
            <p className="text-gray-400 mt-2">August 15, 2025</p>
            <p className="mt-4 text-gray-300">
              Our new interactive hierarchy visualization tool allows real-time editing and viewing of organizational charts, enhancing decision-making.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-300">Onboarding Automation Update</h3>
            <p className="text-gray-400 mt-2">July 20, 2025</p>
            <p className="mt-4 text-gray-300">
              Automated onboarding now integrates with HR systems, reducing manual data entry and improving accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-blue-400 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-inner">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-4 flex justify-between items-center text-blue-300 hover:bg-gray-700 transition-colors duration-200"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <span>{activeFaq === index ? '-' : '+'}</span>
              </button>
              {activeFaq === index && (
                <div className="p-4 text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-12 bg-blue-950 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-blue-300 mb-6 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-blue-200 mb-4">Office</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <FaLocationPin className="text-blue-200" />
                <p>Bole, 12th Street, Addis Ababa</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-200" />
                <p>+251 901 234 567</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-200" />
                <p>employeehierarchyhr@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <FaLinkedinIn className="text-blue-200" />
                <p>linkedin.com/in/employeehierarchy8a347373/</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-200 mb-4">Working Hours</h3>
            <div className="space-y-3 text-gray-300">
              <p>Mon-Fri: 8:30 AM - 6:00 PM</p>
              <p>Sat: 9:00 AM - 2:00 PM</p>
              <p>24/6 support available</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-200 mb-4">Quick Links</h3>
            <div className="space-y-3 text-gray-300">
              <Link href="/users/hr" className="block hover:text-blue-400">
                Manage Hierarchy
              </Link>
              <Link href="/users/cfo" className="block hover:text-blue-400">
                About Us
              </Link>
              <Link href="/users/contactUs" className="block hover:text-blue-400">
                Contact Support
              </Link>
            </div>
          </div>
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

export default Home;