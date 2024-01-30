import styled from "styled-components";
import { DataWeatherT, StorageWeatherT } from "../utils/types";
import { getCityWeatherData } from "../api/getCityWeatherData";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./shared/LoadingSpinner";

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
const RecommendTab = ({ cityData }: Props) => {
  const { data: weatherData, isLoading } = useQuery<DataWeatherT>({
    queryKey: [cityData.city],
    queryFn: () => getCityWeatherData(cityData.coords[0], cityData.coords[1]),
  });
  return (
    <>
      {cityData && (
        <>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              {weatherData?.current && (
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
                  <Image
                    src={"/" + weatherData.current.weather[0].icon + ".svg"}
                    alt={
                      "Icon for " + weatherData.current.weather[0].description
                    }
                  />
                  <City>
                    {cityData.city}, {cityData.country.toUpperCase()}
                  </City>
                  <Text>
                    {Math.round(weatherData.current.temp)}
                    &deg;
                  </Text>
                </StyledLink>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default RecommendTab;
