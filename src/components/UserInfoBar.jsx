import React from "react";

export default function UserInfoBar() {
  return (
    <div className="flex items-center py-3 px-2 bg-gray-700 rounded-tr-lg">
      <img
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="User Profile"
        className="w-10 h-10 rounded-full"
      />
      <h3 className="px-2 font-bold text-xl text-white">John</h3>
    </div>
  );
}
