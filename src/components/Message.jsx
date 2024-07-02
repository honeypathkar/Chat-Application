import React from "react";

export default function Message() {
  return (
    <div className="flex gap-5 text-white overflow-scroll flex-row-reverse">
      <div className="my-3 mx-3 flex flex-col">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="User Profile"
          className="w-9 h-9 rounded-full mb-1"
        />
        <span className="text-gray-400 text-xs">Just Now</span>
      </div>
      <div className="my-3 max-w-[80%] gap-5 flex flex-col items-end">
        <h1 className="bg-gray-100 px-2 py-2 text-black rounded-t-lg rounded-bl-lg" style={{maxWidth: "max-content"}}>Hello</h1>
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          className="rounded-t-lg rounded-bl-lg"
        />
      </div>
    </div>
  );
}
