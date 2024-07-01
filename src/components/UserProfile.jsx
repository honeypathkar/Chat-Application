import React from "react";

export default function UserProfile() {
  return (
    <div className="flex pl-7 py-4 items-center  hover:bg-gray-800 hover:text-white">
      <img
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="User Profile"
        className="w-10 h-10 rounded-full mr-3"
      />
      <div>
        <h6 className="userName font-bold ">John</h6>
        <p className="userMsg text-gray-500">Hello</p>
      </div>
    </div>
  );
}
