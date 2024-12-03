import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AddTestSeries() {
  const fileInputRef = useRef(null);
  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/product-services");
  };

  return (
    <div className="batch-creations px-3">
      {step === 0 && (
        <>
          <h5 className="mb-4 px-5">Add test series details</h5>
          <div className="content-creation">
            <div className="row">
              <div className="col-md-6 mt-2">
                <div className="input-text px-5">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Test Series Name</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-6 mt-2">
                <div className="input-text px-5">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </div>
              </div>

              <div className="col-md-6 mt-2">
                <div className="input-text px-5">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>From Date</Form.Label>
                    <Form.Control type="Date" />
                  </Form.Group>
                </div>
              </div>

              <div className="col-md-6 mt-2">
                <div className="input-text px-5">
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Class</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-6 mt-2">
                <div className="input-text px-5">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Price</Form.Label>
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
                    <Form.Label>Discount</Form.Label>
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
                    <Form.Label>Upload Test Series Banner Image App</Form.Label>
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
                            Choose a jpg.file Size-width:350px and Height:150px
                          </p>
                        </div>
                      </Form.Group>
                    </div>
                  </Form.Group>
                </div>
              </div>
            </div>
          </div>

          {/* Select tests to add */}
          <h5 className="mb-2 px-5">Select test to add</h5>
          <div className="content-creation">
            <div className="row">
              <div className="col-md-6 mt-1">
                <div className="input-text px-5">
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Tests</Form.Label>{" "}
                    <span className="plus-o mx-1 px-3">+</span>
                    <Form.Select aria-label="Default select example">
                      <option value="11"></option>
                      <option value="12"></option>
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-6"></div>
              <div className="col-md-6 mt-1">
                <div className="input-text px-5">
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Examp Type</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option value="11"></option>
                      <option value="12"></option>
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-6"></div>
              <div className="col-md-6 mt-3 px-5">
                <div
                  className="hvr-sweep-to-right"
                  onClick={() => setStep(1)} // Move to next step
                >
                  Preview
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {step === 1 && (
        <>
          <h5 className="mb-4 px-2">Preview Test Series</h5>

          <div className="row">
            <div className="col-md-8">
              <div className="preview-test px-2 mt-2">
                <div className="row">
                  <div className="col-md-3">
                    <div className="" style={{ fontWeight: "500" }}>
                      Test Series Name:
                    </div>
                  </div>
                  <div className="col-md-9">JEE Test Series 1</div>
                </div>
              </div>
              <div className="preview-test px-2 mt-2">
                <div className="row">
                  <div className="col-md-3" style={{ fontWeight: "500" }}>
                    {" "}
                    <div className="">Class</div>
                  </div>
                  <div className="col-md-9">
                    <div className="">12+</div>
                  </div>
                </div>
              </div>
              <div className="preview-test px-2 mt-2">
                <div className="row">
                  <div className="col-md-3" style={{ fontWeight: "500" }}>
                    {" "}
                    <div className="">Start Date:</div>
                  </div>
                  <div className="col-md-9">
                    <div className="">12-10-2024</div>
                  </div>
                </div>
              </div>
              <div className="preview-test px-2 mt-2">
                <div className="row">
                  <div className="col-md-3" style={{ fontWeight: "500" }}>
                    {" "}
                    <div className="">Price:</div>
                  </div>
                  <div className="col-md-9">
                    <div className="">Rs. 7,999</div>
                  </div>
                </div>
              </div>
              <div className="preview-test px-2 mt-2">
                <div className="row">
                  <div className="col-md-3" style={{ fontWeight: "500" }}>
                    {" "}
                    <div className="">Description:</div>
                  </div>
                  <div className="col-md-9">
                    <div className="">
                      Lorem ipsum dolor sit amet,consectetur adipicing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore.
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-test mt-4">
                <h5 className="mb-2 px-2">Upload Tests</h5>

                <div className="preview-test px-2 mt-2">
                  <div className="row">
                    <div className="col-md-3" style={{ fontWeight: "500" }}>
                      {" "}
                      <div className="">Test 1</div>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="ty-d-0">Test-Test 1.Exam...</div>
                        </div>
                        <div className="col-md-4">
                          <div className="cd-ttype">Test</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="preview-test px-2 mt-2">
                  <div className="row">
                    <div className="col-md-3" style={{ fontWeight: "500" }}>
                      {" "}
                      <div className="">Test 2</div>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="ty-d-0">Test-Test 2.Exam...</div>
                        </div>
                        <div className="col-md-4">
                          <div className="cd-ttype">Test</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="preview-test px-2 mt-2">
                <div className="row">
                  <div className="col-md-3" style={{ fontWeight: "500" }}>
                    {" "}
                    <div className="">Total Tests:2</div>
                  </div>
                
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div
                  className="hvr-sweep-to-right"
                  onClick={handleNavigation}
                >
                  DONE
                </div>
              </div>
            </div>

            <div className="col-md-3"></div>
          </div>
        </>
      )}
    </div>
  );
}

export default AddTestSeries;
