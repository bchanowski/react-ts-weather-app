import styled from "styled-components";
import { popularCities } from "../utils/PopularCitiesData";
import RecommendTab from "./RecommendTab";
import { RecommendContainer } from "./shared/RecommendTabContainer";

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
      <RecommendContainer>
        <h1>Popular Cities</h1>
        {popularCities ? (
          popularCities.map((city, index) => (
            <Tab key={index}>
              <RecommendTab cityData={city} />
            </Tab>
          ))
        ) : (
          <p>Loading</p>
        )}
      </RecommendContainer>
    </>
  );
};

export default PopularCities;
