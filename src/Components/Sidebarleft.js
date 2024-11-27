import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

function Sidebarleft() {
  const [activeItem, setActiveItem] = useState("");
  const navigate = useNavigate();

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
    navigate(`/${item.toLowerCase()}`);
  };

  return (
    <div>
      <Sidebar>
        <div className="">
          <p>Icons</p>
        </div>
        <Menu>
          <MenuItem
            active={activeItem === "dashboard"}
            onClick={() => handleMenuItemClick("dashboard")}
            style={
              activeItem === "dashboard"
                ? { backgroundColor: "#414042", color: "white" }
                : {}
            }
          >
            {" "}
            DashBoard{" "}
          </MenuItem>
          <MenuItem
            active={activeItem === "Admin"}
            onClick={() => handleMenuItemClick("Admin")}
            style={
              activeItem === "Admin"
                ? { backgroundColor: "#414042", color: "white" }
                : {}
            }
          >
            {" "}
            Admin{" "}
          </MenuItem>
          <SubMenu label="Master">
            <MenuItem
              active={activeItem === "class"}
              onClick={() => handleMenuItemClick("class")}
              style={
                activeItem === "class"
                  ? { backgroundColor: "#414042", color: "white" }
                  : {}
              }
            >
              {" "}
              Class
            </MenuItem>
            <MenuItem
              active={activeItem === "subject"}
              onClick={() => handleMenuItemClick("subject")}
              style={
                activeItem === "subject"
                  ? { backgroundColor: "#414042", color: "white" }
                  : {}
              }
            >
              {" "}
              Subject
            </MenuItem>
            <MenuItem
              active={activeItem === "chapter"}
              onClick={() => handleMenuItemClick("chapter")}
              style={
                activeItem === "chapter"
                  ? { backgroundColor: "#414042", color: "white" }
                  : {}
              }
            >
              {" "}
              Chapter
            </MenuItem>
            <MenuItem
              active={activeItem === "sub-chapter"}
              onClick={() => handleMenuItemClick("sub-chapter")}
              style={
                activeItem === "sub-chapter"
                  ? { backgroundColor: "#414042", color: "white" }
                  : {}
              }
            >
              {" "}
              Sub Chapter
            </MenuItem>
            <MenuItem
              active={activeItem === "language"}
              onClick={() => handleMenuItemClick("language")}
              style={
                activeItem === "language"
                  ? { backgroundColor: "#414042", color: "white" }
                  : {}
              }
            >
              {" "}
              Test Languages
            </MenuItem>
            <MenuItem
              active={activeItem === "examtype"}
              onClick={() => handleMenuItemClick("examtype")}
              style={
                activeItem === "examtype"
                  ? { backgroundColor: "#414042", color: "white" }
                  : {}
              }
            >
              {" "}
              Examp Type
            </MenuItem>
          </SubMenu>

          <MenuItem
            active={activeItem === "Teacher"}
            onClick={() => handleMenuItemClick("Teacher")}
            style={
              activeItem === "Teacher"
                ? { backgroundColor: "#414042", color: "white" }
                : {}
            }
          >
            {" "}
            Teachers{" "}
          </MenuItem>
          <MenuItem
            active={activeItem === "students"}
            onClick={() => handleMenuItemClick("students")}
            style={
              activeItem === "students"
                ? { backgroundColor: "#414042", color: "white" }
                : {}
            }
          >
            {" "}
            Students{" "}
          </MenuItem>
          <MenuItem
            active={activeItem === "Questions Managment"}
            onClick={() => handleMenuItemClick("Questions Managment")}
            style={
              activeItem === "Questions Managment"
                ? { backgroundColor: "#414042", color: "white" }
                : {}
            }
          >
            {" "}
            Questions Managment{" "}
          </MenuItem>

          <MenuItem
            active={activeItem === "Test Creations"}
            onClick={() => handleMenuItemClick("Test Creations")}
            style={
              activeItem === "Test Creations"
                ? { backgroundColor: "#414042", color: "white" }
                : {}
            }
          >
            {" "}
            Test Creations{" "}
          </MenuItem>
          <MenuItem
            active={activeItem === "Best Creations"}
            onClick={() => handleMenuItemClick("Best Creations")}
            style={
              activeItem === "Best Creations"
                ? { backgroundColor: "#414042", color: "white" }
                : {}
            }
          >
            {" "}
            Best Creations{" "}
          </MenuItem>
          <MenuItem
            active={activeItem === "Product and Service Creations"}
            onClick={() => handleMenuItemClick("Product and Service Creations")}
            style={
              activeItem === "Product and Service Creations"
                ? { backgroundColor: "#414042", color: "white" }
                : {}
            }
          >
            {" "}
            Product and Service Creations{" "}
          </MenuItem>
          <MenuItem
            active={activeItem === "Marketing"}
            onClick={() => handleMenuItemClick("Marketing")}
            style={
              activeItem === "Marketing"
                ? { backgroundColor: "#414042", color: "white" }
                : {}
            }
          >
            {" "}
            Marketing{" "}
          </MenuItem>
          <MenuItem
            active={activeItem === "Payment and Subscriptions"}
            onClick={() => handleMenuItemClick("Payment and Subscriptions")}
            style={
              activeItem === "Payment and Subscriptions"
                ? { backgroundColor: "#414042", color: "white" }
                : {}
            }
          >
            {" "}
            Payment and Subscriptions{" "}
          </MenuItem>
          <MenuItem
            active={activeItem === "Wallets"}
            onClick={() => handleMenuItemClick("Wallets")}
            style={
              activeItem === "Wallets"
                ? { backgroundColor: "#414042", color: "white" }
                : {}
            }
          >
            {" "}
            Wallets{" "}
          </MenuItem>
          <MenuItem
            active={activeItem === "Tickets"}
            onClick={() => handleMenuItemClick("Tickets")}
            style={
              activeItem === "Tickets"
                ? { backgroundColor: "#414042", color: "white" }
                : {}
            }
          >
            {" "}
            Tickets{" "}
          </MenuItem>
          <MenuItem
            active={activeItem === "App Settings"}
            onClick={() => handleMenuItemClick("App Settings")}
            style={
              activeItem === "App Settings"
                ? { backgroundColor: "#414042", color: "white" }
                : {}
            }
          >
            {" "}
            App Settings{" "}
          </MenuItem>
          <MenuItem
            active={activeItem === "Testimonials"}
            onClick={() => handleMenuItemClick("Testimonials")}
            style={
              activeItem === "Testimonials"
                ? { backgroundColor: "#414042", color: "white" }
                : {}
            }
          >
            {" "}
            Testimonials{" "}
          </MenuItem>
          <MenuItem
            active={activeItem === "Notifications"}
            onClick={() => handleMenuItemClick("Notifications")}
            style={
              activeItem === "Notifications"
                ? { backgroundColor: "#414042", color: "white" }
                : {}
            }
          >
            {" "}
            Notifications{" "}
          </MenuItem>
          <MenuItem
            active={activeItem === "Report and Analytics"}
            onClick={() => handleMenuItemClick("Report and Analytics")}
            style={
              activeItem === "Report and Analytics"
                ? { backgroundColor: "#414042", color: "white" }
                : {}
            }
          >
            {" "}
            Report and Analytics{" "}
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Sidebarleft;
