Employee Hierarchy Management System
Overview
This is a Next.js-based web application designed to manage and visualize the organizational hierarchy of employees. The platform allows users to view the structure from CEO to entry-level positions, manage employee roles, and access individual employee profiles. The application features a clean, modern UI with responsive design and integrates icons from react-icons for an enhanced user experience.
Features

Visualize the organizational hierarchy from CEO to entry-level employees.
Manage employee roles and responsibilities.
Easy navigation through different levels of the organization.
Profile management for each employee.
Responsive design with a grid layout for various screen sizes.
Contact information, office details, and news updates.

Technologies Used

Next.js: React framework for server-side rendering and static site generation.
React: For building interactive UI components.
React Icons: For including icons like FaLinkedinIn, FaPhone, etc.
Tailwind CSS: For styling the application with utility-first CSS.
Unsplash: For placeholder images.

Prerequisites
Before setting up the project, ensure you have the following installed:

Node.js (v16 or higher)
npm or yarn
Git

Setup Instructions

Clone the Repository:
git clone <repository-url>
cd next_learning


Install Dependencies:Using npm:
npm install

Or using yarn:
yarn install


Run the Development Server:
npm run dev

Or with yarn:
yarn dev

The application will be available at http://localhost:3000.

Build for Production:
npm run build

Then start the production server:
npm start



Project Structure

pages/index.js: The main homepage component (Homepage) containing the UI for the Employee Hierarchy Management System.
public/: Static assets like images .
styles/: Global styles or Tailwind CSS configuration.
components/: Reusable React components .

Usage

Navigate to the homepage (/) to view the introduction, mission, key features, and contact information.
Click the "CEO" link to access the /users page (ensure this page exists or implement it).
The footer section includes office details, news updates, and working hours.

Pushing to GitHub
To push updates to GitHub:

Initialize Git (if not already done):git init


Stage and commit changes:git add .
git commit -m "Update project"


Link to your GitHub repository:git remote add origin <repository-url>


Push to the main branch:git push -u origin main

If you encounter a 408 timeout error, increase the Git buffer size:git config --global http.postBuffer 524288000

Then retry the push.

Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit (git commit -m "Add feature").
Push to the branch (git push origin feature-branch).
Open a pull request on GitHub.

License
This project is licensed under the MIT License.
Contact
For inquiries, reach out via:

Email: simonassfaw@gmail.com

