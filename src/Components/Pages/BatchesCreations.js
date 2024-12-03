import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function BatchesCreations() {
  const rows = [
    {
      id: 2,
      col1: "1",
      col2: "JEE Batch 5",
      col3: "12/12/2024",
      col4: "15/12/2024",
      col5: "Chaubey",
    },
  ];

  const columns = [
    { field: "col1", headerName: "S.No.", width: 100 },
    { field: "col2", headerName: "Batch Name", width: 200 },
    { field: "col3", headerName: "Created Date", width: 200 },
    { field: "col4", headerName: "Valid Till ", width: 200 },
    { field: "col5", headerName: "Batch Created By", width: 200 },
    // { field: "col6", headerName: "Sub-Chapter", width: 200 },
    // { field: "col7", headerName: "Created-Date", width: 200 },

  
  ];

  const navigation = useNavigate();

  const handleNavigation = () => {
    navigation("/inputbatchcrations");
  };

  return (
    <div className="px-3">
      {/* <div
        style={{ fontSize: "18px", fontWeight: "bold" }}
        className="mt-2 mb-2"
      >
        Question-List
      </div> */}
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <FaSearch className="search-icon" />
        </div>
        <Button className="add-btn" onClick={handleNavigation}>
          Create Batch
        </Button>
      </div> 
      <div className="col-md-8">        
      <Box sx={{ width: "100%" }}>
        <div
          style={{ display: "flex", flexDirection: "column" }}
          className="pt-3"
        >
          <DataGrid rows={rows} columns={columns} />
        </div>
      </Box>
      </div>     
    </div>
  );
}

export default BatchesCreations;
