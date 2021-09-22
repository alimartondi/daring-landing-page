import React from "react";
import Board from "../sections/board";
import Feauture from "../sections/feauture";
import Hero from "../sections/hero";
import System from "../sections/system";
import Application from "../sections/application";
import Space from "../sections/space";

export default function Main() {
  return (
    <div>
      <div className="container mx-auto px-3 lg:px-16">
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
