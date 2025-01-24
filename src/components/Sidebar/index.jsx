import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { RiDashboardFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { FaProductHunt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { logout } from "../../utils/slices/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeTabMenu, setActiveTabMenu] = useState(1);
  const handleClickMenu = (index) => {
    setActiveTabMenu(activeTabMenu === index ? null : index);
  };
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <Button
              onClick={() => handleClickMenu(1)}
              className={`w-100 ${activeTabMenu === 1 ? "active" : ""}`}
            >
              <span className="icon">
                <RiDashboardFill />
              </span>
              Dashboard
            </Button>
          </Link>
        </li>
        <li>
          <Button
            onClick={() => handleClickMenu(2)}
            className={`w-100 ${activeTabMenu === 2 ? "active" : ""}`}
          >
            <span className="icon">
              <FaProductHunt />
            </span>
            Product
            <span className="arrow">
              <IoIosArrowForward />
            </span>
          </Button>
          <div className={`submenuWrapper ${activeTabMenu === 2 ? "colapse" : "colapsed"}`}>
            <ul className="submenu">
              <li>
                <Link to="/products">Product List</Link>
              </li>
              <li>
                <Link to="/product/details">Product View</Link>
              </li>
              <li>
                <Link to="/product/upload">Product Upload</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Button
            onClick={() => handleClickMenu(3)}
            className={`w-100 ${activeTabMenu === 3 ? "active" : ""}`}
          >
            <span className="icon">
              <FaShoppingCart />
            </span>
            Orders
            <span className="arrow">
              <IoIosArrowForward />
            </span>
          </Button>
          <div className={`submenuWrapper ${activeTabMenu === 3 ? "colapse" : "colapsed"}`}>
            <ul className="submenu">
              <li>
                <Link to="/products">Order List</Link>
              </li>
              <li>
                <Link to="/product/details">Order View</Link>
              </li>
              <li>
                <Link to="/product/upload">Order Upload</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/">
            <Button className="w-100">
              <span className="icon">
                <MdMessage />
              </span>
              Messages
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <Button className="w-100">
              <span className="icon">
                <FaBell />
              </span>
              Notifications
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <Button className="w-100">
              <span className="icon">
                <IoSettings />
              </span>
              Settings
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/Login">
            <Button className="w-100">
              <span className="icon">
                <FiLogOut />
              </span>
              Logout
            </Button>
          </Link>
        </li>
      </ul>
      <div className="logoutWrapper">
        <div className="logoutBox">
          <Button onClick={handleLogout} variant="contained">
            <RiLogoutCircleRLine /> Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
