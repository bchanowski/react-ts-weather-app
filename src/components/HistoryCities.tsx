import { useEffect, useState } from "react";
import { StorageWeatherT } from "../utils/types";
import RecommendTab from "./RecommendTab";
import styled from "styled-components";
import { RecommendContainer } from "./shared/RecommendTabContainer";

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
        <RecommendContainer>
          <h1>Search History</h1>
          {historyCities.map((city, index) => (
            <Tab key={index}>
              <RecommendTab cityData={city} />
            </Tab>
          ))}
        </RecommendContainer>
      )}
    </>
  );
};

export default HistoryCities;
