"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

import { fetchWeatherData } from "./utils/api";

export default function Home() {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    try {
      setError(null);
      const data = await fetchWeatherData(city);
      setWeather({
        city: data.name,
        date: new Date().toLocaleDateString(),
        temp: data.main.temp,
        description: data.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        wind: data.wind.speed,
        humidity: data.main.humidity,
      });
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}
