import { useContext } from "react";
import Pin from "../../assets/pin.svg";
import { weatherContext } from "../../context";
import { getFormattedDate } from "../../utils/date-utils";

import RainIcon from "../../assets/rainy.svg"
import CloudIcon from "../../assets/cloud.svg"
import ClearIcon from "../../assets/sun.svg"
import SnowIcon from "../../assets/icons/snow.svg"
import ThunderIcon from "../../assets/thunder.svg"
import HazeIcon from "../../assets/haze.svg"
const WeatherHeadline = () => {
  const { weatherData } = useContext(weatherContext);
  const { climate, location, tempereture, time } = weatherData;

  const weatherCondition=(climate)=>{
    switch(climate){
      case "Rain":
        return RainIcon;
      case "Clouds":
        return CloudIcon;
      case "Clear":
        return ClearIcon;
      case "Snow":
        return SnowIcon;
      case "Thunder":
        return ThunderIcon;
      case "Fog":
        return HazeIcon;
      case "Haze":
        return HazeIcon;
      case "Mist":
        return HazeIcon;
      default:
        return ClearIcon;
    }
  }

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={weatherCondition(climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(tempereture)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={Pin} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDate(time, "time", false)} -{" "}
        {getFormattedDate(time, "date", false)}
      </p>
    </div>
  );
};

export default WeatherHeadline;
