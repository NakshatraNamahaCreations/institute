import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function InputBatchesCreations() {
  const fileInputRef = useRef(null);
  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/batchcreations");
    console.log("Hello");
  };

  return (
    <div className="batch-creations px-3">
      {step === 0 && (
        <>
          <h5 className="mb-4 px-5">Enter Batch Details</h5>
          <div className="content-creation">
            <div className="row">
              <div className="col-md-6 mt-3">
                <div className="input-text px-5">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Batch ID</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your Batch Id"
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="input-text px-5">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Batch Start Date</Form.Label>
                    <Form.Control type="Date" />
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="input-text px-5">
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Which Exam batch belongs to</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option value="11">JEE Mains</option>
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="input-text px-5">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Batch End Date</Form.Label>
                    <Form.Control type="Date" />
                  </Form.Group>
                </div>
              </div>

              <div className="col-md-6 mt-3">
                <div className="input-text px-5">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Batch Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="input-text px-5">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Class</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="input-text px-5">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Target Year</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="input-text px-5">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Upload Batch Banner Image for App</Form.Label>
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
                            Choose a jpg./ pdf.file. Size-width:350px and
                            Height:150px
                          </p>
                        </div>
                      </Form.Group>
                    </div>
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-6 mt-3"></div>
              {/* <div className="col-md-6 mt-3">
                <div
                  className="hvr-sweep-to-right"
                  onClick={() => setStep(1)} // Move to next step
                >
                  Next
                </div>
              </div> */}
            </div>
          </div>

{/* ++++Teacher assignment for subjects+++ */}
<h5 className="mb-4 px-5">Teacher assignment for subjects</h5>
          <div className="content-creation">
            <div className="row">
              <div className="col-md-6 mt-3">
                <div className="input-text px-5">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Physics</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="input-text px-5">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Chemistry</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="input-text px-5">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Math</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </div>
              </div>

              <div className="col-md-6 mt-3"></div>
              <div className="col-md-6 mt-3"></div>
              <div className="col-md-6 mt-3">
                {/* <div
                  className="hvr-sweep-to-right"
                  onClick={() => setStep(2)} // Move to next step
                >
                  Next
                </div> */}
              </div>
            </div>
          </div>
{/* ++++Upload content for Batch+++ */}
<h5 className="mb-4 px-5">Upload content for Batch</h5>
          <div className="content-creation">
            <div className="row">
              <div className="col-md-6 mt-3">
                <div className="input-text px-5">
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Content Category</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option value="11">JEE Mains</option>
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-6"></div>
              <div className="col-md-6 mt-3">
                <div className="input-text px-5">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Upload Videos</Form.Label>
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
                            + Upload Mp4.file
                          </p>
                        </div>
                      </Form.Group>
                    </div>
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="input-text px-5">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Upload Assignment</Form.Label>
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
                            + Upload pdf.file
                          </p>
                        </div>
                      </Form.Group>
                    </div>
                  </Form.Group>
                </div>
              </div>

              <div className="col-md-6 mt-3">
                <div className="input-text px-5">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Upload E-Books</Form.Label>
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
                            + Upload pdf.file
                          </p>
                        </div>
                      </Form.Group>
                    </div>
                  </Form.Group>
                </div>
              </div>

              <div className="col-md-6 mt-3">
                <div className="input-text px-5">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Upload Tests</Form.Label>
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
                            + Upload CVS.file
                          </p>
                        </div>
                      </Form.Group>
                    </div>
                  </Form.Group>
                </div>
                <div className="px-5">OR</div>
                <div className="col-md-6 mt-3">
                  <div className="input-text px-5">
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>
                        Select from already available tests
                      </Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option value="11"></option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                </div>
              </div>

              {/* <div className="col-md-6 mt-3">
                <div className="hvr-sweep-to-right" onClick={() => setStep(1)}>
                  Next
                </div>
              </div> */}
            </div>
          </div>



          {/* ++++++Addinational content */}

          <h5 className="mb-4 px-5">Additional Info</h5>
          <div className="content-creation">
            <div className="row">
              <div className="col-md-6 mt-3">
                <div className="input-text px-5">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Max.Students allowed</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="input-text px-5">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Batch Fee</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="input-text px-5">
                  <Form.Select
                    aria-label="Default select example "
                    className="mb-3"
                  >
                    <option>Batch Type</option>
                    <option value="11">JEE Main</option>
                    <option value="12">JEE Advance</option>
                  </Form.Select>
                </div>
              </div>

              <div className="col-md-6 mt-3"></div>

              <div className="col-md-6 mt-3">
                <div
                  className="hvr-sweep-to-right"
                  onClick={() => setStep(1)}
                  style={{ marginLeft: "51px" }}
                >
                  Next
                </div>
              </div>
            </div>
          </div>
        </>



      )}

      {/* {step === 1 && (
        <>
         
        </>
      )}

      {step === 2 && (
        <>
         
        </>
      )} */}
      {/* {step === 1 && (
        <>
     
        </>
      )} */}

      {step === 1 && (
        <>
          <h5 className="mb-4 px-5">Preview Batch</h5>
          <div className="batch-previw px-5">
            <div className="row mt-3">
              <div className="col-md-3">
                <div className="pre-create">
                  <div className="" style={{ fontWeight: "600" }}>
                    Batch Name :{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="targets-pre">
                  <div className="">Test Batch 1</div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3">
                <div className="pre-create">
                  <div className="" style={{ fontWeight: "600" }}>
                    Target Year :{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="targets-pre">
                  <div className="">2025</div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3">
                <div className="pre-create">
                  <div className="" style={{ fontWeight: "600" }}>
                    Class :{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="targets-pre">
                  <div className="">12+</div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3">
                <div className="pre-create">
                  <div className="" style={{ fontWeight: "600" }}>
                    Start Date :{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="targets-pre">
                  <div className="">12-05-2024</div>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-3">
                <div className="pre-create">
                  <div className="" style={{ fontWeight: "600" }}>
                    End Date :{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="targets-pre">
                  <div className="">30-05-2024</div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3">
                <div className="pre-create">
                  <div className="" style={{ fontWeight: "600" }}>
                    Physics :{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="targets-pre">
                  <div className="">Kiru H</div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3">
                <div className="pre-create">
                  <div className="" style={{ fontWeight: "600" }}>
                    Chemistry :{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="targets-pre">
                  <div className="">Suman Rao</div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3">
                <div className="pre-create">
                  <div className="" style={{ fontWeight: "600" }}>
                    Math :{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="targets-pre">
                  <div className="">Sangam Rao</div>
                </div>
              </div>
            </div>
          </div>

          <h5 className="mb-4 mt-3 px-5">Upload Content</h5>
          <div className="batch-previw px-5">
            <div className="row mt-3">
              <div className="col-md-3">
                <div className="pre-create">
                  <div className="" style={{ fontWeight: "600" }}>
                    Videos :{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="targets-pre">
                  <div className="pdf-create">Videos.mp4...</div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3">
                <div className="pre-create">
                  <div className="" style={{ fontWeight: "600" }}>
                    E-Books :{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="targets-pre">
                  <div className="pdf-create">E-Book 1.pdf...</div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3">
                <div className="pre-create">
                  <div className="" style={{ fontWeight: "600" }}>
                    Assignments :{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="targets-pre">
                  <div className="pdf-create">Assignment 1 pdf...</div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3">
                <div className="pre-create">
                  <div className="" style={{ fontWeight: "600" }}>
                    Tests :{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="targets-pre">
                  <div className="pdf-create">Test - Test 1.Ex...</div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3">
                <div className="pre-create">
                  <div className="" style={{ fontWeight: "600" }}>
                    Max. Students Allowed :{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="targets-pre">
                  <div className="">150</div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3">
                <div className="pre-create">
                  <div className="" style={{ fontWeight: "600" }}>
                    Batch Fee :{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="targets-pre">
                  <div className="">150</div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3">
                <div className="pre-create">
                  <div className="" style={{ fontWeight: "600" }}>
                    Batch Type :{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="targets-pre">
                  <div className="">Online</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-3">
            <div
              className="hvr-sweep-to-right"
              onClick={handleNavigation}
              style={{ marginLeft: "51px" }}
            >
              Done
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default InputBatchesCreations;
