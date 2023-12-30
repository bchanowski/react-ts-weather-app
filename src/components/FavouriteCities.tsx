import { useEffect, useState } from "react";
import { StorageWeatherT } from "../utils/types";
import RecommendTab from "./RecommendTab";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  height: 80svh;
  width: 25svw;
  background-color: rgb(0, 0, 0, 0.1);
  border-radius: 15px;
  color: #e9e3b4;
  overflow: scroll;
`;

const FavouriteCities = () => {
  const [favCities, setFavCities] = useState<StorageWeatherT[]>([]);
  useEffect(() => {
    const localData = localStorage.getItem("favouriteCities");
    setFavCities(localData !== null ? JSON.parse(localData) : "");
  }, []);
  return (
    <Container>
      {favCities.length !== 0 &&
        favCities.map((city) => <RecommendTab cityData={city} />)}
    </Container>
  );
};

export default FavouriteCities;
