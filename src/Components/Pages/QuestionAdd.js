import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function QuestionAdd() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fileInputRef = useRef(null);

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/inputquestions");
  };

  return (
    <div className="add-question">
      <div className="px-3 py-3">
        <div className="row">
          <div className="col-md-4">
            {" "}
            <div className="input-text">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Update Questions code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your questions code"
                />
              </Form.Group>
            </div>
          </div>
          <div className="col-md-4">
            <Form.Label>Class</Form.Label>
            <Form.Select aria-label="Default select example mb-3">
              <option>Select a class</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </Form.Select>
          </div>
          <div className="col-md-4">
            <Form.Label>Subject</Form.Label>
            <Form.Select aria-label="Default select example ">
              <option>Select Subject</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </Form.Select>
          </div>
          <div className="col-md-4 mb-3">
            <Form.Label>Chapter</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select Chapter</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </Form.Select>
          </div>
          <div className="col-md-4">
            <Form.Label>Sub-Chapter</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select Sub-Chapter</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </Form.Select>
          </div>
          <div className="col-md-4 mb-3">
            <Form.Label>Difficulty Level</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select Sub-Chapter</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </Form.Select>
          </div>
          <div className="col-md-4 mb-3">
            <Form.Label>Question Bank</Form.Label>
            <Form.Select aria-label="Default select example ">
              <option>Select Sub-Chapter</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </Form.Select>
          </div>
          <div className="col-md-4 mb-3">
            <Form.Label>Question Type</Form.Label>
            <Form.Select aria-label="Default select example ">
              <option>Select Question Type</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </Form.Select>
          </div>
          <div className="col-md-4 mb-3">
            <Form.Label>Question Language</Form.Label>
            <Form.Select aria-label="Default select example ">
              <option>Select Question Language</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </Form.Select>
          </div>
        </div>

        <div className="mt-3">
          <div className="hvr-sweep-to-right" onClick={handleShow}>
            Upload File
          </div>
          <div className="hvr-sweep-to-right" onClick={handleNavigation}>
            Input Question
          </div>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Choose image for Questions</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="input-text" style={{ width: "100%" }}>
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
                    Choose a file
                  </p>
                </div>
              </Form.Group>
            </div>
            <p className="text-center" style={{ fontWeight: "500" }}>
              Choose a jpg./ pdf.file. Size-width:350px and Height:150px
            </p>
          </Modal.Body>
          <Modal.Footer>
            <div className="hvr-sweep-to-right">Submit</div>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default QuestionAdd;
