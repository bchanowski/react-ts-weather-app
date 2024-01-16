import { useEffect, useState } from "react";
import { HourlyWeatherDataT } from "../utils/types";
import {
  FutureDataContainer,
  FutureDataImage,
  FutureDataTitle,
  InfoContainer,
  SkeletonImageFt,
} from "./shared/FutureDataElements";

type Props = {
  hourlyWeatherData: HourlyWeatherDataT[];
  timezone_offset: number;
};

const HourlyWeather = ({ hourlyWeatherData, timezone_offset }: Props) => {
  const [hourDate, setHourDate] = useState<Date[]>([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const localOffset = new Date().getTimezoneOffset() * 60000;

    hourlyWeatherData.slice(0, 8).map((hour) => {
      const utc = Number(hour.dt) * 1000 + localOffset;
      const result = utc + 1000 * timezone_offset;
      setHourDate((prevDates) => [...prevDates, new Date(result)]);
    });
  }, [hourlyWeatherData, timezone_offset]);
  return (
    <FutureDataContainer>
      {hourlyWeatherData.slice(0, 8).map((hour, key) => (
        <InfoContainer key={key}>
          <FutureDataTitle>
            {hourDate[key] && key !== 0
              ? hourDate[key].getHours() + ":00"
              : "Now"}
          </FutureDataTitle>
          {!loaded && <SkeletonImageFt />}
          <FutureDataImage
            src={"/" + hour.weather[0].icon + ".svg"}
            alt={"Icon for " + hour.weather[0].description}
            onLoad={() => setLoaded(true)}
            hidden={!loaded}
          />
          <FutureDataTitle>{Math.round(hour.temp)}&deg;</FutureDataTitle>
        </InfoContainer>
      ))}
    </FutureDataContainer>
  );
};

export default HourlyWeather;
