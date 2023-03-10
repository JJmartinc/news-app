import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import List from "./List/List";
import Home from "./Home/Home";

class Main extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<List showForm={false} />} />
        <Route path="/form" element={<List showForm={true} />} />
      </Routes>
    );
  }
}

export default Main;