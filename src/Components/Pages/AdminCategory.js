import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { FaPlusCircle } from "react-icons/fa";
import { Button } from "react-bootstrap";

function AdminCategory() {
  const [category, setCategory] = useState("");
  const fileInputRef = useRef(null);

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div>
      <div className="pt-2 px-2">
        <Form.Select
          aria-label="Default select example"
          style={{ width: "300px" }}
          onClick={handleCategoryChange}
        >
          <option>Select a category for User</option>
          <option value="Admin">Admin</option>
          <option value="Teacher">Teacher</option>
        </Form.Select>

        <div className="conatiner mt-3">
          {category == "Teacher" ? (
            <>
              <div className="row">
                <div className="col-md-6">
                  {" "}
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

                      <div className="add-photo" onClick={handleFileClick}>
                        <FaPlusCircle style={{ marginRight: "8px" }} />
                        <p>Add photo</p>
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="input-text">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="input-text">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Contact Number</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter your contact number"
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="input-text">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email Id</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter your email"
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="input-text">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your address"
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="input-text">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Password"
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="input-text">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your confirm password"
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="input-text">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Age</Form.Label>
                      <Form.Control type="text" placeholder="Enter your Age" />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="input-text">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Experience</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your experience"
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="input-text">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Qualifications</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your qualifications"
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-text">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Subject"
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="row">
                <div className="col-md-6">
                  {" "}
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

                      <div className="add-photo" onClick={handleFileClick}>
                        <FaPlusCircle style={{ marginRight: "8px" }} />
                        <p
                          style={{ fontSize: "15px", fontWeight: "bold" }}
                          className="pt-2"
                        >
                          Add photo
                        </p>
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="input-text">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="input-text">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Contact Number</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter your contact number"
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="input-text">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email Id</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter your email"
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="input-text">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Password"
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="input-text">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your confirm password"
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="hvr-sweep-to-right">Save</div>
        </div>
      </div>
    </div>
  );
}

export default AdminCategory;
