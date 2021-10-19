import React from "react";
import Board from "../sections/Board";
import Feature from "../sections/Feature";
import Hero from "../sections/Hero";
import System from "../sections/System";
import Application from "../sections/Application";
import Space from "../sections/Space";

export default function Main() {
  return (
    <div>
      <div className="container mx-auto px-4 lg:px-16">
        <Hero />
        <Feature />
        <System />
        <Space />
        <Board />
        <Application />
      </div>
    </div>
  );
}
