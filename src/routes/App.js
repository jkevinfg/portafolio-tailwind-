import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from '../containers/Home';

const App = ()  => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;