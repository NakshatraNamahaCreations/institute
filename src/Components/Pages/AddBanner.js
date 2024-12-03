import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

function AddBanner() {
  const navigation = useNavigate();

  const handleNavigation = () => {
    navigation("/inputbatchcrations");
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Define columns for DataGrid
  const columns = [
    { field: "col1", headerName: "S.No.", width: 100 },
    {
      field: "col4",
      headerName: "Services",
      width: 200,
      renderCell: (params) => <div>Courses Page</div>,
    },
    {
        field: "col2",
        headerName: "Image",
        width: 200,
        renderCell: (params) => (
          <div>
            <img
              src="https://iau.edu.lc/wp-content/uploads/2014/06/banner.jpg"
              alt="banner"
              style={{ width: "100%", height: "auto", maxHeight: "50px" }}
            />
          </div>
        ),
      },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      renderCell: () => <div style={{ color: "green" }}>Active</div>,
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
      id: 2,
      col1: "2",
      col3: "Category B",
      col4: "Service B",
    },
  ];

  return (
    <div className="px-3">
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <FaSearch className="search-icon" />
        </div>
        <Button
          className="add-btn"
          onClick={handleOpen}
          style={{ width: "200px" }}
        >
          Add Banner
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
  );
}

export default AddBanner;

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
