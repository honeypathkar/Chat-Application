import React from "react";
import SearchBox from "./SearchBox";
import UserProfile from "./UserProfile";

export default function Sidebar() {
  return (
    <div>
      <SearchBox />
      <UserProfile />
      <UserProfile />
      <UserProfile />
      <UserProfile />
    </div>
  );
}
