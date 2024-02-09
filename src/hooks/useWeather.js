
import { useEffect } from "react";
import { useState } from "react";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    tempereture: "",
    maxTemp: "",
    minTemp: "",
    humidity: "",
    cloud: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fatching weather data.",
      });

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      );
      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();

      const updateWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        tempereture: data?.main?.temp,
        maxTemp: data?.main?.temp_max,
        minTemp: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloud: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude,
      };
      setWeatherData(updateWeatherData)
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(()=>{
    setLoading({
        ...loading,
        state:true,
        message: "Finding Location..."
    })
    navigator.geolocation.getCurrentPosition(function(position){
        fetchWeatherData(position.coords.latitude,position.coords.longitude)
    })
  },[])
  return {
    weatherData,
    error,
    loading
  }
};

export default useWeather;



