import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DataGrid } from "@mui/x-data-grid";
import { FaSearch } from "react-icons/fa";
import FormGroup from '@mui/material/FormGroup';


const TestTemplateCreation = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const fileInputRef = useRef(null);
  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const tabs = [
    { id: 0, label: "BASIC DETAILS" },
    { id: 1, label: "CREATE SECTIONS" },
    { id: 2, label: "ADD QUESTIONS" },
    { id: 3, label: "SECTION DETAILS" },
    { id: 4, label: "PREVIEW" },
    { id: 5, label: "ASSIGN BATCH" },
  ];

  const tabs1 = [
    { id: 0, label: "PHYSICS" },
    { id: 1, label: "CHEMISTRY" },
    { id: 2, label: "MATH" },
  ];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const navigationHandle = () => {
    navigate("/addquestion");
  };

  const handlenavigation = () => {
    navigate("/addquestiondetails");
  };

  const rows = [
    {
      id: 1,
      col1: "01",
      col2: "279",
      col3: "Batch Name 012",
      col4: "2024",
      col5: "12/12/2024",
      col6: "29/12/2024",
      col7: "Unassigned",
    },
  ];

  const columns = [
    { field: "col1", headerName: "S.No.", width: 100 },
    { field: "col2", headerName: "Batch ID", width: 200 },
    { field: "col3", headerName: "Batch Name", width: 200 },
    { field: "col4", headerName: "Year", width: 200 },
    { field: "col5", headerName: "Valid From", width: 200 },
    { field: "col6", headerName: "Valid Till", width: 200 },
    { field: "col7", headerName: "Batch Status", width: 200 },

    // {
    //   field: "actions",
    //   headerName: "Action",
    //   width: 200,
    //   renderCell: (params) => (
    //     <div>
    //       <div>
    //         <MdKeyboardArrowRight />
    //       </div>
    //     </div>
    //   ),
    // },
  ];

  return (
    <div className="template-tab">
      <div className="col-md-offset-3 ">
        <div className="tab" role="tabpanel">
          {/* Nav tabs */}
          <ul className="nav nav-tabs" role="tablist">
            {tabs.map((tab) => (
              <li className="nav-item" key={tab.id}>
                <button
                  className={`nav-link ${step === tab.id ? "active" : ""}`}
                  onClick={() => setStep(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content for each step */}
      <div className="tab-content">
        {step === 0 && (
          <div className="row">
            <h5 className="mb-4 px-5">Enter Batch Details</h5>
            <div className="col-md-6 mt-3">
              <div className="input-text px-5">
                <Form.Group className="mb-3" controlId="templateName">
                  <Form.Label>Test Template Name</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="input-text px-5">
                <Form.Group className="mb-3" controlId="testDuration">
                  <Form.Label>Test Duration (in mins)</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="input-text px-5">
                <Form.Group controlId="testType">
                  <Form.Label>Test Type</Form.Label>
                  <Form.Select aria-label="Select Test Type">
                    <option value="offline">Offline</option>
                    <option value="online">Online</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="input-text px-5">
                <Form.Group className="mb-3" controlId="numSections">
                  <Form.Label>Number of Sections</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="input-text px-5">
                <Form.Group className="mb-3" controlId="totalMarks">
                  <Form.Label>Total Marks</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div
                className="hvr-sweep-to-right"
                onClick={() => setStep(1)} // Move to next step
                style={{
                  marginTop: "90px",
                  marginLeft: "51px",
                }}
              >
                Next
              </div>
            </div>
          </div>
        )}
        {step === 1 && (
          <div className="row">
            <div className="input-quest">
              <div className="row">
                <div className="col-md-3">
                  <div className="input-det">
                    <h6 className="mb-4">All Sections</h6>
                    <div className="section-teplate">
                      <div
                        className=""
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div>Section 1</div>
                        <div
                          className=""
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <FaRegEdit style={{ fontSize: "20px" }} />
                          <MdDeleteForever style={{ fontSize: "20px" }} />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-5">
                          <div>Section Title:</div>
                        </div>
                        <div className="col-md-7">
                          <div className="singal-s">SQC</div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-5">
                          <div>Question Type:</div>
                        </div>
                        <div className="col-md-7">
                          <div className="singal-s">
                            Single Choice Questions
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-5">
                          <div>No. of Questions:</div>
                        </div>
                        <div className="col-md-7">
                          <div className="singal-s">20</div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-5">
                          <div>Min./Max Questions to be attended:</div>
                        </div>
                        <div className="col-md-7">
                          <div className="singal-s">2/8</div>
                        </div>
                      </div>
                    </div>

                    <div className="section-teplate">
                      <div
                        className=""
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div>Section 1</div>
                        <div
                          className=""
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <FaRegEdit style={{ fontSize: "20px" }} />
                          <MdDeleteForever style={{ fontSize: "20px" }} />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-5">
                          <div>Section Title:</div>
                        </div>
                        <div className="col-md-7">
                          <div className="singal-s">SQC</div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-5">
                          <div>Question Type:</div>
                        </div>
                        <div className="col-md-7">
                          <div className="singal-s">
                            Single Choice Questions
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-5">
                          <div>No. of Questions:</div>
                        </div>
                        <div className="col-md-7">
                          <div className="singal-s">20</div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-5">
                          <div>Min./Max Questions to be attended:</div>
                        </div>
                        <div className="col-md-7">
                          <div className="singal-s">2/8</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="input-det question-input">
                    <h6 className="mb-4">Configure Test Sections</h6>

                    <div className="input-text">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Section Name</Form.Label>
                        <Form.Control type="text" placeholder="" />
                      </Form.Group>
                    </div>

                    <div className="input-text mt-3">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Question Type</Form.Label>
                        <Form.Select aria-label="Default select example ">
                          <option value="11"></option>
                          <option value="12"></option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                    <div className="input-text">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>
                          Number of Questions (Across all subjects)
                        </Form.Label>
                        <Form.Control type="text" placeholder="" />
                      </Form.Group>
                    </div>
                    <div className="input-text">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Marks for correct answer</Form.Label>
                        <Form.Control type="text" placeholder="" />
                      </Form.Group>
                    </div>
                    <div className="input-text">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Negative Marking (optional)</Form.Label>
                        <Form.Control type="text" placeholder="" />
                      </Form.Group>
                    </div>
                    <div className="input-text">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Min. Questions to be answered</Form.Label>
                        <Form.Control type="text" placeholder="" />
                      </Form.Group>
                    </div>
                    <div className="input-text">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Marks per sections</Form.Label>
                        <Form.Control type="text" placeholder="" />
                      </Form.Group>
                    </div>
                    <div
                      className="hvr-sweep-to-right"
                      style={{ backgroundColor: "#1976d27d" }}
                      onClick={() => setStep(2)}
                    >
                      Save Section{" "}
                    </div>
                    <div
                      className="hvr-sweep-to-right"
                      style={{ backgroundColor: "#1976d27d" }}
                      onClick={() => setStep(2)}
                    >
                      Save Section & Add Sections
                    </div>
                    <div className="hvr-sweep-to-right ">Submit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Additional steps */}
        {step === 2 && (
          <div className="row">
            <div className="row">
              <h5 className="mb-4 px-5">Curriculum Details</h5>
              <div className="col-md-4 mt-3">
                <div className="input-text px-5">
                  <Form.Group className="mb-3" controlId="templateName">
                    <Form.Label>Class</Form.Label>
                    <Form.Select aria-label="Select Test Type">
                      {/* <option value="offline">11th</option>
                    <option value="online">12th</option> */}
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-4 mt-3">
                <div className="input-text px-5">
                  <Form.Group className="mb-3" controlId="templateName">
                    <Form.Label>Subject</Form.Label>
                    <Form.Select aria-label="Select Test Type">
                      {/* <option value="offline">11th</option>
                    <option value="online">12th</option> */}
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-4 mt-3">
                <div className="input-text px-5">
                  <Form.Group className="mb-3" controlId="templateName">
                    <Form.Label>Chapter</Form.Label>
                    <Form.Select aria-label="Select Test Type">
                      {/* <option value="offline">11th</option>
                    <option value="online">12th</option> */}
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-4 mt-3">
                <div className="input-text px-5">
                  <Form.Group className="mb-3" controlId="templateName">
                    <Form.Label>Sub Chapter</Form.Label>
                    <Form.Select aria-label="Select Test Type">
                      {/* <option value="offline">11th</option>
                    <option value="online">12th</option> */}
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-4 mt-3">
                <div className="input-text px-5">
                  <Form.Group className="mb-3" controlId="templateName">
                    <Form.Label>Question Type</Form.Label>
                    <Form.Select aria-label="Select Test Type">
                      {/* <option value="offline">11th</option>
                    <option value="online">12th</option> */}
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-4 mt-3">
                <div className="input-text "></div>
              </div>

              <div className="col-md-4 mt-3">
                <div
                  className="hvr-sweep-to-right "
                  style={{ backgroundColor: "#1976d27d" }}
                  onClick={handleOpen}
                >
                  Get Questions from Question Bank{" "}
                </div>
              </div>
              <div className="col-md-3 mt-3">
                {" "}
                <div
                  className="hvr-sweep-to-right "
                  style={{ backgroundColor: "#1976d27d" }}
                  onClick={handleOpen1}
                >
                  Upload From File
                </div>
              </div>
              <div className="col-md-3 mt-3">
                {" "}
                <div className="hvr-sweep-to-right " onClick={navigationHandle}>
                  Add Questions
                </div>
              </div>
            </div>
            <div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Question Section
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Question Selection{" "}
                    <span style={{ color: "red" }}>
                      (only for quesions bank)
                    </span>
                  </Typography>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <FormControlLabel control={<Checkbox />} label="Auto" />
                    <FormControlLabel control={<Checkbox />} label="Manual" />
                  </div>
                  <div
                    className="hvr-sweep-to-right "
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "8px 100px",
                    }}
                  >
                    Submit
                  </div>
                </Box>
              </Modal>
            </div>

            <div>
              <Modal
                open={open1}
                onClose={handleClose1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Choose Excel for question
                  </Typography>
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
                          + Choose a File
                        </p>
                      </div>
                    </Form.Group>
                  </div>
                  <div
                    className="hvr-sweep-to-right "
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "8px 100px",
                    }}
                    onClick={handlenavigation}
                  >
                    Submit
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="row">
            <div className="">
              <h5 className="mb-4 ">Sections</h5>
              <div className="fuiw mb-3">
                <div className="fhd" style={{ width: "fit-content" }}>
                  <div className="">SQC</div>
                  <div className="">Total Questions:10</div>
                  <div className="">
                    Status: <span style={{ color: "green" }}>Compelete</span>
                  </div>
                </div>
                <div className="fhd" style={{ width: "fit-content" }}>
                  <div className="">SQC</div>
                  <div className="">Total Questions:15</div>
                  <div className="">
                    Status: <span style={{ color: "green" }}>Compelete</span>
                  </div>
                </div>
              </div>
              <div className="col-md-offset-3 ">
                <div className="tab" role="tabpanel">
                  {/* Nav tabs */}
                  <ul className="nav nav-tabs" role="tablist">
                    {tabs1.map((tab) => (
                      <li className="nav-item op-0" key={tab.id}>
                        <button
                          className={`nav-link ${
                            step === tab.id ? "active-0" : ""
                          }`}
                          // ÷onClick={() => setStep(tab.id)}
                        >
                          {tab.label}
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="row">
                    <div className="col-md-8">
                      <Accordion defaultExpanded>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                        >
                          <Typography>Q-8 41-486-19778</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            In comparison with the electrostatic force between
                            two electrons, the electrostatic force between two
                            protons is:
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2-content"
                          id="panel2-header"
                        >
                          <Typography>Q-9 41-486-19778</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2-content"
                          id="panel2-header"
                        >
                          <Typography>Q-10 41-486-19778</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                    <div className="col-md-4 mt-3"></div>
                    <div className="col-md-3 mt-3">
                      <div
                        className="hvr-sweep-to-right "
                        onClick={() => setStep(2)}
                        style={{ backgroundColor: "#283563" }}
                      >
                        Back
                      </div>{" "}
                      <div
                        className="hvr-sweep-to-right "
                        onClick={() => setStep(4)}
                      >
                        Next
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="row">
            <div className="">
              <h5 className="mb-4">Test Details</h5>
              <div className="title-p">
                <div className="total-marks mb-3">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="demo-0">
                        <h6>Title</h6>
                        <div style={{ color: "#283563" }}>DEMO the 20</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="demo-0">
                        <h6>Duration</h6>
                        <div style={{ color: "#283563" }}>40</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="demo-0">
                        <h6>Total Marks</h6>
                        <div style={{ color: "#283563" }}>40</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="demo-0">
                        <h6>Class</h6>
                        <div style={{ color: "#283563" }}>12th</div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      borderBottom: "1px solid",
                      paddingTop: "16px",
                    }}
                  ></div>
                </div>
                <div className="total-marks mb-3">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="demo-0">
                        <h6>Test Type</h6>
                        <div style={{ color: "#283563" }}>ONLINE</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="demo-0">
                        <h6>Status</h6>
                        <div style={{ color: "#283563" }}>Incompelete</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="demo-0">
                        <h6>Print Questions Paper</h6>
                        <div
                          style={{
                            color: "#283563",
                            border: "1px solid",
                            borderRadius: "5px",
                            width: "fit-content",
                            padding: "4px",
                          }}
                        >
                          1 question per tow
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="demo-0">
                        <h6>Class</h6>
                        <div style={{ color: "#283563" }}>12th</div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      borderBottom: "1px solid",
                      paddingTop: "16px",
                    }}
                  ></div>
                </div>
                <div className="total-marks mb-3">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="demo-0">
                        <h6>Section Details</h6>
                        <div style={{ color: "#283563" }}></div>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="demo-0 text-center">
                        <h6>Upload Test Banner Image for App</h6>
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
                              }}
                            >
                              <p
                                style={{
                                  color: "black",
                                  fontSize: "15px",
                                  fontWeight: "600",
                                }}
                              >
                                + Upload jpg.file Size with:350px and
                                Height:150px
                              </p>
                            </div>
                          </Form.Group>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h5 className="mt-4">Batch Details</h5>
              <div className="row tab" role="tabpanel">
                {/* Nav tabs */}
                <ul
                  className="col-md-6 nav nav-tabs"
                  role="tablist"
                  style={{
                    justifyContent: "space-around",
                    backgroundColor: "#283563",
                    borderBottomLeftRadius: "7px",
                  }}
                >
                  <li className="file-content">
                    <button className="nav-link tyrex">Batch ID</button>
                  </li>
                  <li className="file-content">
                    <button className="nav-link tyrex">Batch Name</button>
                  </li>
                  <li className="file-content">
                    <button className="nav-link tyrex">Year</button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 mt-3">
              <div
                className="hvr-sweep-to-right "
                onClick={() => setStep(3)}
                style={{ backgroundColor: "#283563" }}
              >
                Back
              </div>{" "}
              <div className="hvr-sweep-to-right " onClick={() => setStep(5)}>
                Next
              </div>
            </div>
          </div>
        )}
        {step === 5 && (
          <>
          <div className="row">
             <div className="search-container"style={{width:"365px",padding:"5px"}}>
          <input type="text" placeholder="Search..." className="search-input" />
          <FaSearch className="search-icon" />
        </div>
            <Box sx={{ width: "100%" }}>
              <div
                style={{ display: "flex", flexDirection: "column" }}
                className="pt-3"
              >
                <DataGrid rows={rows} columns={columns} />
              </div>
            </Box>
          </div>
          <div className="assign-09 px-2 py-2">
          <h6 className="mb-2 ">Assign Test Type</h6>
          <FormGroup>
      <FormControlLabel  control={<Checkbox defaultChecked />} label="Online" />
      <FormControlLabel  control={<Checkbox defaultChecked />} label="Offline" />
      <FormControlLabel  control={<Checkbox defaultChecked />} label="Both" />
    </FormGroup>
          </div>
          <div className="col-md-3 mt-3">
              <div
                className="hvr-sweep-to-right "
                onClick={() => setStep(4)}
                style={{ backgroundColor: "#283563" }}
              >
                Back
              </div>{" "}
              <div className="hvr-sweep-to-right " onClick={() => navigate("/test-creations")}>
                Save Test
              </div>
            </div>
          </>
        )}
      </div>

      {/* Modals */}
    </div>
  );
};

export default TestTemplateCreation;

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
