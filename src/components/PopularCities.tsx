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
const PopularCities = () => {
  return (
    <>
      <Container>
        <h1>Popular Cities</h1>
        {popularCities &&
          popularCities.map((city) => (
            <Tab>
              <RecommendTab cityData={city} />
            </Tab>
          ))}
      </Container>
    </>
  );
};

export default PopularCities;
