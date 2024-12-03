import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { GoFileSymlinkFile } from "react-icons/go";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function UploadOMR() {
  const rows = [
    {
      id: 2,
      col1: "1",
      col2: "Physcis",
      col3: "11th",
      col4: "15/11/2024",
    },
  ];

  const columns = [
    { field: "col1", headerName: "S.No.", width: 100 },
    { field: "col2", headerName: "Subject", width: 200 },
    { field: "col3", headerName: "Class", width: 200 },
    { field: "col4", headerName: "Created Date", width: 200 },
   
    {
      field: "link",
      headerName: "Link",
      width: 200,
      renderCell: (params) => (
        <div>
          <GoFileSymlinkFile style={{ fontSize: "30px" }} />
        </div>
      ),
    },
  ];

  const navigation = useNavigate();

  const handleNavigation = () => {
    navigation("/inputbatchcrations");
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <Button
          className="add-btn"
          onClick={handleOpen}
          style={{ width: "200px" }}
        >
          Upload OMR sheet
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

      {/* Modal++++ */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="input-text">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Upload Document link</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </div>
          </Typography>
          <div className="hvr-sweep-to-right" onClick={handleClose}>
            Done
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default UploadOMR;

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
