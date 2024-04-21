import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import CreateUser from "./components/CreateUser";
import Users from "./components/Users";
import Register from "./components/register";
import Navbar from "./components/nav";
import Login from "./components/login";
import Resume from "./resume/resume";
import Template from "./template/template";
import Resume_Temp from "./resume/resume-temp";
import Resume_Temp2 from "./resume/resume-temp2";

function App() {
  return (
    <div className="App">
      {/* <li className="nav-item active">
        <Link className="nav-link" to={"/create-user"}>
          Create User
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/users"}>
          Users List
        </Link>
      </li> */}

      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/template" element={<Template></Template>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/resume" element={<Resume></Resume>} />
        <Route path="/resume-temp" element={<Resume_Temp></Resume_Temp>} />
        <Route path="/resume-temp2" element={<Resume_Temp2></Resume_Temp2>} />
      </Routes>
    </div>
  );
}

export default App;
