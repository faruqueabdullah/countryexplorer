🌍 Country Explorer App

A responsive web application that displays country information by fetching data from a public API and presenting it in a clean card-based UI.

🚀 Live Demo
👉 https://your-live-link.vercel.app

📌 Features
🌎 Browse countries by region
📦 Fetch data dynamically using API
⚡ Optimized data fetching using Promise.all
🧾 Display country details in card format
🔍 Search and filter functionality (if you added it)
📱 Fully responsive design
🛠️ Tech Stack
Frontend: React JS
Styling: CSS / Tailwind CSS
Build Tool: Vite
API: REST Countries API
Concepts Used: useEffect, useState, API handling, Promise.all
⚡ Key Implementation Detail

The default API endpoint to fetch all countries was not working reliably.
To solve this, I implemented a custom approach:

Fetched countries region-wise (Asia, Europe, Africa, etc.)
Used Promise.all() to run multiple API requests in parallel
Combined all responses and rendered them efficiently

👉 This approach improved:
Reliability of data fetching
Performance using parallel requests

🧠 What I Learned
While building this project, I practiced:

Handling multiple API requests using Promise.all

Managing asynchronous operations in React

State management using useState and useEffect

Working with dynamic data rendering

Error handling in API calls

Writing cleaner and more optimized logic

