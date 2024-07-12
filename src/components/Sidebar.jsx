import React from "react";
import SearchBox from "./SearchBox";
import UserProfile from "./UserProfile";

export default function Sidebar() {
  return (
    <div className="overflow-hidden">
      <SearchBox />
      <UserProfile />
    </div>
  );
}
