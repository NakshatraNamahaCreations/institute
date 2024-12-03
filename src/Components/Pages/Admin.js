import { Button } from "react-bootstrap";
import React from "react";

import { FaSearch } from "react-icons/fa";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { DataGrid } from "@mui/x-data-grid";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Admin() {

const navigate = useNavigate()

  const rows = [
    {
      id: 1,
      col1: "1",
      col2: "John Doe",
      col3: "john@example.com",
      col4: "Admin",
      col5: "1234567890",
      col6: "Admin",
      col7: "2/12/2024",
    },
    {
      id: 2,
      col1: "2",
      col2: "Jane Smith",
      col3: "jane@example.com",
      col4: "User",
      col5: "9876543210",
      col6: "Admin",
      col7: "2/12/2024",
    },
    {
      id: 3,
      col1: "3",
      col2: "Sam Wilson",
      col3: "sam@example.com",
      col4: "Manager",
      col5: "1122334455",
      col6: "Admin",
      col7: "2/12/2024",
    },
  ];

  const columns = [
    { field: "col1", headerName: "S.No.", width: 100 },
    { field: "col2", headerName: "Name", width: 150 },
    { field: "col3", headerName: "Email", width: 200 },
    { field: "col4", headerName: "Role", width: 150 },
    { field: "col5", headerName: "Phone No", width: 150 },
    { field: "col6", headerName: "Created By", width: 150 },
    { field: "col7", headerName: "Created Date", width: 150 },
    {
      field: "actions",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <div>
          
            <IoCheckmarkCircleOutline style={{ fontSize: "20px",color:"green",marginRight: 8 }} onClick={handleOpen}/>
        
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
    navigate("/admin/category");
  };


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="px-3">
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <FaSearch className="search-icon" />
        </div>
        <Button className="add-btn" onClick={handleNavigate}>
          Create
        </Button>
      </div>
      <div className="row">
        <div className="col-md-8">
          {" "}
          <Box sx={{ width: "100%" }}>
            <div
              style={{ display: "flex", flexDirection: "column" }}
              className="pt-3"
            >
              <DataGrid rows={rows} columns={columns} />
            </div>
          </Box>
        </div>
        <div className="col-md-4">

        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="">
          <h5 className="">Define Rights for Users of the CRM</h5>
          <FormControlLabel control={<Checkbox />} label="Admin"  className="d-block"/>
          <FormControlLabel control={<Checkbox />} label="Teachers" className="d-block" />
          <FormControlLabel control={<Checkbox />} label="Students"  className="d-block"/>
          <FormControlLabel control={<Checkbox />} label="Test and Course Creation"  className="d-block"/>
          <FormControlLabel control={<Checkbox />} label="Batches Creation" className="d-block" />
          <FormControlLabel control={<Checkbox />} label="Product and Services" className="d-block" />
          <FormControlLabel control={<Checkbox />} label="Upload OMR Image or Excel sheet" className="d-block"/>
          <FormControlLabel control={<Checkbox />} label="Marketing" className="d-block"/>
          <FormControlLabel control={<Checkbox />} label="Payment and Subscription" className="d-block"/>
          <FormControlLabel control={<Checkbox />} label="Wallet" className="d-block"/>
          <FormControlLabel control={<Checkbox />} label="Tickets" className="d-block"/>
          <FormControlLabel control={<Checkbox />} label="Notifications" className="d-block"/>
          <FormControlLabel control={<Checkbox />} label="Report and Analytics" className="d-block"/>
        </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Admin;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
