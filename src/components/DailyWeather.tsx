import { DailyWeatherDataT } from "../utils/types";
import { FutureDataContainer } from "./shared/FutureDataElements";

type Props = {
  dailyWeatherData: DailyWeatherDataT[];
};

const DailyWeather = ({ dailyWeatherData }: Props) => {
  return <FutureDataContainer>DailyWeather</FutureDataContainer>;
};

export default DailyWeather;
