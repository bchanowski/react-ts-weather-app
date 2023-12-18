import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: #e9e3b4;
  display: flex;
  justify-content: center;
  padding: 10px;
`;
const Title = styled.div`
  font-size: 25px;
  text-transform: uppercase;
  color: #3e6990;
`;
const Image = styled.img`
  width: 30px;
  margin-left: 10px;
`;
const StyledLink = styled(Link)`
  text-decoration: "none";
  color: #3e6990;
`;
const Navbar = () => {
  return (
    <Container>
      <Title>
        <StyledLink to="/" style={{ textDecoration: "none" }}>
          Weatheroo
        </StyledLink>
      </Title>
      <Image src="/weather-icon.svg" alt="Weatheroo logo" />
    </Container>
  );
};

export default Navbar;
