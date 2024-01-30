import { useEffect, useState } from "react";
import { StorageWeatherT } from "../utils/types";
import RecommendTab from "./RecommendTab";
import styled from "styled-components";
import { RecommendContainer } from "./shared/RecommendTabContainer";

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
  const [wasRemoved, setWasRemoved] = useState(false);
  const localData = localStorage.getItem("favouriteCities");
  useEffect(() => {
    setFavCities(localData !== null ? JSON.parse(localData) : "");
  }, [localData, wasRemoved]);
  const removeCity = (index: number) => {
    const newData = favCities;
    newData.splice(index, 1);
    localStorage.setItem("favouriteCities", JSON.stringify(newData));
    setWasRemoved((value) => !value);
  };
  return (
    <>
      {favCities.length !== 0 && favCities !== null && (
        <RecommendContainer>
          <h1 className={"position: fixed"}>Favourite Cities</h1>
          {favCities.map((city, index) => (
            <Tab key={index}>
              <RecommendTab cityData={city} />
              <Remove onClick={() => removeCity(index)}>X</Remove>
            </Tab>
          ))}
        </RecommendContainer>
      )}
    </>
  );
};

export default FavouriteCities;
