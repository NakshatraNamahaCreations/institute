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

function MasterSubject() {
  const rows = [
    {
      id: 1,
      col1: "1",
      col2: "Hindi",
      col3: "Admin",
      col4: "12/12/2024",
    },
    {
      id: 2,
      col1: "2",
      col2: "English",
      col3: "Admin",
      col4: "12/12/2024",
    },
  ];

  const columns = [
    { field: "col1", headerName: "S.No.", width: 100 },
    { field: "col2", headerName: "Subject Name", width: 200 },
    { field: "col3", headerName: "Created By", width: 200 },
    { field: "col4", headerName: "Created Date", width: 200 },

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
            onClick={handleShow1}
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  return (
    <div className="px-3">
      <div
        style={{ fontSize: "18px", fontWeight: "bold" }}
        className="mt-2 mb-2"
      >
        Subject-List
      </div>
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <FaSearch className="search-icon" />
        </div>
        <Button className="add-btn" onClick={handleShow}>
          Add
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Subject</Modal.Title>
        </Modal.Header>
        <div className="input-text px-2 mt-2">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Subject Name</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </div>
        {/* <div className="input-text px-2 mb-2">
          <Form.Label>Created By</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select a category for User</option>
            <option value="Admin">Admin</option>
            <option value="Teacher">Teacher</option>
          </Form.Select>
        </div> */}
        <Modal.Footer>
          <div className="hvr-sweep-to-right" onClick={handleClose}>
            Save
          </div>
        </Modal.Footer>
      </Modal>

      {/* <<<<<<<<<<Edit>>>>>>>> */}
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Update Subject</Modal.Title>
        </Modal.Header>
        <div className="input-text px-2 mt-2">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Subject Name</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </div>
        {/* <div className="input-text px-2 mb-2">
          <Form.Label>Created By</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select a category for User</option>
            <option value="Admin">Admin</option>
            <option value="Teacher">Teacher</option>
          </Form.Select>
        </div> */}
        <Modal.Footer>
          <div className="hvr-sweep-to-right" onClick={handleClose1}>
            Save
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MasterSubject;
