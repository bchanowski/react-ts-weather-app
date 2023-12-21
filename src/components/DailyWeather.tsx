import { useEffect, useState } from "react";
import { DailyWeatherDataT } from "../utils/types";
import {
  FutureDataContainer,
  FutureDataImage,
  FutureDataTitle,
  InfoContainer,
} from "./shared/FutureDataElements";

type Props = {
  dailyWeatherData: DailyWeatherDataT[];
  timezone_offset: number;
};

const DailyWeather = ({ dailyWeatherData, timezone_offset }: Props) => {
  const [dayDate, setDayDate] = useState<Date[]>([]);
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  useEffect(() => {
    const localOffset = new Date().getTimezoneOffset() * 60000;

    dailyWeatherData.map((day) => {
      const utc = Number(day.dt) * 1000 + localOffset;
      const result = utc + 1000 * timezone_offset;
      setDayDate((prevDates) => [...prevDates, new Date(result)]);
    });
  }, [dailyWeatherData, timezone_offset]);
  return (
    <FutureDataContainer>
      {dailyWeatherData.map((day, key) => (
        <InfoContainer key={key}>
          <FutureDataTitle>
            {dayDate[key] && key !== 0
              ? dayNames[dayDate[key].getDay()]
              : "Today"}
          </FutureDataTitle>
          <FutureDataImage
            src={"/" + day.weather[0].icon + ".svg"}
            alt={"Icon for " + day.weather[0].description}
          />
          <FutureDataTitle>
            {Math.round(day.temp.max)}&deg; / {Math.round(day.temp.min)}&deg;
          </FutureDataTitle>
        </InfoContainer>
      ))}
    </FutureDataContainer>
  );
};

export default DailyWeather;
