import React from "react";
import UserInfoBar from "./UserInfoBar";
import InputBox from "./InputBox";
import Messages from "./Messages";

export default function ChatBox() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-none">
        <UserInfoBar />
      </div>
      <div className="flex-grow overflow-y-auto">
        <Messages />
      </div>
      <div className="flex-none">
        <InputBox />
      </div>
    </div>
  );
}
