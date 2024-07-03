import React, { useState } from "react";
import "./style.css";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    const userName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, userName);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (err) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName: userName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName: userName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="content">
        <div className="text">Register</div>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <input
              required=""
              type="text"
              className="input"
              placeholder="User Name"
            />
            <span className="span">
              <PersonIcon sx={{ fontSize: 30 }} />
            </span>
          </div>
          <div className="field mb-[15px]">
            <input
              required=""
              type="email"
              className="input"
              placeholder="Email"
            />
            <span className="span">
              <AlternateEmailIcon sx={{ fontSize: 30 }} />
            </span>
          </div>
          <div className="field">
            <input
              required=""
              type={show === false ? "password" : "text"}
              className="input mb-5"
              placeholder="Password"
            />
            <span className="span">
              <LockIcon sx={{ fontSize: 30 }} />
            </span>
            <span className="show-password cursor-pointer">
              {show === false ? (
                <VisibilityIcon
                  sx={{ fontSize: 30 }}
                  onClick={() => setShow(!show)}
                />
              ) : (
                <VisibilityOffIcon
                  sx={{ fontSize: 30 }}
                  onClick={() => setShow(!show)}
                />
              )}
            </span>
          </div>
          <div>
            <input
              required=""
              type="file"
              placeholder="Choose a File"
              id="file"
              style={{ display: "none" }}
            />
            <div className="my-5 pl-2">
              <label
                htmlFor="file"
                className="cursor-pointer items-center flex"
              >
                <AddAPhotoIcon /> &nbsp; Add an Avtar
              </label>
            </div>
          </div>
          <button className="button">Sign Up</button>
          {err && <span>Something Went Wrong</span>}
          <div className="sign-up">
            Already Have an Account ?<Link to="/login"> Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
