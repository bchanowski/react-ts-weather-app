import { useEffect, useState } from "react";
import { StorageWeatherT } from "../utils/types";
import RecommendTab from "./RecommendTab";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  height: 80svh;
  width: 25svw;
  background-color: rgb(0, 0, 0, 0.1);
  border-radius: 15px;
  color: #e9e3b4;
  overflow: scroll;
`;

const Remove = styled.h2`
  cursor: pointer;
`;

const Tab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;
const FavouriteCities = () => {
  const [favCities, setFavCities] = useState<StorageWeatherT[]>([]);
  const localData = localStorage.getItem("favouriteCities");
  useEffect(() => {
    setFavCities(localData !== null ? JSON.parse(localData) : "");
  }, [localData, favCities]);
  const removeCity = (index: number) => {
    const newData = favCities;
    newData.splice(index, 1);
    localStorage.setItem("favouriteCities", JSON.stringify(newData));
    setFavCities(newData);
  };
  return (
    <>
      {favCities.length !== 0 && favCities !== null && (
        <Container>
          <h1>Favourite Cities</h1>
          {favCities.map((city, index) => (
            <Tab>
              <RecommendTab cityData={city} />
              <Remove onClick={() => removeCity(index)}>X</Remove>
            </Tab>
          ))}
        </Container>
      )}
    </>
  );
};

export default FavouriteCities;
