import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { MdMenuOpen, MdOutlineMenu, MdOutlineWbSunny } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import SecurityIcon from "@mui/icons-material/Security";
import Logout from "@mui/icons-material/Logout";
import SearchBox from "../SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../utils/slices/authSlice";
import { toggleSidebar, toggleThemeMood } from "../../utils/slices/commonSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isToggleSidebar = useSelector(
    (state) => state.common.isToggleSidebar
  );
  const themeMode = useSelector((state)=> state.common.themeMode);
  console.log("themeMode++++",themeMode)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);


  const handleMenuOpenClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuOpenClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    dispatch(logout());
    setAnchorEl(null);
    navigate("/login");
  };
  useEffect(() => {
    document.body.classList.remove(themeMode === "light" ? "dark" : "light");
    document.body.classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            {/* ----- Logo wapper ------ */}
            <div className="col-sm-2 part1">
              <Link className="d-flex align-items-center logo" to="/">
                <img src={Logo} />
                <span className="ml-2">HOTASH</span>
              </Link>
            </div>

            <div className="col-sm-3 d-flex align-items-center part2 res-hide">
              <Button
                onClick={() => dispatch(toggleSidebar())}
                className="rounded-circle mr-3"
              >
                {isToggleSidebar == true ?  <MdOutlineMenu /> : <MdMenuOpen />}
              </Button>
              <SearchBox />
            </div>
            <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
              <Button onClick={() => dispatch(toggleThemeMood())} className="rounded-circle mr-3 ">
                <MdOutlineWbSunny />
              </Button>
              <div className="dropdownWrapper position-relative">
                <Button className="rounded-circle mr-3">
                  <FaRegBell />
                </Button>
              </div>
              <div className="myAccWrapper">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Button
                    onClick={handleMenuOpenClick}
                    className="myAcc d-flex align-items-center"
                  >
                    <div className="userImg">
                      <span className="rounded-circle">
                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                      </span>
                    </div>
                    <div className="userInfo res-hide">
                      <h4>Rinku Verma</h4>
                      <p className="mb-0">@rinkuv37</p>
                    </div>
                  </Button>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleMenuOpenClose}
                  onClick={handleMenuOpenClose}
                  slotProps={{
                    paper: {
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&::before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleMenuOpenClose}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    My Account
                  </MenuItem>
                  <MenuItem onClick={handleMenuOpenClose}>
                    <ListItemIcon>
                      <SecurityIcon fontSize="small" />
                    </ListItemIcon>
                    Reset Password
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
