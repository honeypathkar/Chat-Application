import React from "react";
import UserInfoBar from "./UserInfoBar";
import InputBox from "./InputBox";
import Messages from "./Messages";
import "./style.css";

export default function ChatBox() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-none fixed top-[70px] w-full">
        <UserInfoBar />
      </div>
      <div className="flex-grow overflow-scroll mt-[60px] mb-[60px]">
        <Messages />
      </div>
      <div className="flex-none fixed bottom-0 message-sender">
        <InputBox />
      </div>
    </div>
  );
}
