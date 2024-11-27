import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { FaRegUserCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function TopHeader({ title }) {
  const backHandler = () => {
    window.history.back();
  };

  return (
    <div>
      <Navbar className="bg-body-tertiary px-2 mb-2">
        <Navbar.Brand href="#home">
          <FaArrowLeft onClick={backHandler} />
        </Navbar.Brand>
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <FaRegUserCircle style={{ fontSize: "30px" }} />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TopHeader;
