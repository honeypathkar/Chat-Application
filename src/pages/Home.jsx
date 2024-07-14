import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ChatBox from "../components/ChatBox";
import Sidebar from "../components/Sidebar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./style.css";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="font-mono">
      <div>
        <Navbar />
      </div>
      <div className="flex w-full h-[100vh] rounded-xl mt-[70px] justify-between">
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <Sidebar />
        </div>
        <div className="w-full bg-gray-400 mb-5 chat-box">
          <ChatBox isSidebarOpen={isSidebarOpen} />
        </div>
      </div>
      <button
        className={`toggle-sidebar-btn ${isSidebarOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <ArrowBackIcon /> : <ArrowForwardIcon />}
      </button>
    </div>
  );
}
