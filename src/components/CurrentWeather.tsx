import styled from "styled-components";
import { CurrentWeatherDataT } from "../utils/types";
import { useParams } from "react-router-dom";

type Props = {
  currentWeatherData: CurrentWeatherDataT;
};

const Container = styled.div`
  height: 85svh;
  margin: 30px;
  width: 500px;
  background-color: rgb(0, 0, 0, 0.1);
  border-radius: 15px;
  color: #e9e3b4;
`;

const Title = styled.p`
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-weight: 800;
  text-transform: capitalize;
`;

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 250px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const Text = styled.p`
  font-size: 25px;
  margin: 5px;
`;

const CurrentWeather = ({ currentWeatherData }: Props) => {
  const { city } = useParams();
  return (
    <Container>
      <Title>{city}</Title>
      <Title>{Math.round(currentWeatherData.temp)}&deg;</Title>
      <Image
        src={"/" + currentWeatherData.weather[0].icon + ".svg"}
        alt={"Icon for " + currentWeatherData.weather[0].description}
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
