import React from "react";
import "./style.css";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

export default function Login() {
  return (
    <div className="flex justify-center items-center mt-40">
      <div className="content">
        <div className="text">Login</div>
        <form action="#">
          <div className="field">
            <input required="" type="text" className="input" placeholder="User Name" />
            <span className="span">
              <PersonIcon sx={{fontSize: 30}}/>
            </span>
            <label className="label">Email or Phone</label>
          </div>
          <div className="field">
            <input required="" type="password" className="input" placeholder="Password" />
            <span className="span">
              <LockIcon sx={{fontSize: 30}}/>
            </span>
            <label className="label">Password</label>
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
