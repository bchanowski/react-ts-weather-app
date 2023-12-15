import styled from "styled-components";

const Container = styled.div`
  background-color: #e9e3b4;
  display: flex;
  justify-content: center;
  padding: 10px;
`;
const Title = styled.a`
  font-size: 25px;
  text-transform: uppercase;
  color: #3e6990;
`;
const Image = styled.img`
  width: 30px;
  margin-left: 10px;
`;

const Navbar = () => {
  return (
    <Container>
      <Title>Weatheroo</Title>
      <Image src="/weather-icon.svg" />
    </Container>
  );
};

export default Navbar;
