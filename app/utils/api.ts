export const fetchWeatherData = async (city: string) => {
    const response = await fetch(`http://127.0.0.1:8000/api/weather?city=${city}`);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    return await response.json();
  };
  