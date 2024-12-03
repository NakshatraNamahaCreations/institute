import React from "react";
import { useRef, useState } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import { IoMdWallet } from "react-icons/io";
import { FaRegEdit, FaSearch } from "react-icons/fa";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Modal from "@mui/material/Modal";
import { MdDeleteForever } from "react-icons/md";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Swal from 'sweetalert2';

function Notification() {

  const handleClick = () => {
    Swal.fire({
      title: 'Successfully Sent',
      // text: 'You clicked the button!',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };

  const label = { inputProps: { "aria-label": "Switch demo" } };

  <Switch {...label} defaultChecked />;

  const navigation = useNavigate();

  const fileInputRef = useRef(null);
  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Define columns for DataGrid
  const columns = [
    {
      field: "col1",
      headerName: "S.No.",
      width: 200,
      renderCell: (params) => <div>1</div>,
    },
    {
      field: "col2",
      headerName: "Notification From",
      width: 200,
      renderCell: (params) => <div>Admin</div>,
    },
    {
      field: "col3",
      headerName: "Notification",
      width: 500,
      renderCell: (params) => (
        <div
          style={{
            maxHeight: "100px",
            overflow: "auto",
            overflowX: "hidden",
            padding: "8px",
            boxSizing: "border-box",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      ),
    },
    {
      field: "col4",
      headerName: "Created Date",
      width: 200,
      renderCell: (params) => (
        <div
          style={{
            maxHeight: "100px",
            overflow: "auto",
            overflowX: "hidden",
            padding: "8px",
            boxSizing: "border-box",
          }}
        >
          03/12/2024
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
      col1: "1",
      col3: "Category A",
      col4: "Service A",
    },
  ];

  const [editorData, setEditorData] = useState("");

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  return (
    <div>
      <div className="container-fluid">
        <div className="wallet-table">
          <div className="px-3 mt-3">
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
                <FaSearch className="search-icon" />
              </div>
              <Button
                className="add-btn"
                onClick={handleOpen}
                style={{ width: "200px" }}
              >
                Create Notification
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
          </div>
        </div>
      </div>
      {/* Add-Modal  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="">
            <h5 className="mb-2">Send communication via</h5>
            <div className="row">
              <div className="mt-1">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Push Notification"
                  style={{ marginRight: "20px" }}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="E-mail"
                  style={{ marginRight: "20px" }}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="SMS"
                  style={{ marginRight: "20px" }}
                />

                <div className="input-text mb-2">
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Choose category</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option value="11">All</option>
                      <option value="11">Class 12th</option>
                      <option value="11">Class 11th</option>
                      <option value="11">Class 10th</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="input-text ">
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </div>
                <div className="input-text ">
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>My Campaign title</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </div>
                <div className="input-text">
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Description</Form.Label>
                    <CKEditor
                      editor={ClassicEditor}
                      data={editorData}
                      onChange={handleEditorChange}
                    />
                  </Form.Group>
                </div>

                <div className="hvr-sweep-to-right" onClick={() => {handleClick();handleClose()}}>Submit</div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>

      {/* Update-Modal */}
      {/* Modal  */}
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="">
            <h5 className="mb-2">Update Testimonials</h5>
            <div className="row">
              <div className="mt-1">
                <div className="input-text ">
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Student Roll Number </Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </div>
                <div className="input-text ">
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>JEE Main Rank</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </div>
                <div className="input-text ">
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Student Name</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </div>
                <div className="input-text ">
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>JEE Advanced Rank</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </div>
                <div className="input-text">
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Message</Form.Label>
                    <CKEditor
                      editor={ClassicEditor}
                      data={editorData}
                      onChange={handleEditorChange}
                    />
                  </Form.Group>
                </div>

                <div className="hvr-sweep-to-right">Submit</div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Notification;

const style = {
  position: "absolute",
  borderRadius: "10px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: 4,
};
