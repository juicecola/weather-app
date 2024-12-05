"use client";

import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";

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
  const [city, setCity] = useState<string>("");
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(
    null
  );
  const [forecast, setForecast] = useState<ForecastData[]>([]);
  const [isCelsius, setIsCelsius] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!city) return;

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/weather?city=${city}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await response.json();

      setCurrentWeather({
        location: `${data.location.city}, ${data.location.country}`,
        temperature: data.current.temperature,
        description: data.current.description,
        icon: data.current.icon,
        windSpeed: data.current.wind_speed,
        humidity: data.current.humidity,
        date: new Date().toLocaleDateString(),
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const forecastData = data.forecast.map((day: any) => ({
        location: `${data.location.city}, ${data.location.country}`,
        temperature: day.temperature,
        description: day.description,
        icon: day.icon,
        windSpeed: data.current.wind_speed,
        humidity: data.current.humidity,
        date: day.date,
        day: day.day,
      }));

      setForecast(forecastData);
      setError(null);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
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
            <ForecastCard key={index} data={day} isCelsius={isCelsius} />
          ))}
        </div>
      )}
    </div>
  );
}
