import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

export default function Message({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();
  console.log(message);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message.text]);

  return (
    <div
      className={`flex gap-3 text-white overflow-scroll ${
        message.senderId === currentUser.uid ? "flex-row-reverse" : ""
      }`}
      ref={ref}
    >
      <div
        className={`my-3 ${
          message.senderId === currentUser.uid ? "mr-3" : "ml-3"
        }  flex flex-col items-center`}
      >
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt="User Profile"
          className="w-9 h-9 rounded-full mb-1"
        />
      </div>
      <div className="my-3 max-w-[70%] flex flex-col items-end">
        <h1
          className={`bg-gray-100 px-2 py-2 text-black ${
            message.senderId === currentUser.uid
              ? "rounded-t-lg rounded-bl-lg"
              : "rounded-t-lg rounded-br-lg"
          }`}
          style={{ maxWidth: "max-content" }}
        >
          {message.text}
        </h1>
      </div>
    </div>
  );
}
