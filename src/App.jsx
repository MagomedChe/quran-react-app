import Suras from "./components/ListSuras/index";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import OneSura from "./components/OneSura";

function App() {
  return (
    <div className="w-full md:w-11/12 lg:container mx-auto relative">
      <Header />
      <Routes>
        <Route path="/" element={<Suras />} />
        <Route path=":id" element={<OneSura />} />
      </Routes>
    </div>
  );
}

export default App;
