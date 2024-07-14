import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import React, { useState } from "react";
import NotUserImage from "./images/notUser.webp";

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <nav className="flex justify-between bg-gray-800 py-3 fixed top-0 w-full">
        <h1 className="flex items-center pl-2 text-white text-2xl font-bold">Chat App</h1>
        <div className="flex text-white mr-3 items-center">
          <img
            src={!currentUser.photoURL ? NotUserImage : currentUser.photoURL}
            alt=""
            className="w-10 h-10 rounded-full mr-5"
          />
          <p className="mr-3 font-bold font-mono">{currentUser.displayName}</p>
          <button
            className="btn btn-outline-light"
            onClick={() => signOut(auth)}
          >
            Log Out
          </button>
        </div>
      </nav>
    </div>
  );
}
