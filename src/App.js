import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Chat from "./pages/Chat";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SetAvatar from "./pages/SetAvatar";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/signup" element = {<SignUp />}></Route>
        <Route path = "/login" element = {<Login />}></Route>
        <Route path = "/" element = {<Chat />}></Route>
        <Route path = "/setavatar" element = {<SetAvatar />}></Route>
        {/* <Route path = "/" element = {<HomePage />}></Route> */}
      </Routes>  
    </BrowserRouter>
  )
}