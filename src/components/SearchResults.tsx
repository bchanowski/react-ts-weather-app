import { useEffect, useState } from "react";
import styled from "styled-components";
import { getSearchResults } from "../api/getSearchCities";
import { CitiesSearchResultT } from "../utils/types";
import { Link } from "react-router-dom";

type Props = {
  searchValue: string;
};
const CitiesList = styled.ul`
  position: absolute;
  margin-top: 65px;
  background-color: #3e6990;
  width: 525px;
  padding-top: 15px;
  border-radius: 15px;
  padding-bottom: 15px;
`;
const City = styled.li`
  list-style-type: none;
  margin: 5px;
  cursor: pointer;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #e9e3b4;
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
            <City key={id}>
              <StyledLink
                to={
                  "/" +
                  city.place_name.split(",")[0] +
                  "/" +
                  city.geometry.coordinates[0] +
                  "/" +
                  city.geometry.coordinates[1]
                }
              >
                {city.place_name}
              </StyledLink>
            </City>
          ))}
        </CitiesList>
      )}
    </>
  );
};

export default SearchResults;
