import { Button } from "react-bootstrap";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { FaSearch } from "react-icons/fa";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { DataGrid } from "@mui/x-data-grid";
import { FaRegEdit } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Student() {
  const navigations = useNavigate();

  const rows = [
    {
      id: 1,
      col1: "1",
      col2: "John Doe",
      col3: "12/12/2024",
      col4: "ALLEN IIT JEE",
      col5: "JEE-MAINS",
    },
  ];

  const handleNavigation = () => {
    navigations("/students/:id");
  };

  const columns = [
    { field: "col1", headerName: "S.No.", width: 100 },
    { field: "col2", headerName: "Student Name", width: 200 },
    { field: "col3", headerName: "Joining Date", width: 200 },
    { field: "col4", headerName: "Institute Name", width: 200 },
    { field: "col5", headerName: "Batch Name", width: 200 },

    {
      field: "actions",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <div>
          <FaGreaterThan
            style={{ fontSize: "15px" }}
            onClick={handleNavigation}
          />
        </div>
      ),
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
          <DataGrid rows={rows} columns={columns} />
        </div>
      </Box>
    </div>
  );
}

export default Student;
