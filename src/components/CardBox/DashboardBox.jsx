import React from "react";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

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

const DashboardBox = ({
  color,
  icon,
  upperTitle,
  totalCount,
  lastMonth,
  backgroundIcon,
  actionButton,
  actionClick,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div
        className="dashboardBox"
        style={{
          backgroundImage: `linear-gradient(to right, ${color?.[0]}, ${color?.[1]})`,
        }}
      >
        <span className="chart">{backgroundIcon}</span>
        <div className="d-flex w-100">
          <div className="col1">
            <h4 className="text-white mb-0">{upperTitle}</h4>
            <span className="text-white">{totalCount}</span>
          </div>
          <div className="ml-auto">
            <span className="icon">{icon}</span>
          </div>
        </div>
        <div className="d-flex align-items-center w-100 bottomEle">
          <h6 className="text-white mb-0 mt-0">{lastMonth}</h6>
          <div className="ml-auto" />
        </div>
        <Button
          onClick={handleClick}
          className="ml-auto toggleIcon "
        >
          {actionButton}
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
    </>
  );
};

export default DashboardBox;
