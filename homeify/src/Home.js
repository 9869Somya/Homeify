import React from "react";
import "./App.css";
import Trends from "./components/Personal/Somya/Cards/Furniture";
import Navbar from "./components/Main/Navbar/Navbar";

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <Trends />
    </div>
  );
}
