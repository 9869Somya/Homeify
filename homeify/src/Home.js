import React from "react";
import "./App.css";
import Trends from "./components/Personal/Somya/Cards/Furniture";
import Navbar from "./components/Main/Navbar/Navbar";
import Sofas from "./components/Personal/Somya/Cards/SofaProducts/index";
export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <Sofas />
    </div>
  );
}
