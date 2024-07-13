import React, { useContext, useState } from "react";
import "./style.css";
import {
  where,
  collection,
  query,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBox() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      setErr(true);
    }
  };
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    const combineId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combineId));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combineId), { message: [] });

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combineId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combineId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combineId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combineId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {}
    setUser(null);
    setUserName("");
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="ui-input-container">
          <input
            required=""
            placeholder="Search User..."
            className="ui-input"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={handleKey}
            value={userName}
          />
          <button className="ui-input-icon" onClick={handleSearch}>
            <SearchIcon />
          </button>
        </div>
      </div>
      {err && <span>User Not Found</span>}
      {user && (
        <div>
          <div
            className="flex pl-7 mt-4 py-4 items-center  hover:bg-gray-800 hover:text-white"
            onClick={handleSelect}
          >
            <img
              src={user.photoURL}
              alt="User Profile"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h6 className="userName font-bold ">{user.displayName}</h6>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="border-b-2 border-gray-300 mt-3 w-[90%]"></div>
          </div>
        </div>
      )}
    </div>
  );
}
