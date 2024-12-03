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
import Swal from "sweetalert2";

function TermsConditions() {

  const handleClick = () => {
    Swal.fire({
      title: 'Successfully Create',
      // text: 'You clicked the button!',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };

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
      headerName: "Title",
      width: 200,
      renderCell: (params) => <div>Terms & Conditions</div>,
    },
      {
        field: "col4",
        headerName: "Terms & Conditions",
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </div>
        ),
      },
      {
        field: "col5",
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
            02/12/2024
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
                style={{ width: "250px", padding: "11px" }}
                onClick={handleOpen}
              >
                Create Terms & Conditions
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
            <h5 className="mb-2">Set Terms & Conditions</h5>
            <div className="row">
              <div className="mt-1">
                <div className="input-text px-2">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Name / Title</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </div>
                <div className="input-text">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Add Terms & Conditions</Form.Label>
                    <CKEditor
                      editor={ClassicEditor}
                      data={editorData}
                      onChange={handleEditorChange}
                    />
                  </Form.Group>
                </div>

               
                <div className="hvr-sweep-to-right" onClick={()=> {handleClose();handleClick()}}>Submit</div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>

         {/* Update Modal  */}
         <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="">
            <h5 className="mb-2">Update Terms & Conditions</h5>
            <div className="row">
              <div className="mt-1">
                <div className="input-text px-2">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Name / Title</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </div>
                <div className="input-text">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Terms & Conditions</Form.Label>
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

export default TermsConditions;

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
