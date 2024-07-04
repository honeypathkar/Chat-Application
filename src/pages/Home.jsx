import React from "react";
import Navbar from "../components/Navbar";
import ChatBox from "../components/ChatBox";
import Sidebar from "../components/Sidebar";
import "./style.css";

export default function Home() {
  return (
    <div>
      <div className="container mt-5">
        <Navbar />
      </div>
      <div className="flex container w-[100%] h-[80vh] rounded-xl justify-center">
        <div className="flex-col w-[40%] bg-gray-200 sidebar">
          <Sidebar />
        </div>
        <div className="w-[60%] bg-gray-600 chatbox">
          <ChatBox />
        </div>
      </div>
    </div>
  );
}
