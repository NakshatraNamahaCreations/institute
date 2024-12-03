import { Button } from "react-bootstrap";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { FaSearch } from "react-icons/fa";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { DataGrid } from "@mui/x-data-grid";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function ProductServices() {
  const rows = [
    {
      id: 1,
      col1: "01",
      col2: "JEE Advance series 1",
      col3: "11555 INR",
      col4: "12/12/2024",
    },
  ];

  const columns = [
    { field: "col1", headerName: "S.No.", width: 100 },
    { field: "col2", headerName: "Product", width: 200 },
    { field: "col3", headerName: "Price", width: 200 },
    { field: "col4", headerName: "Created-Date", width: 200 },

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

  const navigation = useNavigate();

  const handleNavigation = () => {
    navigation("/product-services-test");
  };

  return (
    <div className="px-3">
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <FaSearch className="search-icon" />
        </div>
        <Button
          className="add-btn"
          onClick={handleNavigation}
          style={{ width: "200px" }}
        >
          Create Test Series
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

export default ProductServices;
