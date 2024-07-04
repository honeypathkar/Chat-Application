import React, { useState } from "react";
import "./style.css";
import { where, collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function SearchBox() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      setErr(true);
    }
  };
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  return (
    <>
      <div className="flex justify-center">
        <input
          className="input mt-3"
          name="text"
          placeholder="Search..."
          type="search"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKey}
        ></input>
      </div>
      {err && <span>Something went wrong</span>}
      {user && (
        <div className="flex pl-7 py-4 items-center  hover:bg-gray-800 hover:text-white">
          <img
            src={user.photoURL}
            alt="User Profile"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h6 className="userName font-bold ">{user.displayName}</h6>
          </div>
        </div>
      )}

      <div className="flex justify-center">
        <div className="border-b-2 border-gray-300 mt-3 w-[90%]"></div>
      </div>
    </>
  );
}
