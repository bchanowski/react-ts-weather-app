export type CitySearchResultT = {
  place_name: string;
  geometry: {
    coordinates: [number, number];
  };
};

export type CitiesSearchResultT = CitySearchResultT[];
