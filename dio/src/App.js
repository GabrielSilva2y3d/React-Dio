import React from "react";
import { Home } from "./pages/home"
import { Login } from "./pages/login"
import { Feed } from "./pages/feed"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path ="/Login" element={<Login />}></Route>
        <Route path ="/Feed" element={<Feed />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
