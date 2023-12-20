import styled from "styled-components";
import HourlyWeather from "./HourlyWeather";
import DailyWeather from "./DailyWeather";
import { useEffect, useState } from "react";
import { getCityWeatherData } from "../api/getCityWeatherData";
import { useParams } from "react-router-dom";
import { DataWeatherT } from "../utils/types";
import CurrentWeather from "./CurrentWeather";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const FutureDataCont = styled.div`
  display: flex;
  flex-direction: column;
`;

const CityWeather = () => {
  const [weatherData, setWeatherData] = useState<DataWeatherT>();
  const { lat, lng } = useParams();
  useEffect(() => {
    const getData = async () => {
      if (lat && lng) setWeatherData(await getCityWeatherData(lat, lng));
    };
    getData();
  }, [lat, lng]);
  return (
    <Container>
      {weatherData && (
        <>
          <CurrentWeather currentWeatherData={weatherData.current} />
          <FutureDataCont>
            <HourlyWeather hourlyWeatherData={weatherData.hourly} />
            <DailyWeather dailyWeatherData={weatherData.daily} />
          </FutureDataCont>
        </>
      )}
    </Container>
  );
};

export default CityWeather;
