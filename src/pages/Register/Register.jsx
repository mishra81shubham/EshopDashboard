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
import { FaUserCircle } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [yourName, setYourName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inputIndex, setInputIndex] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const focusInput = (index) => {
    setInputIndex(index);
  };
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
      <section className="loginSection signUpSection">
        <div className="row">
          <div className="col-md-8 d-flex align-items-center flex-column part1 justify-content-center">
            <h1>
              BEST UX/UI FASHION{" "}
              <span className="text-sky">ECOMMERCE DASHBOARD</span> &amp; ADMIN
              PANEL
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
          </div>
          <div className="col-md-4 pr-0">
            <div className="loginBox">
              <div className="logo text-center">
                <img src={logo} width="60px" />
                <h5 className="font-weight-bold">Register a new account</h5>
              </div>
              <div className="wrapper mt-3 card border">
                <form>
                  <div
                    className={`form-group position-relative ${
                      inputIndex === 0 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <FaUserCircle />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter your name"
                      value={yourName}
                      onChange={(e) => setYourName(e.target.value)}
                      onFocus={() => focusInput(0)}
                      onBlur={() => setInputIndex(null)}
                      required
                      autoFocus
                    />
                  </div>
                  <div
                    className={`form-group position-relative ${
                      inputIndex === 1 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <MdEmail />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter your email"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      onFocus={() => focusInput(1)}
                      onBlur={() => setInputIndex(null)}
                      required
                    />
                  </div>
                  <div
                    className={`form-group position-relative ${
                      inputIndex === 2 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <RiLockPasswordFill />
                    </span>
                    <input
                      type={`${showPassword ? "text" : "password"}`}
                      className="form-control"
                      placeholder="enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => focusInput(2)}
                      onBlur={() => setInputIndex(null)}
                      required
                    />

                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="toggleShowPassword"
                    >
                      {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                    </span>
                  </div>
                  <div
                    className={`form-group position-relative ${
                      inputIndex === 3 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <MdVerifiedUser />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      onFocus={() => focusInput(3)}
                      onBlur={() => setInputIndex(null)}
                      required
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="toggleShowPassword"
                    >
                      {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                    </span>
                  </div>
                  <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1jaw3da">
                    <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium css-zun73v">
                      <input
                        className="PrivateSwitchBase-input css-1m9pwf3"
                        type="checkbox"
                        data-indeterminate="false"
                      />
                    </span>
                    <span className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-9l3uo3">
                      {" "}
                      I agree to the all Terms &amp; Condiotions
                    </span>
                  </label>
                  <div className="form-group">
                    <Button className="btn-blue btn-lg w-100 btn-big">
                      Sign Up
                    </Button>
                  </div>
                  <div className="form-group text-center mb-0">
                    <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                      <span className="line" />
                      <span className="txt">or</span>
                      <span className="line" />
                    </div>
                    <button className="w-100 btn-lg btn-big loginWithGoogle">
                      <img src={google} width="25px" /> &nbsp; Sign In with
                      Google
                    </button>
                  </div>
                </form>
                <span className="text-center d-block mt-3">
                  Don't have an account?
                  <Link className="link color ml-2" to="/login">
                    Sign In
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
