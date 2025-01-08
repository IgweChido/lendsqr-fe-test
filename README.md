# Frontend Assessment Project

## Table of Contents

1. Tech Stack
2. Features
3. Project Structure
4. Setup and Installation
5. Mock API
6. Testing
7. Media Responsiveness
8. Conclusion

## 1. Tech Stack

- **Framework**: React with TypeScript
- **Styling**: SCSS
- **Data Storage**: LocalStorage
- **API Mocking**: Mocky.io
- **State Management**: Redux Toolkit
- **UI Library**: Ant Design
- **Testing**: Jest

## 2. Features

- Pixel-perfect implementation matching the Figma design
- Fully responsive for mobile and desktop screen sizes
- 5 mock user records loaded from a mock API
- User details fetched with Redux Toolkit
- Unit tests covering positive and negative scenarios

## 3. Project Structure

/src
├── /assets
├── /components
├── /services
├── /store
├── /utils
├── /views/pages
├── /routes
├── index.ts
└── App.ts

## 4. Setup and Installation

### **_Clone the repository:_**

- git clone https://github.com/IgweChido/lendsqr-fe-test
- cd lendsqr-fe-test

### **_Install dependencies:_**

- npm install

### **_Run the application:_**

- npm run dev

### **_Run tests:_**

- npm test

## 5. Mock API

The mock data includes 5 user records generated using Mocky.io
The major APIs called where:

- Get Users
- Get Dashboard Analytics
- Get User Details

## Testing

In our testing strategy, we use Jest for unit tests to ensure our code behaves as expected without relying on real network requests. Instead of making actual HTTP requests, we mock the axios.get method to simulate the responses from API calls.

## Media Responsiveness

Responsive breakpoints for screen sizes:

- **Desktop**: ≥ 1440px
- **Tablet**: 768px - 1439px
- **Mobile**: < 768px

## Conclusion

This project demonstrates expertise in building responsive, scalable frontend solutions with modern tools and techniques while adhering to best practices in code quality and testing.
