import styled from "styled-components";
import { CurrentWeatherDataT } from "../utils/types";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { skeletonAnimation } from "./shared/SkeletonAnimation";

type Props = {
  currentWeatherData: CurrentWeatherDataT;
};

const Container = styled.div`
  height: 85svh;
  margin: 30px;
  width: 25svw;
  background-color: rgb(0, 0, 0, 0.1);
  border-radius: 15px;
  color: #e9e3b4;
  flex-wrap: nowrap;
  white-space: nowrap;
  overflow-x: auto;
  @media screen and (max-width: 1500px) {
    width: 50svw;
    margin: 20px;
  }
  @media screen and (max-width: 750px) {
    width: 90svw;
  }
`;

const Title = styled.p`
  display: flex;
  justify-content: center;
  font-size: 35px;
  font-weight: 800;
  text-transform: capitalize;
  white-space: normal;
  word-wrap: break-word;
`;

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 250px;
`;

const SkeletonImage = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  height: 250px;
  border-radius: 15px;
  animation: ${skeletonAnimation} 1s linear infinite alternate;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const Text = styled.p`
  font-size: 20px;
  margin: 5px;
`;

const CurrentWeather = ({ currentWeatherData }: Props) => {
  const { city, country } = useParams();
  const [loaded, setLoaded] = useState(false);
  return (
    <Container>
      <Title>
        {city}, {country?.toUpperCase()}
      </Title>
      <Title>{Math.round(currentWeatherData.temp)}&deg;</Title>
      {!loaded && <SkeletonImage />}
      <Image
        src={"/" + currentWeatherData.weather[0].icon + ".svg"}
        alt={"Icon for " + currentWeatherData.weather[0].description}
        onLoad={() => setLoaded(true)}
        hidden={!loaded}
      />
      <Title>{currentWeatherData.weather[0].description}</Title>
      <InfoContainer>
        <Text>
          Feels Like: {Math.round(currentWeatherData.feels_like)}&deg;
        </Text>
        <Text>Humidity: {currentWeatherData.humidity}%</Text>
        <Text>Pressure: {currentWeatherData.pressure} mbar</Text>
        <Text>Wind Speed: {currentWeatherData.wind_speed} m/s</Text>
      </InfoContainer>
    </Container>
  );
};

export default CurrentWeather;
