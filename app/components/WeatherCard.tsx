export default function WeatherCard({ weather }: { weather: any }) {
  return (
    <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold">
        {weather.city}, {weather.date}
      </h2>
      <div className="flex items-center my-4">
        <img src={weather.icon} alt="Weather Icon" />
        <div className="ml-4">
          <p className="text-2xl font-bold">{weather.temp}°C</p>
          <p className="text-gray-600">{weather.description}</p>
        </div>
      </div>
      <div className="flex justify-between text-sm text-gray-700">
        <p>Wind: {weather.wind} km/h</p>
        <p>Humidity: {weather.humidity}%</p>
      </div>
    </div>
  );
}
