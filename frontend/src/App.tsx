import { Route, Routes } from "react-router";
import HeroPage from "./components/HeroPage";
import MementoPage from "./components/MementoPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<HeroPage />} />
        <Route path="memento" element={<MementoPage />} />
      </Routes>
    </>
  );
};

export default App;
