import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
function StudentPaymentWithId() {
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
          <div>12th</div>
        </div>
      ),
    },
    {
      field: "col4",
      headerName: "Joining Date",
      width: 200,
      renderCell: (params) => (
        <div>
          <div>25/11/2024</div>
        </div>
      ),
    },
    {
      field: "col5",
      headerName: "Additional Subscriptions",
      width: 200,
      renderCell: (params) => (
        <div>
          <div>JEE-Advanced Class 12th</div>
        </div>
      ),
    },
    {
      field: "col6",
      headerName: "Payment Date",
      width: 200,
      renderCell: () => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>20/11/2024</span>
          
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
  ];

  return (
    <div>
      <div className="container-fluid">
        <div
          className="row"
          style={{
            alignItems: "center",
            padding: "25px",
            borderBottom: "1px solid",
          }}
        >
          <div className="col-md-2">
            <div className="details-user">
              <Card.Img variant="top" src="../../user.png" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="details-user">
              <div className="student-name">Abhishek</div>
              <div className="student-name">
                Institute : <span className="kmm-tag">KMM Institute</span>
              </div>
              <div className="student-name">
                Joining Date - <span className="kmm-tag">12/11/2024</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="student-name">
              Email : <span className="kmm-tag">example@gmail.com</span>
            </div>
            <div className="student-name">
              Contact Number : <span className="kmm-tag">+9193393023</span>
            </div>
            <div className="student-name">
              Class : <span className="kmm-tag">12th</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="student-name">
              Address :{" "}
              <span className="kmm-tag">
                {" "}
                #52,100 Feet Rd,Kengeri,
                <br />
                Bangaluru,India,Karnatka (222-222)
              </span>
            </div>
          </div>
        </div>

        <div className="student-status">
          <h5 className="mb-2 pt-3">Payments and Subscriptions List</h5>
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
    </div>
  );
}

export default StudentPaymentWithId;
