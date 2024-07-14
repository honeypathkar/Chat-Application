import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

export default function UserInfoBar() {
  const { data } = useContext(ChatContext);

  return (
    <div className="flex items-center py-3 px-2 bg-gray-600 user-info-bar">
      <h3 className="px-2 font-bold text-xl text-white">
        {!data.user?.displayName
          ? "Click on user to start chat"
          : data.user?.displayName}
      </h3>
    </div>
  );
}
