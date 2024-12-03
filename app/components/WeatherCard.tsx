import React from 'react';
import Image from 'next/image';

interface WeatherData {
  location: string;
  temperature: number;
  description: string;
  icon: string;
  windSpeed: number;
  humidity: number;
  date: string;
}

interface WeatherCardProps {
  data: WeatherData;
  isCelsius: boolean;
  toggleUnit: () => void;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data, isCelsius, toggleUnit }) => {
  const temperature = isCelsius 
    ? data.temperature 
    : Math.round((data.temperature * 9/5) + 32);

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{data.location}</h2>
          <button onClick={toggleUnit} className="btn btn-xs">
            {isCelsius ? '°C' : '°F'}
          </button>
        </div>
        <p>{data.date}</p>
        <div className="flex items-center">
          <Image 
            src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} 
            alt={data.description} 
            width={100} 
            height={100} 
          />
          <div>
            <p className="text-4xl font-bold">
              {temperature}° {isCelsius ? 'C' : 'F'}
            </p>
            <p>{data.description}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div>
            <p>Wind Status</p>
            <p>{data.windSpeed} m/s</p>
          </div>
          <div>
            <p>Humidity</p>
            <p>{data.humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
