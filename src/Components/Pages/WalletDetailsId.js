import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { FaSearch } from "react-icons/fa";
function WalletDetailsId() {
  // Define columns for DataGrid
  const columns = [
    { field: "col1", headerName: "S.No.", width: 100 },
    {
      field: "col2",
      headerName: "Payment Date",
      width: 200,
      renderCell: (params) => <div>03/10/2024</div>,
    },
    {
      field: "col3",
      headerName: "Payment Amount",
      width: 200,
      renderCell: (params) => (
        <div>
          <div>Rs. 25,44,926</div>
        </div>
      ),
    },
    {
      field: "col4",
      headerName: "Total Balance",
      width: 200,
      renderCell: (params) => (
        <div>
          <div>Rs. 25,44,936</div>
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
      col1: "2",
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
              <div className="student-name">KM Institute</div>
              <div className="student-name">
                Email : <span className="kmm-tag">infoKMi@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="student-name">
              Contact Number 1 : <span className="kmm-tag">+9193393023</span>
            </div>{" "}
            <div className="student-name">
              Contact Number 2 : <span className="kmm-tag">+9193393023</span>
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
        <div className="" style={{ padding: "20px" }}>
          <div className="row">
            <div className="col-md-6">
              {" "}
              <div className="mt-3">
                <h6
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    borderBottom: "1px solid black",
                    width: "fit-content",
                  }}
                >
                  Subscription Details
                </h6>
                <div className="sub-n-09">
                  <div className="mt-3">
                    Subscription Start Date :{" "}
                    <span
                      style={{
                        color: "#934e4e",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      20th September 2024
                    </span>
                  </div>
                  <div className="mt-3">
                    Next Payment Date :{" "}
                    <span
                      style={{
                        color: "#934e4e",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      20th Dec 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mt-3">
                <h6
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    borderBottom: "1px solid black",
                    width: "fit-content",
                  }}
                >
                  Payment Details
                </h6>
                <div className="sub-n-09">
                  <div className="mt-3">
                    Subscription Price:{" "}
                    <span
                      style={{
                        color: "#934e4e",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      Rs. 25,44,936
                    </span>
                  </div>
                  <div
                    className="mt-3"
                    style={{
                      width: "fit-content",
                      border: "1px solid grey",
                      padding: "5px 10px",
                      backgroundColor: "white",
                      borderRadius: "6px",
                    }}
                  >
                    Student Registered :{" "}
                    <span
                      style={{
                        color: "#934e4e",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      223
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wallet-table">
          <div className="px-3 mt-3">
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <h6
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  borderBottom: "1px solid black",
                  width: "fit-content",
                }}
              >
                All Subscriptions History
              </h6>
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

export default WalletDetailsId;
