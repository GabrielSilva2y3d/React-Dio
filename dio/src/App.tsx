import React from "react";
import { Home } from "./pages/home"
import { Login } from "./pages/login"
import { Feed } from "./pages/feed"
import { Cadastro } from "./pages/cadastro";
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
        <Route path ="/Cadastro" element={<Cadastro />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
