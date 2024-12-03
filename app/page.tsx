'use client';

import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';

// Define interfaces for type safety
interface WeatherData {
  location: string;
  temperature: number;
  description: string;
  icon: string;
  windSpeed: number;
  humidity: number;
  date: string;
}

interface ForecastData extends WeatherData {
  day: string;
}

export default function Home() {
  const [city, setCity] = useState<string>('');
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData[]>([]);
  const [isCelsius, setIsCelsius] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!city) return;

    try {
      // Mock implementation - replace with actual API call
      const weatherData: WeatherData = {
        location: city,
        temperature: 25,
        description: 'Partly cloudy',
        icon: '02d',
        windSpeed: 5.5,
        humidity: 65,
        date: new Date().toLocaleDateString()
      };
      
      const forecastData: ForecastData[] = [
        {
          ...weatherData,
          day: 'Mon'
        },
        {
          ...weatherData,
          day: 'Tue'
        },
        {
          ...weatherData,
          day: 'Wed'
        }
      ];
      
      setCurrentWeather(weatherData);
      setForecast(forecastData);
      setError(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      setCurrentWeather(null);
      setForecast([]);
    }
  };

  const toggleUnit = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex mb-4">
        <input 
          type="text" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name" 
          className="input input-bordered w-full max-w-xs mr-2"
        />
        <button onClick={handleSearch} className="btn btn-primary">
          Search
        </button>
      </div>

      {error && (
        <div role="alert" className="alert alert-error">
          <span>{error}</span>
        </div>
      )}

      {currentWeather && (
        <WeatherCard 
          data={currentWeather} 
          isCelsius={isCelsius} 
          toggleUnit={toggleUnit}
        />
      )}

      {forecast.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mt-4">
          {forecast.map((day, index) => (
            <ForecastCard 
              key={index} 
              data={day} 
              isCelsius={isCelsius} 
            />
          ))}
        </div>
      )}
    </div>
  );
}
