![Frontend Mentor](https://img.shields.io/badge/Frontend%20Mentor-Challenge-4BC0F0?logo=frontendmentor&logoColor=white) ![#11](https://img.shields.io/badge/%2311-red) [![Live Preview](https://img.shields.io/badge/Live-Preview-green)](https://svitlanarudova.github.io/time-tracking-dashboard/)

# Frontend Mentor - Time tracking dashboard
![Design preview for the Meet landing page](./preview.jpg)

## Project Overview 📋 
This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw).
An interactive dashboard with the ability to switch between daily, weekly, and monthly statistics.
All data is loaded from an external JSON file, making the project dynamic and closer to real-world API use cases.

## 🛠️ Technologies
- HTML5
- CSS Grid
- JavaScript (DOM, Fetch API, Promises, JSON)

## 🎯 What I Learned
### 1. Working with Promises and async operations
I learned how to use ```jsfetch()``` and handle asynchronous data loading with ```js.then()``` chains. Understanding that JavaScript doesn't wait for the response and continues executing code was a key insight.

### 2. JSON data handling
I successfully fetched data from a JSON file, parsed it, and mapped it to the correct DOM elements using ```jsfind()``` and ```jsforEach()``` methods.

### 3. Dynamic DOM manipulation
I implemented a system that updates multiple cards dynamically based on user interaction, changing both current and previous time values.

### 4. Event handling
I built an interactive navigation system where clicking buttons switches between daily, weekly, and monthly views, with proper active state management.

### 5. Responsive Grid Layout
I created a flexible CSS Grid layout that can accommodate any number of cards, not just the initial 7 items. 
The grid adapts automatically when new cards are added, making the design scalable and maintainable.

### 6. Clean code structure
I organized the code into reusable functions ```js(render(), jspreviousLabel())``` that separate concerns and make the application easier to understand and modify.


## 💬 Feedback Welcome!
I'm still learning and would really appreciate any comments, suggestions, or feedback on my code! Feel free to point out improvements or best practices I might have missed. Every bit of feedback helps me grow as a developer! 🚀
