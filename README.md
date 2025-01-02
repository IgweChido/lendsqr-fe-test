# react_boiler_plate

React boiler plate to easily setup projects

## Folder structure

/src
├── /assets
├── /components
├── /services
├── /store
├── /utils
├── /views/pages
├── /routes
├── index.js
└── App.js

### Components

Component will have all the components which are reuseable anywhere in website. Like - Button - Cards - DropDownBtn - inputs - Modal - Popups - Toast - Tooltip - Text/Heading/Title - Skeleton - Spiner/Loader

#### Services

In Services we put configuration file, like when you are using google firebase then your firebase config file will be in services folder.

The "services" folder is often used to contain code related to making \*API requests and managing data from external sources. This folder helps separate the concerns of your application by isolating data fetching and manipulation logic from the components that render the UI.

### Store

"store" folder in a React application typically refers to a directory where you manage your application's state using state management libraries like'

### Routes

Router will have all the Routes in website. Where we are going and where we want to go.

### Utils

Whether or not your project needs a utils folder is up to you, but I think there are usually some global utility functions, like validation and conversion, that could easily be used across multiple sections of the app. If you keep it organized - not just having one helpers.js file that contains thousands of functions - it could be a helpful addition to the organization of your project.

### Partials

Partials are reusable components or sections of code within a web development context. They allow you to break down your HTML (or other templating language) files into smaller, more manageable pieces. These smaller pieces can then be included or inserted into multiple pages or templates
