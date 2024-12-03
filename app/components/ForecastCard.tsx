// app/components/ForecastCard.tsx
import React from 'react';
import Image from 'next/image';

interface ForecastData {
  location: string;
  temperature: number;
  description: string;
  icon: string;
  windSpeed: number;
  humidity: number;
  date: string;
  day: string;
}

interface ForecastCardProps {
  data: ForecastData;
  isCelsius: boolean;
}

const ForecastCard: React.FC<ForecastCardProps> = ({ data, isCelsius }) => {
  const temperature = isCelsius 
    ? data.temperature 
    : Math.round((data.temperature * 9/5) + 32);

  return (
    <div className="card bg-base-200 shadow-md">
      <div className="card-body">
        <h3 className="text-center">{data.day}</h3>
        <Image 
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} 
          alt={data.description} 
          width={50} 
          height={50} 
          className="mx-auto"
        />
        <p className="text-center">
          {temperature}° {isCelsius ? 'C' : 'F'}
        </p>
        <p className="text-center text-sm">{data.description}</p>
      </div>
    </div>
  );
};

export default ForecastCard;
