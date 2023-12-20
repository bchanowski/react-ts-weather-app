export type CitySearchResultT = {
  place_name: string;
  geometry: {
    coordinates: [number, number];
  };
};

export type CitiesSearchResultT = CitySearchResultT[];

export type CurrentWeatherDataT = {
  temp: number;
  feels_like: number;
  humidity: number;
  wind_speed: number;
  pressure: number;
  weather: [
    {
      icon: string;
      description: string;
    }
  ];
};

export type HourlyWeatherDataT = {
  temp: number;
  weather: [
    {
      icon: string;
      description: string;
    }
  ];
};

export type DailyWeatherDataT = {
  temp: {
    min: number;
    max: number;
  };
  weather: [
    {
      icon: string;
      description: string;
    }
  ];
};

export type DataWeatherT = {
  current: CurrentWeatherDataT;
  hourly: HourlyWeatherDataT;
  daily: DailyWeatherDataT;
};
