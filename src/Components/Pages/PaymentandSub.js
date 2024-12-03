import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

function PaymentandSub() {
  const navigation = useNavigate();

  const handleNavigation = () => {
    navigation("/payment-subscriptions/:id");
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Define columns for DataGrid
  const columns = [
    { field: "col1", headerName: "S.No.", width: 100 },
    {
      field: "col2",
      headerName: "Student Name",
      width: 200,
      renderCell: (params) => <div>Anurag</div>,
    },
    {
        field: "col3",
        headerName: "Class",
        width: 200,
        renderCell: (params) => (
          <div>
          <div >12th</div>
          </div>
        ),
      },
      {
        field: "col4",
        headerName: "Joining Date",
        width: 200,
        renderCell: (params) => (
          <div>
          <div >25/11/2024</div>
          </div>
        ),
      },
      {
        field: "col5",
        headerName: "Additional Subscriptions",
        width: 200,
        renderCell: (params) => (
          <div>
          <div >JEE-Advanced Class 12th</div>
          </div>
        ),
      },
    {
      field: "col6",
      headerName: "Contact details",
      width: 200,
      renderCell: () =>  <div style={{ display: "flex", alignItems: "center" }}>
      <span>+91 9473894558</span>
      <span
      onClick={handleNavigation}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "24px",
          height: "24px",
          marginLeft: "8px",
          backgroundColor: "#28327a",
          borderRadius: "50%",
          color: "white",
          fontSize: "16px",
        }}
      >
        &#x276F;
      </span>
    </div>,
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
    
  ];

  return (
    <div className="px-3">
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
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
  );
}

export default PaymentandSub;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
