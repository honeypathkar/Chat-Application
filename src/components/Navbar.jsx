import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import React, { useState } from "react";
import NotUserImage from "./images/notUser.webp";

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex justify-between bg-gray-600 py-3 fixed top-0 w-full">
        <h1 className="flex items-center pl-2 text-white text-xl">Chat App</h1>
        <div>
          <div className="relative mr-5">
            <button
              id="dropdownUserAvatarButton"
              data-dropdown-toggle="dropdownAvatar"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              type="button"
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <img
                src={
                  !currentUser.photoURL ? NotUserImage : currentUser.photoURL
                }
                alt=""
                className="w-10 h-10 rounded-full"
              />
            </button>

            {isOpen && (
              <div
                id="dropdownAvatar"
                className="fixed z-50 mt-20 bg-white text-black divide-y divide-gray-100 rounded-lg shadow w-52 -ml-40 dark:bg-gray-700 dark:divide-gray-600"
              >
                <div className="px-4 py-3 text-sm">
                  <div>{currentUser.displayName}</div>
                </div>
                <div className="py-2">
                  <button
                    className="block px-4 py-2 text-sm"
                    onClick={() => signOut(auth)}
                  >
                    Log out &rarr;
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
