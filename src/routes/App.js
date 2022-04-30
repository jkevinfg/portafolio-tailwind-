import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Home from '../containers/Home';

const App = ()  => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;