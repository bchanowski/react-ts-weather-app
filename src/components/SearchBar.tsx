import styled from "styled-components";
import SearchIcon from "../assets/search-icon.svg";

const Search = styled.input`
  width: 500px;
  border: 0px;
  background-color: #e9e3b4;
  color: #3e6990;
  font-weight: 800;
  font-size: 30px;
  &:focus {
    outline: none;
  }
`;
const Image = styled.img`
  padding: 15px;
  background-color: #e9e3b4;
  width: 30px;
`;

const SearchBar = () => {
  return (
    <>
      <Image src={SearchIcon} />
      <Search placeholder="Type a city name..." />
    </>
  );
};

export default SearchBar;
