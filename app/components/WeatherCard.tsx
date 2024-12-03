export default function WeatherCard({ weather }: { weather: any }) {
  return (
    <div className="bg-white p-6 rounded-md shadow-lg max-w-md mx-auto text-center">
      <h2 className="text-xl font-bold text-gray-800">
        {weather.city}, {weather.date}
      </h2>
      <div className="my-4">
        <img src={weather.icon} alt="Weather Icon" className="mx-auto" />
        <p className="text-3xl font-semibold text-gray-900">{weather.temp}°C</p>
        <p className="text-gray-600 capitalize">{weather.description}</p>
      </div>
      <div className="flex justify-between text-sm text-gray-700 mt-4">
        <div className="flex items-center gap-2">
          <span role="img" aria-label="Wind">
            💨
          </span>
          <p>Wind: {weather.wind} km/h</p>
        </div>
        <div className="flex items-center gap-2">
          <span role="img" aria-label="Humidity">
            💧
          </span>
          <p>Humidity: {weather.humidity}%</p>
        </div>
      </div>
    </div>
  );
}
