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

const Tab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;
const HistoryCities = () => {
  const [historyCities, setHistoryCities] = useState<StorageWeatherT[]>([]);
  const localData = localStorage.getItem("citiesHistory");
  useEffect(() => {
    setHistoryCities(localData !== null ? JSON.parse(localData) : "");
  }, [localData]);
  return (
    <>
      {historyCities.length !== 0 && historyCities !== null && (
        <Container>
          <h1>Search History</h1>
          {historyCities.map((city, index) => (
            <Tab key={index}>
              <RecommendTab cityData={city} />
            </Tab>
          ))}
        </Container>
      )}
    </>
  );
};

export default HistoryCities;
