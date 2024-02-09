import tempMax from "../../assets/icons/temp-max.svg"
import tempMin from "../../assets/icons/temp-min.svg"
import Humidity from "../../assets/icons/humidity.svg"
import Cloud from "../../assets/icons/cloud.svg"
import Wind from "../../assets/icons/wind.svg"
import { useContext } from "react"
import { weatherContext } from "../../context"
const WeatherCondition = () => {
    const {weatherData} = useContext(weatherContext);
    const {maxTemp, minTemp, humidity, cloud, wind,climate} = weatherData;
    console.log("-------------",maxTemp, minTemp, humidity, cloud, wind,climate)
  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        The climate is <u>{climate}</u>
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(maxTemp)}°</p>
            <img src={tempMax} alt="temp-max" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(minTemp)}°</p>
            <img src={tempMin} alt="temp-min" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humadity</span>
          <div className="inline-flex space-x-4">
            <p>{humidity}%</p>
            <img src={Humidity} alt="humidity" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{cloud}%</p>
            <img src={Cloud} alt="cloudy" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(wind)}km/h</p>
            <img src={Wind} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WeatherCondition;
