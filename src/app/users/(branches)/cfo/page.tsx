"use client";
import React, { useState } from 'react';

function CompanyPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the purpose of registering an employee hierarchy?",
      answer: "Registering an employee hierarchy helps define clear roles, responsibilities, and reporting structures within the company. It streamlines communication, task delegation, and decision-making processes, ensuring efficient operations and transparency."
    },
    {
      question: "How do I add a new employee to the hierarchy?",
      answer: "To add a new employee, navigate to the 'Add Employee' section, provide the employee's name, description, and their parent in the hierarchy, then submit the form. The system will automatically integrate them into the organizational structure."
    },
    {
      question: "Can I update an employee's details after registration?",
      answer: "Yes, you can update an employee's details using the 'Update Employee' feature. Select the employee, enter the new name or other details, and submit to reflect changes in the hierarchy."
    },
    {
      question: "How is the hierarchy data stored and secured?",
      answer: "Employee hierarchy data is stored in a secure database with access controls. Only authorized personnel can view or modify the data, ensuring compliance with privacy policies and regulations."
    },
    {
      question: "Who can access the employee hierarchy information?",
      answer: "Access is restricted to HR personnel, managers, and authorized administrators. Permissions are set based on roles to maintain confidentiality and data integrity."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-blue-800 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Employee Hierarchy Management</h1>
          <p className="text-center text-blue-200 mt-2">
            Streamlining organizational structure for efficiency and clarity
          </p>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-blue-400 mb-6">About Our Company</h2>
        <div className="bg-gray-800 rounded-lg shadow-inner p-6">
          <p className="text-lg leading-relaxed">
            Our company is dedicated to optimizing organizational workflows through a robust employee hierarchy management system. We provide tools to register, manage, and visualize employee hierarchies, ensuring clear lines of authority and responsibility. Our platform supports businesses of all sizes, from startups to enterprises, by offering a user-friendly interface to define roles, track reporting structures, and enhance operational efficiency. With a focus on transparency and scalability, we empower HR teams and managers to maintain an organized and dynamic workforce.[](https://www.nibusinessinfo.co.uk/content/hierarchical-organisational-structure)[](https://www.lucidchart.com/blog/types-of-organizational-structures)
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Key features include secure employee data management, real-time hierarchy updates, and integration with HR systems to streamline onboarding and role assignments. Our mission is to simplify complex organizational structures and foster a culture of collaboration and accountability.
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="container mx-auto px-4 py-12 bg-gray-800">
        <h2 className="text-3xl font-semibold text-blue-400 mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-300">New Hierarchy Visualization Tool Launched</h3>
            <p className="text-gray-300 mt-2">August 15, 2025</p>
            <p className="mt-4">
              We’ve introduced an interactive hierarchy visualization tool that allows managers to view and edit the organizational chart in real time. This feature enhances decision-making and provides a clear overview of team structures.[](https://www.mydraw.com/diagrams-organizational-chart)
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-300">Automated Employee Onboarding Update</h3>
            <p className="text-gray-300 mt-2">July 20, 2025</p>
            <p className="mt-4">
              Our latest update automates employee onboarding by integrating hierarchy registration with HR systems, reducing manual entry and ensuring accuracy.[](https://www.origamiconnect.com/blog/how-to-create-a-killer-hr-portal-sharepoint-site-3-examples-and-templates)
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-300">Expanded Role Customization</h3>
            <p className="text-gray-300 mt-2">June 10, 2025</p>
            <p className="mt-4">
              We’ve added support for custom role designations, allowing companies to tailor titles and responsibilities to their unique needs, enhancing flexibility in hierarchy management.[](https://www.kanakkupillai.com/learn/the-hierarchy-of-designations-in-a-private-company/)
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-300">Security Enhancements for Hierarchy Data</h3>
            <p className="text-gray-300 mt-2">May 5, 2025</p>
            <p className="mt-4">
              New security protocols have been implemented to protect employee hierarchy data, ensuring compliance with industry standards and safeguarding sensitive information.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-blue-400 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
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

export default CompanyPage;