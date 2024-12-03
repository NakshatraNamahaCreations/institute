import React from "react";
import { ProgressBar } from "react-bootstrap";
import { IoMdWallet } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

function Wallet() {

  const navigation = useNavigate();

  const handleNavigation = () => {
    navigation("/walletdetail/:id");
  };
  // Define columns for DataGrid
  const columns = [
    { field: "col1", headerName: "S.No.", width: 100 },
    {
      field: "col2",
      headerName: "Institue Name",
      width: 200,
      renderCell: (params) => <div>MGM Institue</div>,
    },
    {
        field: "col3",
        headerName: "Payment Date",
        width: 200,
        renderCell: (params) => (
          <div>
          <div >03/10/2024</div>
          </div>
        ),
      },
      {
        field: "col4",
        headerName: "Paymnet Amount",
        width: 200,
        renderCell: (params) => (
          <div>
          <div >Rs. 25,44,926</div>
          </div>
        ),
      },
      {
        field: "col5",
        headerName: "Total Balance",
        width: 200,
        renderCell: () =>  <div style={{ display: "flex", alignItems: "center" }}>
      <span>Rs. 25,44,926</span>
      <span
      onClick={handleNavigation}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "24px",
          height: "24px",
          marginLeft: "8px",
          backgroundColor: "red",
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
          <div className="col-md-2">
            <div className="card-dash">
              <div className="card-p-0d">
                <div>
                  <IoMdWallet style={{ fontSize: "30px" }} />
                </div>
                <div>Money Received</div>
              </div>
              <div className="rupee-s text-center mt-3 mb-3">
                Rs. <span>57,04,563</span>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="dif-0-r">
              <div className="total-e">
                <h5>Total Subscriptions </h5>
                <div className="d-flex align-items-center mb-2" style={{gap:"20px"}}>
                  <span>2022</span>
                  <span style={{ marginLeft: "10px", flexGrow: 1 }}>
                    <ProgressBar now={60} />
                  </span>
                  <span style={{
                        background: "grey",
                        padding: "3px 13px",
                        borderRadius: "5px",
                        color: "white",
                  }}>5k</span>
                </div>
                <div className="d-flex align-items-center mb-2" style={{gap:"20px"}}>
                  <span>2023</span>
                  <span style={{ marginLeft: "10px", flexGrow: 1 }}>
                    <ProgressBar now={40} />
                  </span>
                  <span style={{
                        background: "grey",
                        padding: "3px 13px",
                        borderRadius: "5px",
                        color: "white",
                  }}>8k</span>
                </div>
                <div className="d-flex align-items-center mb-2" style={{gap:"20px"}}>
                  <span>2024</span>
                  <span style={{ marginLeft: "10px", flexGrow: 1 }}>
                    <ProgressBar now={38} />
                  </span>
                  <span style={{
                        background: "grey",
                        padding: "3px 13px",
                        borderRadius: "5px",
                        color: "white",
                  }}>10k</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="wallet-table">
        <div className="px-3 mt-3">
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
        </div>
      </div>
    </div>
  );
}

export default Wallet;
