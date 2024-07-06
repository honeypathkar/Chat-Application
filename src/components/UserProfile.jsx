import React, { useState, useEffect, useContext } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

export default function UserProfile() {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const getChats = () => {
      const unSub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unSub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  console.log(Object.entries(chats));

  return (
    <>
      {Object.entries(chats)?.map((chat) => (
        <div
          className="flex pl-7 py-4 items-center  hover:bg-gray-800 hover:text-white"
          key={chat[0]}
        >
          <img
            src={chat[1].userInfo.photoURL}
            alt="User Profile"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h6 className="userName font-bold ">
              {chat[1].userInfo.displayName}
            </h6>
            <p className="userMsg text-gray-500">
              {chat[1].userInfo.lastMessage?.text}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
