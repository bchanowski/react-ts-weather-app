export type CitySearchResultT = {
  place_name: string;
  geometry: {
    coordinates: [number, number];
  };
};

export type CitiesSearchResultT = CitySearchResultT[];

export type CurrentWeatherDataT = {
  current: {
    temp: number;
    feels_like: number;
    humidity: number;
    sunrise: number;
    sunset: number;
    wind_speed: number;
    weather: [
      {
        icon: string;
        description: string;
      }
    ];
  };
};

export type HourlyWeatherDataT = {
  hourly: [
    {
      temp: number;
      weather: [
        {
          icon: string;
          description: string;
        }
      ];
    }
  ];
};

export type DailyWeatherDataT = {
  daily: [
    {
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
    }
  ];
};

export type DataWeatherT = CurrentWeatherDataT &
  HourlyWeatherDataT &
  DailyWeatherDataT;
