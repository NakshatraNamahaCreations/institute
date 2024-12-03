import React, { useRef, useState } from "react";
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

function Testimonials() {
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
    { field: "col1", headerName: "S.No.", width: 100 },
    {
      field: "col2",
      headerName: "Roll No",
      width: 200,
      renderCell: (params) => <div>0001</div>,
    },
    {
      field: "col3",
      headerName: "Student Name",
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
          Anil Dev
        </div>
      ),
    },
    {
      field: "col4",
      headerName: "Message",
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
          Testimonial for App
        </div>
      ),
    },
    {
      field: "col5",
      headerName: "JEE Main Rank",
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
          60721
        </div>
      ),
    },
    {
      field: "col6",
      headerName: "JEE Advanced Rank",
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
          37381
        </div>
      ),
    },
    {
      field: "col7",
      headerName: "Post",
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
          <Switch {...label} defaultChecked />
        </div>
      ),
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
            onClick={handleOpen1}
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
                Create Testimonial
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
            <h5 className="mb-2">Add Testimonials</h5>
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

export default Testimonials;

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
