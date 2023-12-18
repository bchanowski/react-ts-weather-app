import { useParams } from "react-router-dom";

const CityPage = () => {
  const { city } = useParams();
  return <div>{city}</div>;
};

export default CityPage;
