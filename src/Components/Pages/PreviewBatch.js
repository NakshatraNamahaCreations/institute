import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PreviewBatch() {
  const fileInputRef = useRef(null);
  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/batchescreations");
    console.log("Hello");
  };

  return (
    <div className="batch-creations px-3">
   
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
            <div className="row mt-3">
              <div className="col-md-3">
                <div className="pre-create">
                  <div className="" style={{ fontWeight: "600" }}>
                   Schedule the Batch :{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="targets-pre">
                  <div className="d-flex" style={{gap:"10px"}}>
                    <input type="Time" />
                    <input type="Date" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
            <div className="col-md-3 ">
                <div className="input-text ">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Duration (No. of Days Batch will be available)</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </div>
              </div>
            </div>

            <div className="row mt-3">
            <div className="col-md-3 ">
                <div className="input-text ">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Set the visibility</Form.Label>
                    <Form.Check // prettier-ignore
            type="checkbox"
            // id={`default-${type}`}
            label="Public (Available to all students)"
          />

<Form.Check // prettier-ignore
            type="checkbox"
            // id={`default-${type}`}
            label="Private (Only speciffic classes or students)"
          />
                  </Form.Group>
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
            Publish
            </div>
          </div>
  
    </div>
  );
}

export default PreviewBatch;

