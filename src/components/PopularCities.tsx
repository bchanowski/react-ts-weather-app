import styled from "styled-components";
import { popularCities } from "../utils/PopularCitiesData";
import RecommendTab from "./RecommendTab";
const Tab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;
const PopularCities = () => {
  return (
    <>
      {popularCities.length !== 0 &&
        popularCities.map((city) => {
          <Tab>
            <RecommendTab cityData={city} />
          </Tab>;
        })}
    </>
  );
};

export default PopularCities;
