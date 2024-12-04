Frontend: Weather App
Overview
This is the frontend for the Weather App, built using Next.js and TypeScript. The app allows users to search for weather updates and view detailed forecasts in a visually appealing interface.

Features
Search weather data by city.
Toggle between Celsius and Fahrenheit.
Display:
Current temperature and weather conditions.
Forecast for the next three days.
Wind and humidity details.
Tech Stack
Framework: Next.js with TypeScript
Styling: TailwindCSS and RippleUI
AJAX Requests: Fetch API
Setup
Clone the Repository:

bash
Copy code
git clone https://github.com/juicecola/weather-app
cd weather-app
Install Dependencies:

bash
Copy code
npm install
Run the Development Server:

bash
Copy code
npm run dev
Open http://localhost:3000 in your browser.

Build for Production:

bash
Copy code
npm run build
npm start
API Integration
The frontend fetches weather data from the Laravel-based backend API, which communicates with OpenWeather APIs. Ensure the backend is running and accessible.

File Structure
pages/: Contains Next.js pages.
components/: Reusable UI components.
public/: Static assets.
Extras
Fully responsive design for various devices.
TypeScript for type safety and maintainable code.
