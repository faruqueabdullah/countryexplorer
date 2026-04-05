🌍 Country Explorer App

A modern and responsive web application that allows users to explore countries around the world with detailed information, built using React and real-time API data.

🚀 Live Demo

👉 https://countryexplorer-alpha.vercel.app/

📌 Features
🌎 Browse countries by region (Asia, Africa, Europe, Americas, Oceania)
🔍 Search countries by name, region, or capital
📦 Dynamic data fetching from API
⚡ Optimized parallel API requests
🧾 Clean and reusable card-based UI
📱 Fully responsive for all devices
❌ Graceful error handling and loading states
🛠️ Tech Stack
Frontend: React JS
Styling: CSS / Tailwind CSS
Build Tool: Vite
API: REST Countries API
⚡ Key Implementation Details

The default API endpoint for fetching all countries was not reliable, which caused inconsistent data loading.

✅ Solution Implemented:
Fetched countries region-wise:
Asia
Africa
Europe
Americas
Oceania
Used Promise.allSettled() to:
Run all API requests in parallel ⚡
Handle partial failures gracefully ❌➡️✅
Combined all successful responses into a single flattened array using flatMap()
🚀 Benefits:
Improved reliability of data fetching
Better user experience with partial data rendering
Optimized performance using parallel requests
🧠 What I Learned

While building this project, I gained hands-on experience with:

Handling multiple API requests using Promise.allSettled()
Managing asynchronous operations in React
State management using useState and useEffect
Data transformation using map(), flat(), and flatMap()
Building reusable UI components
Implementing search and filtering logic
Writing cleaner and optimized code
Debugging real-world issues like duplicate state updates