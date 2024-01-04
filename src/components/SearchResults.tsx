import { useEffect, useState } from "react";
import styled from "styled-components";
import { getSearchResults } from "../api/getSearchCities";
import {
  CitiesSearchResultT,
  CitySearchResultT,
  StorageWeatherT,
} from "../utils/types";
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
  const addToHistory = (city: CitySearchResultT) => {
    let favCities: StorageWeatherT[] = [];
    const localData = localStorage.getItem("citiesHistory");
    favCities = localData !== null ? JSON.parse(localData) : [];
    if (city) {
      const dataToAdd: StorageWeatherT = {
        city: city.place_name.split(",")[0],
        country: city.context[1].short_code,
        coords: [
          city.geometry.coordinates[1].toString(),
          city.geometry.coordinates[0].toString(),
        ],
      };
      favCities.push(dataToAdd);
      localStorage.setItem("citiesHistory", JSON.stringify(favCities));
    }
  };
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
                  city.context[1].short_code +
                  "/" +
                  city.geometry.coordinates[1] +
                  "/" +
                  city.geometry.coordinates[0]
                }
                onClick={() => addToHistory(city)}
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
