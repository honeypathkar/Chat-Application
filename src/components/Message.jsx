import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

export default function Message({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message.text]);

  return (
    <div
      className={`flex gap-5 text-white overflow-scroll ${
        message.senderId === currentUser.uid ? "flex-row-reverse" : ""
      }`}
      ref={ref}
    >
      <div className="my-3 mx-3 flex flex-col">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt="User Profile"
          className="w-9 h-9 rounded-full mb-1"
        />
        <span className="text-gray-400 text-xs">{message.date}</span>
      </div>
      <div className="my-3 max-w-[80%] gap-5 flex flex-col items-end">
        <h1
          className="bg-gray-100 px-2 py-2 text-black rounded-t-lg rounded-bl-lg"
          style={{ maxWidth: "max-content" }}
        >
          {message.text}
        </h1>
        {message.img && (
          <img
            src={message.img}
            alt=""
            className="rounded-t-lg rounded-bl-lg"
          />
        )}
      </div>
    </div>
  );
}
