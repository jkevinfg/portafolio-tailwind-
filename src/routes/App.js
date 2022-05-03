import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from '../containers/Home';
import Skills from "../containers/Skills";


const App = ()  => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/skills" exact  element={<Skills  />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;