import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import Recommendations from "../components/Recommendations";

const Container = styled.div`
  display: flex;
  justify-content: center;
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
