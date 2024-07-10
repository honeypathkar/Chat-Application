import React, { useState, useEffect, useContext } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

export default function UserProfile() {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
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

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="mt-20 overflow-hidden fixed w-[40%]">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="flex pl-7 py-4 items-center  hover:bg-gray-800 hover:text-white"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
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
                {(chat[1].lastMessage?.text).length > 10
                  ? (chat[1].lastMessage?.text).slice(0, 11) + "..."
                  : chat[1].lastMessage?.text}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
