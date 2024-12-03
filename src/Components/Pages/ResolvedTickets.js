import React from "react";
import { Button, ProgressBar } from "react-bootstrap";
import { IoMdWallet } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

function ReslovedTickets() {
  const navigation = useNavigate();

  const handleNavigation = () => {
    navigation("/walletdetail/:id");
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
          <div style={{ color: "white", fontWeight: "500", background: "#68bc68e6",
            lineHeight:"35px",
            margin:"7px",
            padding: "0px 10px",
            width: "fit-content", }}>High</div>
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
      headerName: "Solved Date",
      width: 200,
      renderCell: (params) => (
        <div>
          <div>07-12/5.30pm</div>
        </div>
      ),
    },
    {
      field: "col8",
      headerName: "Status",
      width: 200,
      renderCell: (params) => (
        <div>
          <div
            className=""
            style={{
              background: "#68bc68e6",
              lineHeight:"35px",
              margin:"7px",
              padding: "0px 10px",
              width: "fit-content",
              color:"white"
            }}
          >
         Complete
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

export default ReslovedTickets;
