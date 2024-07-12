import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ChatBox from "../components/ChatBox";
import Sidebar from "../components/Sidebar";
import "./style.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex w-[100%] h-[100vh] rounded-xl mt-[70px] justify-between">
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <Sidebar />
        </div>
        <div className="w-full bg-gray-600 mb-5 chat-box">
          <ChatBox />
        </div>
      </div>
      <button
        className={`toggle-sidebar-btn ${
          isSidebarOpen ? "translate-x-full left-[230px]" : "left-0"
        } transition-transform`}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <ArrowBackIcon /> : <ArrowForwardIcon />}
      </button>
    </div>
  );
}
