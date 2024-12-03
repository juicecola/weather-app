export const fetchWeatherData = async (city: string) => {
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const API_URL = process.env.NEXT_PUBLIC_WEATHER_API_URL;
  
    const response = await fetch(`${API_URL}weather?q=${city}&units=metric&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error("City not found!");
    }
    return response.json();
  };
  