import { useEffect, useState } from "react";
import styled from "styled-components";
import { getSearchResults } from "../api/getSearchCities";
import { CitiesSearchResultT } from "../utils/types";

type Props = {
  searchValue: string;
};
const CitiesList = styled.ul`
  position: absolute;
  margin-top: 60px;
  background-color: #3e6990;
  color: #e9e3b4;
  width: 525px;
  padding-top: 15px;
  padding-bottom: 15px;
`;
const City = styled.li`
  list-style-type: none;
  margin: 5px;
  cursor: pointer;
  &:hover {
    color: #f39b6d;
  }
`;
const SearchResults = ({ searchValue }: Props) => {
  const [cityResults, setCityResults] = useState<CitiesSearchResultT>([]);
  useEffect(() => {
    const fetchCitiesList = async () => {
      setCityResults(await getSearchResults(searchValue));
    };
    fetchCitiesList();
  }, [searchValue]);
  return (
    <>
      {cityResults.length !== 0 && (
        <CitiesList>
          {cityResults.map((city, id) => (
            <City key={id}>{city.place_name}</City>
          ))}
        </CitiesList>
      )}
    </>
  );
};

export default SearchResults;
