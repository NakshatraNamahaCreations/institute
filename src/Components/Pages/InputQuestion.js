import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function InputQuestion() {
  const [editorData, setEditorData] = useState("");

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
  };

  return (
    <div>
      <div className="input-quest">
        <div className="row">
          <div className="col-md-3">
            <div className="input-det">
              <h6 className="mb-4">Question Details</h6>
              <Form.Select
                aria-label="Default select example "
                className="mt-4"
              >
                <option>Select a class</option>
                <option value="11">11th class</option>
                <option value="12">12th class</option>
              </Form.Select>
              {/* <Form.Select aria-label="Default select example" className="mt-4">
                <option>Select a Subject</option>
                <option value="11">Physics</option>
                <option value="12">Hindi</option>
              </Form.Select> */}

              <Form.Select
                aria-label="Default select example mt-4"
                className="mt-4"
              >
                <option>Select a Subject</option>
                <option value="11">Physics</option>
                <option value="12">Hindi</option>
              </Form.Select>
              <Form.Select
                aria-label="Default select example mt-4"
                className="mt-4"
              >
                <option>Select a Chapter</option>
                <option value="11">Physics</option>
                <option value="12">Hindi</option>
              </Form.Select>
              <Form.Select
                aria-label="Default select example mt-4"
                className="mt-4"
              >
                <option>Select a Sub-Chapter</option>
                <option value="11">Physics</option>
                <option value="12">Hindi</option>
              </Form.Select>
              <Form.Select aria-label="Default select example" className="mt-4">
                <option>Select a Difficulty Level</option>
                <option value="11">Level1</option>
                <option value="12">Level2</option>
              </Form.Select>
              <Form.Select aria-label="Default select example" className="mt-4">
                <option>Select a Question Type</option>
                <option value="11">Singal Choice</option>
              </Form.Select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-det question-input">
              <h6 className="mb-4">Input Questions</h6>
              <div className="">
                {" "}
                <div className="input-text">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Questions Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your questions title"
                    />
                  </Form.Group>
                </div>
              </div>

              <div className="input-text">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Questions Section</Form.Label>
                  <CKEditor
                    editor={ClassicEditor}
                    data={editorData}
                    onChange={handleEditorChange}
                  />
                </Form.Group>
              </div>
              <div className="input-text">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Answer Section</Form.Label>
                  <CKEditor
                    editor={ClassicEditor}
                    data={editorData}
                    onChange={handleEditorChange}
                  />
                </Form.Group>
              </div>

              <div className="input-text">
              <Form.Label>Options Text</Form.Label>
              <Form.Select
                aria-label="Default select example mt-4"
                
              >
                <option></option>
                <option value="11">Physics</option>
                <option value="12">Hindi</option>
              </Form.Select>
              </div>
              <div className="input-text mt-3">
              <Form.Label>Number of Options</Form.Label>
              <Form.Select
                aria-label="Default select example mt-4"
                
              >
                <option></option>
                <option value="11">Physics</option>
                <option value="12">Hindi</option>
              </Form.Select>
              </div>

              <div className="input-text mt-3">
              <Form.Label>Answer Options</Form.Label>
              <Form.Select
                aria-label="Default select example mt-4"
                
              >
                <option></option>
                <option value="11">Physics</option>
                <option value="12">Hindi</option>
              </Form.Select>
              </div>

              <div className="input-text mt-3">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Options text starts with</Form.Label>
                    <Form.Control
                      type="text"
                    //   placeholder="Enter your questions title"
                    />
                  </Form.Group>
                </div>
                <div className="hvr-sweep-to-right" >Save</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputQuestion;
