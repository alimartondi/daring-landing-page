import React from "react";

export default function Board() {
  return (
    <div className="bg-indigo-900 rounded-2xl mt-24 md:mt-40 text-center py-20 md:py-28">
      <div className="board-content mx-auto max-w-full md:max-w-3xl">
        <h2 className="font-bold text-4xl md:text-5xl text-white ">
          Manage your project today, be a successful person tomorrow
        </h2>
        <p className="text-base font-normal text-white mt-8 px-2 md:px-28">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin.
        </p>
        <button className="bg-white px-14 md:py-8 py-4 rounded-xl font-semibold mt-8">
          Try for free
        </button>
      </div>
    </div>
  );
}
