Weather App (Next.js)
Welcome to the Weather App frontend! This application allows users to search for weather updates in their city and view detailed forecasts.

Features
Search for weather by city name.
Toggle between Celsius and Fahrenheit.
View current weather details, including temperature, weather description, wind status, and humidity.
Forecast for the next three days.
Tech Stack
Framework: Next.js with TypeScript
Styling: TailwindCSS and RippleUI components
AJAX Requests: Fetch API
Setup Instructions
Clone the Repository:

bash
Copy code
git clone <repository-url>
cd weather-app
Install Dependencies:

bash
Copy code
npm install
Run the Development Server:

bash
Copy code
npm run dev
The app will be available at http://localhost:3000.

Build for Production:

bash
Copy code
npm run build
npm start
File Structure
pages/: Application pages, including the weather search interface.
components/: Reusable UI components built with RippleUI.
public/: Static assets like images or icons.
API Integration
This app fetches weather data from a Laravel backend that retrieves information from OpenWeather’s APIs. Ensure the backend is running before using the app.

Extras
TypeScript ensures type safety and fewer runtime errors.
Fully responsive design for mobile and desktop users.
Enjoy exploring the weather in your city! 🌤️
