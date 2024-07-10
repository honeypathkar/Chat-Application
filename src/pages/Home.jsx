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
      <div className="flex w-[100%] h-[100vh] rounded-xl mt-[68px] justify-center">
        <div className="flex-col w-[40%] bg-gray-200 overflow-hidden">
          <Sidebar />
        </div>
        <div className="w-[60%] bg-gray-600 mb-5">
          <ChatBox />
        </div>
      </div>
    </div>
  );
}
