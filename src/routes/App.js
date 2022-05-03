import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from '../containers/Home';
import Skills from "../containers/Skills";
import Projects from "../containers/Projects";


const App = ()  => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/skills" exact  element={<Skills  />} />
          <Route path="/projects" exact  element={<Projects  />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;