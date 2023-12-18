import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import CityPage from "./pages/CityPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:city/:lat/:lng" element={<CityPage />} />
      </Routes>
    </>
  );
};

export default App;
