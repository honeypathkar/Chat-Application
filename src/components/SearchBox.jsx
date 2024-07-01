import React from "react";
import "./style.css";

export default function SearchBox() {
  return (
    <>
      <div className="flex justify-center">
        <input
          className="input mt-3"
          name="text"
          placeholder="Search..."
          type="search"
        ></input>
      </div>
      <div className="flex justify-center">
        <div className="border-b-2 border-gray-300 mt-3 w-[90%]"></div>
      </div>
    </>
  );
}
