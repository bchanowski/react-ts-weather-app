import styled from "styled-components";
import SearchBar from "../components/SearchBar";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const MainPage = () => {
  return (
    <Container>
      <SearchBar />
    </Container>
  );
};

export default MainPage;
