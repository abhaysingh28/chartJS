import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from "./Components/login/Main";
import ChartComponent from "./Components/login/ChartComponent";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Button />} />
        {/* <Route path="/" element={<ChartComponent />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
