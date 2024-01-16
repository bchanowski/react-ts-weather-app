import styled from "styled-components";
import { DataWeatherT, StorageWeatherT } from "../utils/types";
import { useEffect, useState } from "react";
import { getCityWeatherData } from "../api/getCityWeatherData";
import { Link } from "react-router-dom";
import { skeletonAnimation } from "./shared/SkeletonAnimation";

type Props = {
  cityData: StorageWeatherT;
};

const Text = styled.p`
  font-size: 25px;
  width: 20%;
`;

const City = styled(Text)`
  width: 50%;
`;

const Image = styled.img`
  width: 30%;
  height: 70%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  width: 99%;
  margin: 5px;
  height: 12svh;
  background-color: #f39b6d;
  border-radius: 15px;
  color: #e9e3b4;
`;
const SkeletonImage = styled.div`
  width: 30%;
  height: 70%;
  border-radius: 10px;
  animation: ${skeletonAnimation} 1s linear infinite alternate;
`;
const RecommendTab = ({ cityData }: Props) => {
  const [weatherData, setWeatherData] = useState<DataWeatherT>();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const getData = async () => {
      if (cityData)
        setWeatherData(
          await getCityWeatherData(cityData.coords[0], cityData.coords[1])
        );
    };
    getData();
  }, [cityData]);
  return (
    <StyledLink
      to={
        "/" +
        cityData.city +
        "/" +
        cityData.country +
        "/" +
        cityData.coords[0] +
        "/" +
        cityData.coords[1]
      }
    >
      {cityData && (
        <>
          {!loaded && <SkeletonImage />}
          <Image
            src={"/" + weatherData?.current.weather[0].icon + ".svg"}
            alt={"Icon for " + weatherData?.current.weather[0].description}
            onLoad={() => setLoaded(true)}
            hidden={!loaded}
          />
          <City>
            {cityData.city}, {cityData.country.toUpperCase()}
          </City>
          <Text>
            {weatherData?.current.temp && Math.round(weatherData.current.temp)}
            &deg;
          </Text>
        </>
      )}
    </StyledLink>
  );
};

export default RecommendTab;
