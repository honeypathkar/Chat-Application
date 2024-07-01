import React, { useState } from "react";
import "./style.css";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="content">
        <div className="text">Login</div>
        <form action="#">
          <div className="field">
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
              className="input"
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
          <button className="button">Sign in</button>
          <div className="sign-up">
            Not a member?
            <a href="#"> Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
}
