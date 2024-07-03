import React from "react";
import Navbar from "../components/Navbar";
import ChatBox from "../components/ChatBox";
import Sidebar from "../components/Sidebar";
import "./style.css"

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container flex w-[80%] h-[80vh] mt-5 rounded-xl justify-center">
        <div className="flex-col w-[30%] bg-gray-200 sidebar">
          <Sidebar />
        </div>
        <div className="w-[60%] bg-gray-600 chatbox">
          <ChatBox />
        </div>
      </div>
    </div>
  );
}
