import React from "react";
import Button from "@mui/material/Button";
import { BsThreeDotsVertical } from "react-icons/bs";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Chart } from "react-google-charts";
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[300],
    }),
  },
}));
const DashboardGraphBox = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const data = [
    ["Task", "Hours per Day"],
    ["2020", 9],
    ["2022", 10],
    ["2023", 8],
    ["2024", 7],
  ];
  const options = {
    backgroundColor:"transparent",
    chartArea: {
        width: "100%",
        height: "100%",
      },
  };
  return (
    <>
      <div className="box graphBox">
        <div className="d-flex align-items-center w-100 bottomEle">
          <h6 className="text-white mb-0 mt-0">Total Sales</h6>
          <div className="ml-auto">
            <Button className="ml-auto toggleIcon" onClick={handleClick}>
              <BsThreeDotsVertical />
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                <EditIcon />
                Edit
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <FileCopyIcon />
                Duplicate
              </MenuItem>
              <Divider sx={{ my: 0.5 }} />
              <MenuItem onClick={handleClose} disableRipple>
                <ArchiveIcon />
                Archive
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <MoreHorizIcon />
                More
              </MenuItem>
            </StyledMenu>
          </div>
        </div>
        <h3 className="text-white font-weight-bold">$3,787,681.00</h3>
        <p>$3,578.90 in last month</p>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"180px"}
        />
      </div>
    </>
  );
};

export default DashboardGraphBox;
