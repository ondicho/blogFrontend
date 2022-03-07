import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter, Router, Routes } from "react-router-dom";
import Posts from "./Posts";
import PostDetail from "./PostDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/"  element={<Posts />} />
        <Route  path="/:id"   element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
