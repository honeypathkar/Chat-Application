import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

export default function UserInfoBar() {
  const { data } = useContext(ChatContext);

  return (
    <div className="flex items-center py-3 px-2 bg-gray-700">
      <img
        src={data.user?.photoURL}
        alt="User Profile"
        className="w-10 h-10 rounded-full"
      />
      <h3 className="px-2 font-bold text-xl text-white">
        {data.user?.displayName}
      </h3>
    </div>
  );
}
