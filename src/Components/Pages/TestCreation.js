import { Button } from "react-bootstrap";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { FaSearch } from "react-icons/fa";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

function TestCreation() {
  const rows = [
    {
      id: 1,
      col1: "01",
      col2: "JEE Test 5",
      col4: "Kiru",
      col3: "12/12/2024",
    },
  ];

  const columns = [
    { field: "col1", headerName: "S.No.", width: 100 },
    { field: "col2", headerName: "Test Name", width: 200 },
    { field: "col3", headerName: "Created Date", width: 200 },
    { field: "col4", headerName: "Test Created By", width: 200 },

    
  ];


  const rows1 = [
    {
      id: 1,
      col1: "01",
      col2: "JEE Test 5 Format Name",
      col3: "60",
      col4: "3 Hrs.",
      col5: "100",
      col6: "12/12/2024",
    },
  ];

  const columns1 = [
    { field: "col1", headerName: "S.No.", width: 100 },
    { field: "col2", headerName: "Test Format Name", width: 200 },
    { field: "col3", headerName: "No of Questions", width: 200 },
    { field: "col4", headerName: "No of Hrs.", width: 200 },
    { field: "col5", headerName: "Total Marks", width: 200 },
    { field: "col6", headerName: "Created Date", width: 200 },
 
  ];

  const navigation = useNavigate();

  const handleNavigation = () => {
    navigation("/testtemplatecreations");
  };

  const [acc, setAcc] = useState(true);
  const [acc1, setAcc1] = useState('');

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
          Create Test Template
        </Button>
      </div>
      <div className="all-c-0">
        <div className={`${acc ? "text-d0" : "" }`} onClick={()=>{
          setAcc(true);
          setAcc1(false)
        }}>All Tests</div>
        <div  className={`${acc1 ? "text-d0" : "" }`} onClick={()=>{
          setAcc(false);
          setAcc1(true)
        }}>All Test Formats</div>
      </div>
      {acc ? (
        < div className="col-md-6">
          <Box sx={{ width: "100%" }}>
            <div
              style={{ display: "flex", flexDirection: "column" }}
              className="pt-3"
            >
              <DataGrid rows={rows} columns={columns} />
            </div>
          </Box>
        </div>
      ) : (
        <>
        {
          acc1 ? ( <div className="col-md-8">
            <Box sx={{ width: "100%" }}>
              <div
                style={{ display: "flex", flexDirection: "column" }}
                className="pt-3"
              >
                <DataGrid rows={rows1} columns={columns1} />
              </div>
            </Box>
          </div>):(<></>)
        }
        </>
      )}
    </div>
  );
}

export default TestCreation;
