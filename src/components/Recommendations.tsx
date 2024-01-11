import styled from "styled-components";
import FavouriteCities from "./FavouriteCities";
import HistoryCities from "./HistoryCities";
import PopularCities from "./PopularCities";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5svw;
  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;
const Recommendations = () => {
  return (
    <Container>
      <FavouriteCities />
      <PopularCities />
      <HistoryCities />
    </Container>
  );
};

export default Recommendations;
