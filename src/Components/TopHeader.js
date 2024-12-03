import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { FaRegUserCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";

function TopHeader({ title }) {


const navigate = useNavigate('')


  const backHandler = () => {
    window.history.back();
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    navigate('/')
  };

  return (
    <div>
      <Navbar className="bg-body-tertiary px-2 mb-2">
        <Navbar.Brand href="#home" className="hgrt">
          <FaArrowLeft onClick={backHandler} />
        </Navbar.Brand>
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          
            <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <FaRegUserCircle style={{ fontSize: "30px" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem> */}
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TopHeader;
