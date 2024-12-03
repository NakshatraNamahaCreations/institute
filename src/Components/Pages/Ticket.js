import React from "react";
import { Button, ProgressBar } from "react-bootstrap";
import { IoMdWallet } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { IoTicket } from "react-icons/io5";
import { TiStopwatch } from "react-icons/ti";
import { TbMathAvg } from "react-icons/tb";
import { LiaCheckCircleSolid } from "react-icons/lia";

function Ticket() {
  const navigation = useNavigate();

  const handleNavigation = () => {
    navigation("/resloved-ticket");
  };
  // Define columns for DataGrid
  const columns = [
    { field: "col1", headerName: "S.No.", width: 100 },
    {
      field: "col2",
      headerName: "Ticket ID",
      width: 200,
      renderCell: (params) => <div>IN04943</div>,
    },
    {
      field: "col3",
      headerName: "Subject",
      width: 200,
      renderCell: (params) => (
        <div>
          <div>Login issue</div>
        </div>
      ),
    },
    {
      field: "col4",
      headerName: "Priority",
      width: 200,
      renderCell: (params) => (
        <div>
          <div style={{   color: "white",
            background: "#68bc68e6",
            lineHeight:"35px",
            margin:"7px",
            padding: "0px 10px",
            width: "fit-content",
            borderRadius: "2px",}}>High</div>
        </div>
      ),
    },
    {
      field: "col5",
      headerName: "Type",
      width: 200,
      renderCell: (params) => (
        <div>
          <div>App Admin</div>
        </div>
      ),
    },
    {
      field: "col6",
      headerName: "Request Date",
      width: 200,
      renderCell: (params) => (
        <div>
          <div>06-12/5.30pm</div>
        </div>
      ),
    },
    {
        field: "col7",
        headerName: "Assigned",
        width: 200,
        renderCell: (params) => (
          <div>
            <div  style={{
               
                backgroundColor:  "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                lineHeight:"35px",
                textAlign:"center",
                margin:"7px",
              }}>Assign / Unassign</div>
          </div>
        ),
      },
    {
      field: "col8",
      headerName: "Status",
      width: 200,
      renderCell: (params) => (
        <div>
          <div className=""
            style={{
              background: "#68bc68e6",
              lineHeight:"35px",
              margin:"7px",
              padding: "0px 10px",
              width: "fit-content",
              textAlign: "center",
              backgroundColor: "#4CAF50",
              color:"white",
              fontWeight:"600",
              borderRadius:"3px"
            }}
          >
            In progress
          </div>
        </div>
      ),
    },
  ];

  // Define rows for DataGrid
  const rows = [
    {
      id: 1,
      col1: "1",
      col3: "Category A",
      col4: "Service A",
    },
    {
      id: 1,
      col1: "1",
      col3: "Category A",
      col4: "Service A",
    },
  ];

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="card-dash">
              <div className="card-p-0d">
                <div>
                  <IoTicket style={{ fontSize: "30px" }} />
                </div>
                <div>Overall Tickets</div>
              </div>
              <div className="rupee-s text-center mt-3 mb-3">
                <span>400</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-dash">
              <div className="card-p-0d">
                <div>
                  <TiStopwatch style={{ fontSize: "30px" }} />
                </div>
                <div>Overdue Tickets</div>
              </div>
              <div className="rupee-s text-center mt-3 mb-3">
                <span>100</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-dash">
              <div className="card-p-0d">
                <div>
                  <TbMathAvg style={{ fontSize: "30px" }} />
                </div>
                <div>Avg response Time</div>
              </div>
              <div className="rupee-s text-center mt-3 mb-3">
                <span>25 mins</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-dash">
              <div className="card-p-0d">
                <div>
                  <LiaCheckCircleSolid style={{ fontSize: "30px" }} />
                </div>
                <div>Solved Tickets</div>
              </div>
              <div className="rupee-s text-center mt-3 mb-3">
                <span>300</span>
              </div>
            </div>
          </div>
        </div>
        <div className="wallet-table">
          <div className="px-3 mt-3">
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
                <FaSearch className="search-icon" />
              </div>
              <Button className="add-btn" style={{ width: "200px" }} onClick={handleNavigation}>
                Resolved Tickets
              </Button>
            </div>
            <Box sx={{ width: "100%" }}>
              <div
                style={{ display: "flex", flexDirection: "column" }}
                className="pt-3"
              >
                <DataGrid rows={rows} columns={columns} autoHeight />
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
