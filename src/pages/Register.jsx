import React, { useState } from "react";
import "./style.css";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex justify-center items-center mt-40">
      <div className="content">
        <div className="text">Register</div>
        <form action="#">
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
          <div className="field mb-5">
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
          <div className="sign-up">
            Already Have an Account ?<a href="#"> Sign In</a>
          </div>
        </form>
      </div>
    </div>
  );
}
