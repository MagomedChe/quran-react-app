import Suras from "./components/ListSuras/index";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Ayas from "./components/OneSura";

function App() {
  return (
    <div className='container m-auto w-900px'>
      <Header />
      <Routes>
        <Route path='' element={<Suras />} />
        <Route path='/1' element={<Ayas />} />
      </Routes>
    </div>
  );
}

export default App;
