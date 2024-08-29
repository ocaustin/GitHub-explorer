# GitHub Explorer

## Overview

**GitHub Explorer** is a web application that allows users to search for GitHub profiles and view detailed information about them. The application fetches user data from the GitHub API and displays profile details, repositories, and recent commits.

## Features

- **User Search Box**: Search for GitHub users by their username.
- **User Details**: View the user's profile picture, bio, location, and public repositories.
- **Repository Details**: See repository details including creation date, last commit date, and description.
- **Recent Commits**: Display the last 5 commits for each repository.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js with Express
- **API**: GitHub API
- **Styling**: Custom CSS
- **Security**: Helmet for Express.js

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ocaustin/GitHub-explorer.git
   cd GitHub-explorer
Install Dependencies
For the backend:


cd backend
npm install
For the frontend:


cd ../client
npm install
Run the Backend Server
Navigate to the backend directory and start the server:


cd backend
npm start
The server will run on http://localhost:4000.
Run the Frontend Application
In a new terminal, navigate to the client directory and start the React application:


cd ../client
npm start
The frontend will be available at http://localhost:3000.
Usage

Open your browser and go to http://localhost:3000.
Enter a GitHub username in the search box and click "Search."
View the user details including profile picture, bio, location, and repositories.
Click on repository links to view more details and recent commits.
File Structure

java

GitHub-explorer/
│
├── backend/
│   ├── node_modules/
│   ├── server.js
│   └── package.json
│
├── client/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── UserSearch.js
│   ├── package.json
│   └── README.md
│
└── README.md
Testing

Frontend
Run the frontend tests using:


cd client
npm test
Backend
Run the backend tests using:


cd backend
npm test
Security

The application uses Helmet to secure the Express server.

Deployment

For deploying the application:

Build the React application:

cd client
npm run build
Ensure that the build directory is served by your production server.
Contribution

If you would like to contribute to this project:

Fork the repository.
Create a new branch for your feature or fix.
Make your changes and test thoroughly.
Submit a pull request describing your changes.
License

This project is licensed under the MIT License.

Contact

For any questions or issues, please contact me at ocaustin@example.com.

Thank you for using GitHub Explorer!


### Key Sections:

- **Overview**: Provides a brief description of the project.
- **Features**: Lists the key features of the application.
- **Technologies Used**: Outlines the technologies used in the project.
- **Getting Started**: Instructions for setting up and running the project.
- **Usage**: Describes how to use the application once it's running.
- **File Structure**: Shows the structure of the project directory.
- **Testing**: Instructions for running tests.
- **Security**: Notes on how security is handled.
- **Deployment**: Guidance for deploying the application.
- **Contribution**: How others can contribute to the project.
- **License**: Information about the project's license.
- **Contact**: Provides a way to reach out for questions or issues.

Feel free to adjust any sections to better fit your specific project needs.
