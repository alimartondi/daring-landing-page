import React from "react";
import Board from "../sections/Board";
import Feauture from "../sections/Feauture";
import Hero from "../sections/Hero";
import System from "../sections/System";
import Application from "../sections/Application";
import Space from "../sections/Space";

export default function Main() {
  return (
    <div>
      <div className="container mx-auto px-4 lg:px-14">
        <Hero />
        <Feauture />
        <System />
        <Space />
        <Board />
        <Application />
      </div>
    </div>
  );
}
