import styled from "styled-components";
import SearchIcon from "../assets/search-icon.svg";
import SearchResults from "./SearchResults";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
`;

const Search = styled.input`
  width: 500px;
  border: 0px;
  background-color: #e9e3b4;
  color: #3e6990;
  font-weight: 800;
  font-size: 30px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  text-transform: capitalize;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 600px) {
    width: 70svw;
    font-size: 20px;
    font-weight: 500;
  }
`;
const Image = styled.img`
  padding: 15px;
  background-color: #e9e3b4;
  width: 30px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearchValue, setDebouncedSearchValue] = useState("");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [searchValue]);
  return (
    <Container>
      <Image src={SearchIcon} alt="Search icon" />
      <Search
        placeholder="Type a city name..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.currentTarget.value)}
      />
      <SearchResults searchValue={debouncedSearchValue} />
    </Container>
  );
};

export default SearchBar;
