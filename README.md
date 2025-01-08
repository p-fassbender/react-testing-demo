# React Testing Demo
An exploration of the basics of Jest combined with React Testing Library and how to use them.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Introduction
This project is focused on learning and understanding React Testing with Jest. Topics covered include:
- Writing Tests
- Test Driven Development
- Filtering and Grouping Tests
- Assertions
- Matchers
- Queries (getBy.., queryBy.., findBy..)
- Query Multiple Elements (getAllBy.., queryAllBy.., findAllBy..)
- Debugging
- User Interactions (mouse actions, keyboard actions)
- Testing Providers
- Custom Render Functions
- Custom Hooks (renderHook)
- Act()

## Installation
1. **Ensure Node.js is installed**:
    - Before starting, make sure you have [Node.js](https://nodejs.org/) installed on your system. If you don't have it, download and install the latest stable version.
    - To verify if Node.js is installed, open your terminal or command prompt and run:
      ```bash
      node -v
      ```
    - If the terminal returns the version number, you're good to go! If not, please install Node.js from the official website.
2. **Download the Project Files**:
    - You can either download the files directly from this repository, or you can clone the project using Git.
    - **Option 1:** Download as a ZIP file:
      - Go to the GitHub repository.
      - Click on the green **Code** button and select **Download ZIP**.
      - Extract the ZIP file to your local machine.
    - **Option 2:** Clone the repository using Git:
      ```bash
      git clone https://github.com/p-fassbender/react-testing-demo.git
      ```
3. **Install project dependencies**:
    - Navigate to the project directory:
      ```bash
      cd react-testing-demo
      ```
    - Run the following command to install the required dependencies:
      ```bash
      npm install
      ```
4. **Run the development server**:
    - After the dependencies are installed, start the development environment by running:
      ```bash
      npm run dev
      ```
Your project should now be running locally. Open your browser and go to `http://localhost:5173` (or the appropriate URL) to view it.

## Usage
1. **Install the project** by following the installation instructions.
2. **Open the project in your code editor**:
    - Launch your preferred code editor (e.g., Visual Studio Code, Sublime Text, Atom).
    - Navigate to the project folder and open it.
3. **Explore or modify the project** by editing `App.jsx` or any of the `*.test.jsx` file(s) in the components folder file. You can experiment with different aspects of the project by making changes here.
4. **Preview your changes**:
    - After editing the `*.test.jsx` file(s), simply view the browser to see the changes reflected.
5. **Run Tests**:
    - To run all tests once, execute the following command in your terminal:
      ```bash
      npm run test
      ```
6. **Continuous Test Watching**:
    - To continuously watch for file changes and rerun tests related to the modified files, use the following command:
      ```bash
      npm run watch
      ```
This way, you can test the application and make sure it functions as expected while developing, with immediate feedback from the test results.

## Acknowledgments
This project was built following a YouTube tutorial by [Codevolution](https://www.youtube.com/playlist?list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd). 
Thank you Vishwas for providing such an insightful and helpful guide!

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
