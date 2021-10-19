import React from "react";

export default function Board() {
  return (
    <div
      className="bg-indigo-900 rounded-2xl mt-24 md:mt-40 text-center py-20 md:py-28"
      id="board"
    >
      <div className="board-content mx-auto max-w-full md:max-w-3xl px-3">
        <h2 className="font-bold text-4xl md:text-5xl text-white ">
          Conceptualize project scope with an easy to read overview
        </h2>
        <p className="text-base font-normal text-white mt-8 px-2 md:px-28">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin.
        </p>
        <button className="bg-white text-indigo-900 px-8 md:py-4 py-3.5 rounded-lg font-semibold mt-10">
          Try for free
        </button>
      </div>
    </div>
  );
}
