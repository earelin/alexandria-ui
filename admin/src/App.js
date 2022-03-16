import './App.css'
import Login from "./user/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserList from "./user/UserList";
import React from "react";
import Home from "./Home";

export default function App() {
  return (
    <div id="main" className="layouts">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
