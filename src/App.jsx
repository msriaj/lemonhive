// import Home from "./Pages/Home/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cast } from "./Pages/Cast/Cast";
import { CastDetails } from "./Pages/CastDetails/CastDetails";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cast" element={<Cast />}></Route>
        <Route path="/cast/:id" element={<CastDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
