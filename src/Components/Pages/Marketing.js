import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaRegEdit, FaSearch } from "react-icons/fa";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { MdDeleteForever } from "react-icons/md";
import Modal from "@mui/material/Modal";

function Marketing() {
  const navigation = useNavigate();

  const handleNavigation = () => {
    navigation("/inputbatchcrations");
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Define columns for DataGrid
  const columns = [
    { field: "col1", headerName: "S.No.", width: 100 },
    {
      field: "col2",
      headerName: "Banner",
      width: 200,
      renderCell: (params) => (
        <div>
          <img
            src="https://iau.edu.lc/wp-content/uploads/2014/06/banner.jpg"
            alt="banner"
            style={{ width: "100%", height: "auto", maxHeight: "50px" }}
          />
        </div>
      ),
    },

    {
      field: "col4",
      headerName: "Services",
      width: 200,
      renderCell: (params) => <div>Batches</div>,
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      renderCell: () => (
        <div
          style={{
            color: "white",
            background: "#68bc68e6",
            lineHeight:"35px",
            margin:"7px",
            padding: "0px 10px",
            width: "fit-content",
            borderRadius: "2px",
          }}
        >
          Active
        </div>
      ),
    },
    {
      field: "created",
      headerName: "Created Date",
      width: 200,
      renderCell: () => <div>02/12/2024</div>,
    },
    {
      field: "actions",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <div>
          <Button
            variant="primary"
            size="sm"
            style={{ marginRight: 8 }}
            // onClick={handleShow1}
          >
            <FaRegEdit style={{ fontSize: "20px" }} />
          </Button>
          <Button variant="danger" size="sm">
            <MdDeleteForever style={{ fontSize: "20px" }} />
          </Button>
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
      id: 2,
      col1: "2",
      col3: "Category B",
      col4: "Service B",
    },
  ];

  return (
    <div className="px-3">
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
          Create Banner
        </Button>
      </div>
      <Box sx={{ width: "100%" }}>
        <div
          style={{ display: "flex", flexDirection: "column" }}
          className="pt-3"
        >
          <DataGrid rows={rows} columns={columns} autoHeight />
        </div>
      </Box>

      {/* Modal  */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="" style={{ fontWeight: "500" }}>
              <h5>Create Banner</h5>
            </div>
            <div className="input-text">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Service</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </div>
            <div className="input-text">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Banner</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </div>
            <div className="hvr-sweep-to-right">Submit</div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Marketing;

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
