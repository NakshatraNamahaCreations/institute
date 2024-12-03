import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ClassIcon from "@mui/icons-material/Class";
import SubjectIcon from "@mui/icons-material/Subject";
import ChapterIcon from "@mui/icons-material/MenuBook";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import TranslateIcon from "@mui/icons-material/Translate";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import { PiStudentBold } from "react-icons/pi";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { MdTextFields } from "react-icons/md";
import { MdOutlineBatchPrediction } from "react-icons/md";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { SiGooglemarketingplatform } from "react-icons/si";
import PaymentsIcon from "@mui/icons-material/Payments";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import SettingsIcon from "@mui/icons-material/Settings";
import { FaNoteSticky } from "react-icons/fa6";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { IoLogoAndroid } from "react-icons/io";
import HelpIcon from "@mui/icons-material/Help";

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
        <img src="https://christuniversity.in/images/logo.jpg" alt="icon" style={{width:"288px",padding:"21px"}} />
        </div>
        <Menu>
          <MenuItem
            active={activeItem === "dashboard"}
            onClick={() => handleMenuItemClick("dashboard")}
            style={
              activeItem === "dashboard"
                ? {
                    backgroundColor: "rgb(40 51 123)",
                    color: "white",
                    borderLeft: " 2px solid red",
                  }
                : {}
            }
          >
            {" "}
            <DashboardIcon style={{ marginRight: "10px" }} /> DashBoard{" "}
          </MenuItem>
          <MenuItem
            active={activeItem === "Admin"}
            onClick={() => handleMenuItemClick("Admin")}
            style={
              activeItem === "Admin"
                ? {
                    backgroundColor: "rgb(40 51 123)",
                    color: "white",
                    borderLeft: " 2px solid red",
                  }
                : {}
            }
          >
            <AdminPanelSettingsIcon style={{ marginRight: "10px" }} /> Admin{" "}
          </MenuItem>
          <SubMenu label="Master">
            <MenuItem
              active={activeItem === "class"}
              onClick={() => handleMenuItemClick("class")}
              style={
                activeItem === "class"
                  ? {
                      backgroundColor: "rgb(40 51 123)",
                      color: "white",
                      borderLeft: " 2px solid red",
                    }
                  : {}
              }
            >
              <ClassIcon style={{ marginRight: "10px" }} /> Class
            </MenuItem>
            <MenuItem
              active={activeItem === "subject"}
              onClick={() => handleMenuItemClick("subject")}
              style={
                activeItem === "subject"
                  ? {
                      backgroundColor: "rgb(40 51 123)",
                      color: "white",
                      borderLeft: " 2px solid red",
                    }
                  : {}
              }
            >
              <SubjectIcon style={{ marginRight: "10px" }} /> Subject
            </MenuItem>
            <MenuItem
              active={activeItem === "chapter"}
              onClick={() => handleMenuItemClick("chapter")}
              style={
                activeItem === "chapter"
                  ? {
                      backgroundColor: "rgb(40 51 123)",
                      color: "white",
                      borderLeft: " 2px solid red",
                    }
                  : {}
              }
            >
              <ChapterIcon style={{ marginRight: "10px" }} /> Chapter
            </MenuItem>
            <MenuItem
              active={activeItem === "sub-chapter"}
              onClick={() => handleMenuItemClick("sub-chapter")}
              style={
                activeItem === "sub-chapter"
                  ? {
                      backgroundColor: "rgb(40 51 123)",
                      color: "white",
                      borderLeft: " 2px solid red",
                    }
                  : {}
              }
            >
              <SubdirectoryArrowRightIcon style={{ marginRight: "10px" }} /> Sub
              Chapter
            </MenuItem>
            <MenuItem
              active={activeItem === "language"}
              onClick={() => handleMenuItemClick("language")}
              style={
                activeItem === "language"
                  ? {
                      backgroundColor: "rgb(40 51 123)",
                      color: "white",
                      borderLeft: " 2px solid red",
                    }
                  : {}
              }
            >
              <TranslateIcon style={{ marginRight: "10px" }} /> Test Languages
            </MenuItem>
            <MenuItem
              active={activeItem === "examtype"}
              onClick={() => handleMenuItemClick("examtype")}
              style={
                activeItem === "examtype"
                  ? {
                      backgroundColor: "rgb(40 51 123)",
                      color: "white",
                      borderLeft: " 2px solid red",
                    }
                  : {}
              }
            >
              <AssessmentIcon style={{ marginRight: "10px" }} /> Exam Type
            </MenuItem>
          </SubMenu>

          <MenuItem
            active={activeItem === "Teacher"}
            onClick={() => handleMenuItemClick("Teacher")}
            style={
              activeItem === "Teacher"
                ? {
                    backgroundColor: "rgb(40 51 123)",
                    color: "white",
                    borderLeft: " 2px solid red",
                  }
                : {}
            }
          >
            <CastForEducationIcon style={{ marginRight: "10px" }} /> Teachers{" "}
          </MenuItem>
          <MenuItem
            active={activeItem === "students"}
            onClick={() => handleMenuItemClick("students")}
            style={
              activeItem === "students"
                ? {
                    backgroundColor: "rgb(40 51 123)",
                    color: "white",
                    borderLeft: " 2px solid red",
                  }
                : {}
            }
          >
            <PiStudentBold style={{ marginRight: "10px", fontSize: "20px" }} />{" "}
            Students{" "}
          </MenuItem>
          <MenuItem
            active={activeItem === "questionmanagments"}
            onClick={() => handleMenuItemClick("questionmanagments")}
            style={
              activeItem === "questionmanagments"
                ? {
                    backgroundColor: "rgb(40 51 123)",
                    color: "white",
                    borderLeft: " 2px solid red",
                  }
                : {}
            }
          >
            <QuestionAnswerIcon style={{ marginRight: "10px" }} /> Questions
            Managment{" "}
          </MenuItem>

          <MenuItem
            active={activeItem === "test-creations"}
            onClick={() => handleMenuItemClick("test-creations")}
            style={
              activeItem === "test-creations"
                ? {
                    backgroundColor: "rgb(40 51 123)",
                    color: "white",
                    borderLeft: " 2px solid red",
                  }
                : {}
            }
          >
            <MdTextFields style={{ marginRight: "10px", fontSize: "20px" }} />{" "}
            Test Creations{" "}
          </MenuItem>
          <MenuItem
            active={activeItem === "batchescreations"}
            onClick={() => handleMenuItemClick("batchescreations")}
            style={
              activeItem === "batchescreations"
                ? {
                    backgroundColor: "rgb(40 51 123)",
                    color: "white",
                    borderLeft: " 2px solid red",
                  }
                : {}
            }
          >
            <MdOutlineBatchPrediction
              style={{ marginRight: "10px", fontSize: "20px" }}
            />{" "}
            Batches Creation{" "}
          </MenuItem>
          <MenuItem
            active={activeItem === "product-services"}
            onClick={() => handleMenuItemClick("product-services")}
            style={
              activeItem === "product-services"
                ? {
                    backgroundColor: "rgb(40 51 123)",
                    color: "white",
                    borderLeft: " 2px solid red",
                  }
                : {}
            }
          >
            <DesignServicesIcon
              style={{ marginRight: "10px", fontSize: "20px" }}
            />{" "}
            Product and Services{" "}
          </MenuItem>
          <MenuItem
            active={activeItem === "uploadimage"}
            onClick={() => handleMenuItemClick("uploadimage")}
            style={
              activeItem === "uploadimage"
                ? {
                    backgroundColor: "rgb(40 51 123)",
                    color: "white",
                    borderLeft: " 2px solid red",
                  }
                : {}
            }
          >
            <FileUploadIcon style={{ marginRight: "10px", fontSize: "20px" }} />{" "}
            Upload OMR Image{" "}
          </MenuItem>
          <MenuItem
            active={activeItem === "marketing"}
            onClick={() => handleMenuItemClick("marketing")}
            style={
              activeItem === "marketing"
                ? {
                    backgroundColor: "rgb(40 51 123)",
                    color: "white",
                    borderLeft: " 2px solid red",
                  }
                : {}
            }
          >
            <SiGooglemarketingplatform
              style={{ marginRight: "10px", fontSize: "20px" }}
            />{" "}
            Marketing{" "}
          </MenuItem>
          <MenuItem
            active={activeItem === "payment-subscriptions"}
            onClick={() => handleMenuItemClick("payment-subscriptions")}
            style={
              activeItem === "payment-subscriptions"
                ? {
                    backgroundColor: "rgb(40 51 123)",
                    color: "white",
                    borderLeft: " 2px solid red",
                  }
                : {}
            }
          >
            <PaymentsIcon style={{ marginRight: "10px" }} /> Payment and
            Subscriptions{" "}
          </MenuItem>
          <MenuItem
            active={activeItem === "Wallets"}
            onClick={() => handleMenuItemClick("Wallets")}
            style={
              activeItem === "Wallets"
                ? {
                    backgroundColor: "rgb(40 51 123)",
                    color: "white",
                    borderLeft: " 2px solid red",
                  }
                : {}
            }
          >
            <AccountBalanceWalletIcon style={{ marginRight: "10px" }} /> Wallets{" "}
          </MenuItem>
          <MenuItem
            active={activeItem === "ticket"}
            onClick={() => handleMenuItemClick("ticket")}
            style={
              activeItem === "ticket"
                ? {
                    backgroundColor: "rgb(40 51 123)",
                    color: "white",
                    borderLeft: " 2px solid red",
                  }
                : {}
            }
          >
            <ConfirmationNumberIcon style={{ marginRight: "10px" }} /> Tickets{" "}
          </MenuItem>
          <SubMenu
            label={
              <span>
                <SettingsIcon style={{ marginRight: "10px" }} /> App Settings
              </span>
            }
          >
            <MenuItem
              active={activeItem === "terms-conditions"}
              onClick={() => handleMenuItemClick("terms-conditions")}
              style={
                activeItem === "terms-conditions"
                  ? {
                      backgroundColor: "rgb(40 51 123)",
                      color: "white",
                      borderLeft: "2px solid red",
                    }
                  : {}
              }
            >
              <HelpIcon style={{ marginRight: "10px" }} /> Terms & Conditions
            </MenuItem>
            <MenuItem
              active={activeItem === "app-logo"}
              onClick={() => handleMenuItemClick("app-logo")}
              style={
                activeItem === "app-logo"
                  ? {
                      backgroundColor: "rgb(40 51 123)",
                      color: "white",
                      borderLeft: "2px solid red",
                    }
                  : {}
              }
            >
              <IoLogoAndroid
                style={{ marginRight: "10px", fontSize: "20px" }}
              />{" "}
              App Logo
            </MenuItem>
            <MenuItem
            active={activeItem === "testimonials"}
            onClick={() => handleMenuItemClick("testimonials")}
            style={
              activeItem === "testimonials"
                ? {
                    backgroundColor: "rgb(40 51 123)",
                    color: "white",
                    borderLeft: " 2px solid red",
                  }
                : {}
            }
          >
            <FaNoteSticky style={{ marginRight: "10px", fontSize: "20px" }} />{" "}
            Testimonials{" "}
          </MenuItem>
          </SubMenu>

        
        
          <MenuItem
            active={activeItem === "notifications"}
            onClick={() => handleMenuItemClick("notifications")}
            style={
              activeItem === "notifications"
                ? {
                    backgroundColor: "rgb(40 51 123)",
                    color: "white",
                    borderLeft: " 2px solid red",
                  }
                : {}
            }
          >
            <NotificationsActiveIcon style={{ marginRight: "10px" }} />{" "}
            Notifications{" "}
          </MenuItem>
          <MenuItem
            active={activeItem === "reportandanalytics"}
            onClick={() => handleMenuItemClick("reportandanalytics")}
            style={
              activeItem === "reportandanalytics"
                ? {
                    backgroundColor: "rgb(40 51 123)",
                    color: "white",
                    borderLeft: " 2px solid red",
                  }
                : {}
            }
          >
            <AnalyticsIcon style={{ marginRight: "10px" }} /> Report and
            Analytics{" "}
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Sidebarleft;
