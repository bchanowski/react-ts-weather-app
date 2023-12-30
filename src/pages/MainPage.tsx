import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import Recommendations from "../components/Recommendations";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const MainPage = () => {
  return (
    <Container>
      <SearchBar />
      <Recommendations />
    </Container>
  );
};

export default MainPage;
