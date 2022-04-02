import './App.scss'
import Login from "./user/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserList from "./user/UserList";
import React from "react";
import Home from "./Home";
import { useSelector } from 'react-redux'
import _ from 'lodash'
import Navbar from './Navbar'

export default function App() {
  const user = useSelector(state => state.user.value)
  const isLoggedIn = !_.isNil(user)

  return (
    <div id="main" className="layouts">
      {isLoggedIn
        ? <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/users" element={<UserList/>}/>
          </Routes>
        </BrowserRouter>
        : <Login/>
      }
    </div>
  )
}
