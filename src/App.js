import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import SetAvatar from "./pages/SetAvatar";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/signup" element = {<SignUp />}></Route>
        <Route path = "/login" element = {<Login />}></Route>
        <Route path = "/chat" element = {<Chat />}></Route>
        <Route path = "/setavatar" element = {<SetAvatar />}></Route>
      </Routes>  
    </BrowserRouter>
  )
}