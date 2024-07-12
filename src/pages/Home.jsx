import React from "react";
import Navbar from "../components/Navbar";
import ChatBox from "../components/ChatBox";
import Sidebar from "../components/Sidebar";
import "./style.css";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex w-[100%] h-[100vh] rounded-xl mt-[68px] justify-between">
        <div className="w-[40%] h-[100vh] bg-gray-200 overflow-hidden left-0 sidebar">
          <Sidebar />
        </div>
        <div className="w-[60%] bg-gray-600 mb-5">
          <ChatBox />
        </div>
      </div>
    </div>
  );
}
