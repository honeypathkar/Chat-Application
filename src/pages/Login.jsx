import React, { useState } from "react";
import "./style.css";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import Loader from "../components/Loader";

export default function Login() {
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      setLoading(false);
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="content">
        <div className="text">Login</div>
        <form onSubmit={handleSubmit}>
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
          <div className="flex justify-center">{loading && <Loader />}</div>
          {err && <span>Something Went Wrong</span>}
          <div className="sign-up">
            Not a member?
            <Link to="/register"> Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
