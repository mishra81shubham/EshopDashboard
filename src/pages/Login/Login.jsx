import React, { useState } from "react";
import LoginBackground from "../../assets/images/backgroud.webp";
import logo from "../../assets/images/logo.png";
import google from "../../assets/images/google.png";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../utils/slices/authSlice";
import { IoMdEyeOff } from "react-icons/io";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [inputIndex, setInputIndex] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const focusInput= (index)=>{
    setInputIndex(index);
  }
  const handleLogin = (e) => {
    e.preventDefault();
    if (userName === "admin" && password === "admin") {
      dispatch(login());
      navigate("/");
    } else {
      setError("Invalid username or password");
      setTimeout(() => {
        setError("");
      }, 4000);
    }
  };
  return (
    <>
      <img src={LoginBackground} className="loginPatern" />
      <section className="loginSection">
        <div className="loginBox">
          <div className="logo text-center">
            <img src={logo} width="60px" />
            <h5 className="font-weight-bold">Login to Hotash</h5>
          </div>
          <div className="wrapper mt-3 card border">
            {error && <p className="loginError">{error}</p>}
            <form>
              <div className={`form-group position-relative ${inputIndex === 0 && 'focus'}`}>
                <span className="icon">
                  <MdEmail />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter your email"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  onFocus={()=>focusInput(0)}
                  onBlur={()=>setInputIndex(null)}
                  required
                  autoFocus
                />
              </div>
              <div className={`form-group position-relative ${inputIndex === 1 && 'focus'}`}>
                <span className="icon">
                  <RiLockPasswordFill />
                </span>
                <input
                  type={`${showPassword ? 'text' : 'password'}`}
                  className="form-control"
                  placeholder="enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={()=>focusInput(1)}
                  onBlur={()=>setInputIndex(null)}
                  required
                />
                <span onClick={()=>setShowPassword(!showPassword)} className="toggleShowPassword">
                 {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                </span>
              </div>
              <div className="form-group">
                <Button
                  onClick={handleLogin}
                  className="btn-blue btn-lg w-100 btn-big"
                >
                  Sign In
                </Button>
              </div>
              <div className="form-group text-center mb-0">
                <a className="link" href="/forgot-password">
                  FORGOT PASSWORD
                </a>
                <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                  <span className="line" />
                  <span className="txt">or</span>
                  <span className="line" />
                </div>
                <Button className="w-100 borderButton btn-lg btn-big loginWithGoogle">
                  <img src={google} width="25px" /> &nbsp; Sign In with Google
                </Button>
              </div>
            </form>
          </div>
          <div className="wrapper mt-3 card border footer p-3">
            <span className="text-center">
              Don't have an account?
              <Link className="link color ml-2" to="/signUp">
                Register
              </Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
