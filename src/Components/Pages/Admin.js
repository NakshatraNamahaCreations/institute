import { Button } from "react-bootstrap";
import React from "react";

import { FaSearch } from "react-icons/fa";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { DataGrid } from "@mui/x-data-grid";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function Admin() {
  const rows = [
    {
      id: 1,
      col1: "1",
      col2: "John Doe",
      col3: "john@example.com",
      col4: "Admin",
      col5: "1234567890",
    },
    {
      id: 2,
      col1: "2",
      col2: "Jane Smith",
      col3: "jane@example.com",
      col4: "User",
      col5: "9876543210",
    },
    {
      id: 3,
      col1: "3",
      col2: "Sam Wilson",
      col3: "sam@example.com",
      col4: "Manager",
      col5: "1122334455",
    },
  ];

  const columns = [
    { field: "col1", headerName: "S.No.", width: 100 },
    { field: "col2", headerName: "Name", width: 150 },
    { field: "col3", headerName: "Email", width: 200 },
    { field: "col4", headerName: "Role", width: 150 },
    { field: "col5", headerName: "Phone No", width: 150 },
    {
      field: "actions",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <div>
          <Button variant="primary" size="sm" style={{ marginRight: 8 }}>
            <FaRegEdit style={{ fontSize: "20px" }} />
          </Button>
          <Button variant="danger" size="sm">
            <MdDeleteForever style={{ fontSize: "20px" }} />
          </Button>
        </div>
      ),
    },
  ];

  const handleNavigate = () => {
    window.location.href = "/admin/category";
  };

  return (
    <div className="px-3">
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <FaSearch className="search-icon" />
        </div>
        <Button className="add-btn" onClick={handleNavigate}>
          Add
        </Button>
      </div>
      <Box sx={{ width: "100%" }}>
        <div
          style={{ display: "flex", flexDirection: "column" }}
          className="pt-3"
        >
          <DataGrid rows={rows} columns={columns} />
        </div>
      </Box>
    </div>
  );
}

export default Admin;
