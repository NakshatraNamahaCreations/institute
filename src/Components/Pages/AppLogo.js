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

function AppLogo() {
  const navigation = useNavigate();

  const handleNavigation = () => {
    navigation("/resloved-ticket");
  };

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
        headerName: "App Logo",
        width: 200,
        renderCell: (params) => (
          <img
          src="https://iau.edu.lc/wp-content/uploads/2014/06/banner.jpg"
          alt="banner"
          style={{ width: "50%", height: "auto", maxHeight: "50px" }}
        />
        ),
      },
      { field: "col3", headerName: "Created Date", width: 200 },
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
      col3: "02/12/2024",
      col4: "Service A",
    },
    {
      id: 2,
      col1: "2",
      col3: "02/12/2024",
      col4: "Service A",
    },
  ];

  const [editorData, setEditorData] = useState("");

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  return (
    <div>
      <div className="container-fluid">
        <div className="wallet-table">
          <div className="px-3 mt-3">
            <div className="d-flex" style={{ gap: "15px" }}>
              <Button
                className="add-btn"
                style={{ width: "200px", padding: "11px" }}
                onClick={handleOpen}
              >
                Created App Logo
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
      {/* Modal  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="">
                <div className="input-text">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Add App Logo</Form.Label>
                    <div className="input-text">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="file"
                          placeholder=""
                          ref={fileInputRef}
                          style={{ display: "none" }}
                        />

                        <div
                          className="add-photo"
                          onClick={handleFileClick}
                          style={{
                            width: "100%",
                            backgroundColor: "var(--bs-gray-300)",
                          }}
                        >
                          <p
                            style={{
                              color: "black",
                              fontSize: "15px",
                              fontWeight: "600",
                            }}
                          >
                            + Choose Logo image you want for your app
                          </p>
                        </div>
                      </Form.Group>
                    </div>
                  </Form.Group>
                </div>
                <div className="hvr-sweep-to-right">Submit</div>
             
            </div>
    
        </Box>
      </Modal>
   {/* Update Modal */}
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="">
                <div className="input-text">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Update App Logo</Form.Label>
                    <div className="input-text">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="file"
                          placeholder=""
                          ref={fileInputRef}
                          style={{ display: "none" }}
                        />

                        <div
                          className="add-photo"
                          onClick={handleFileClick}
                          style={{
                            width: "100%",
                            backgroundColor: "var(--bs-gray-300)",
                          }}
                        >
                          <p
                            style={{
                              color: "black",
                              fontSize: "15px",
                              fontWeight: "600",
                            }}
                          >
                            + Choose Logo image you want for your app
                          </p>
                        </div>
                      </Form.Group>
                    </div>
                  </Form.Group>
                </div>
                <div className="hvr-sweep-to-right">Submit</div>
             
            </div>
    
        </Box>
      </Modal>
    </div>
  );
}

export default AppLogo;

const style = {
  position: "absolute",
  borderRadius: "10px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: 4,
};
