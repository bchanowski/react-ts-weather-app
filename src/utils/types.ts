export type CitySearchResultT = {
  place_name: string;
  geometry: {
    coordinates: [number, number];
  };
  context: [{ short_code: string }, { short_code: string }];
};

type WeatherT = [
  {
    icon: string;
    description: string;
  }
];

export type CitiesSearchResultT = CitySearchResultT[];

export type CurrentWeatherDataT = {
  temp: number;
  feels_like: number;
  humidity: number;
  wind_speed: number;
  pressure: number;
  weather: WeatherT;
};

export type HourlyWeatherDataT = {
  temp: number;
  dt: bigint;
  weather: WeatherT;
};

export type DailyWeatherDataT = {
  temp: {
    min: number;
    max: number;
  };
  dt: bigint;
  weather: WeatherT;
};

export type DataWeatherT = {
  current: CurrentWeatherDataT;
  hourly: HourlyWeatherDataT[];
  daily: DailyWeatherDataT[];
  timezone_offset: number;
};

export type StorageWeatherT = {
  city: string;
  country: string;
  coords: [string, string];
};
