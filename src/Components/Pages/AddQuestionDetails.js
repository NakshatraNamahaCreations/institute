import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AddQuestionsDetails() {
  const [editorData, setEditorData] = useState("");
  const navigate = useNavigate()

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
  };

  const navigateHandler=()=>{
    navigate('/addquestiondetails/:id')
  }

  return (
    <div>
      <div className="input-quest">
        <div className="row">
          <div className="col-md-3">
            <div className="input-det" style={{ backgroundColor: "#3f2076" }}>
              <h6 className="mb-4" style={{color:"white"}}>Curriculum Details</h6>

              <div className="mt-2">
                <Form.Label style={{ color: "white" }}>Section</Form.Label>
                <Form.Select aria-label="Default select example ">
                  <option value="11">SQC</option>
                </Form.Select>
              </div>
              <div className="mt-2">
                <Form.Label style={{ color: "white" }}>Class</Form.Label>
                <Form.Select aria-label="Default select example ">
                  <option value="11">12th class</option>
                </Form.Select>
              </div>
              <div className="mt-2">
                <Form.Label style={{ color: "white" }}>
                  Difficulty Level
                </Form.Label>
                <Form.Select aria-label="Default select example ">
                  <option value="11">Level1</option>
                </Form.Select>
              </div>
              <div className="mt-2">
                <Form.Label style={{ color: "white" }}>Subject</Form.Label>
                <Form.Select aria-label="Default select example ">
                  <option value="11">Physics</option>
                </Form.Select>
              </div>
              <div className="mt-2">
                <Form.Label style={{ color: "white" }}>Chapter</Form.Label>
                <Form.Select aria-label="Default select example ">
                  <option value="11">Kinematics</option>
                </Form.Select>
              </div>
              <div className="mt-2">
                <Form.Label style={{ color: "white" }}>Sub-Chapter</Form.Label>
                <Form.Select aria-label="Default select example ">
                  <option value="11">Kinematics</option>
                </Form.Select>
              </div>
              <div className="mt-2">
                <Form.Label style={{ color: "white" }}>
                  Questions Type
                </Form.Label>
                <Form.Select aria-label="Default select example ">
                  <option value="11">Singal Choice</option>
                </Form.Select>
              </div>
            </div>
          </div>
          <div className="col-md-8">
          <div className="" style={{display:"flex",justifyContent:"space-between"}}>
        <div className="fhd">
                <div className="">SQC</div>
                <div className="">Total Questions:10</div>
                <div className="">
                  Status: <span style={{ color: "red" }}>Incompelete</span>
                </div>
              </div>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
                <FaSearch className="search-icon" />
              </div>
        </div>
            <div className="input-det question-input">
       
              <h6 className="mb-4" style={{
                color:"brown",
                borderBottom:"1px solid ",
                width:"fit-content"
              }}>10 Questions added from file</h6>
              <div className="all-dif border-bottom" onClick={navigateHandler}>
              <div className="questions-so">
               <div className="roup-0d"></div>
               <div className="question-q" style={{fontWeight:"bold"}}>
                Q-8 41-486-19778
               </div>
              </div>
              <div className="multi-choose">
                <div className="uest">
                In comparison with the electrostatic force between two electrons, the electrostatic force between two protons is:
                </div>
                <div className="choose-m-0">
                  <ul>
                    <li><span className="lr-d">(1)</span>increases</li>
                    <li><span className="lr-d">(2)</span>decreases</li>
                    <li><span className="lr-d">(3)</span>changes erratically</li>
                    <li><span className="lr-d">(4)</span>Remains unchanged</li>
                  </ul>
                </div>
              </div>
             
              </div>
              <div className="all-dif border-bottom">
              <div className="questions-so">
               <div className="roup-0d"></div>
               <div className="question-q" style={{fontWeight:"bold"}}>
                Q-8 41-486-19778
               </div>
              </div>
              <div className="multi-choose">
                <div className="uest">
                In comparison with the electrostatic force between two electrons, the electrostatic force between two protons is:
                </div>
                <div className="choose-m-0">
                  <ul>
                    <li><span className="lr-d">(1)</span>increases</li>
                    <li><span className="lr-d">(2)</span>decreases</li>
                    <li><span className="lr-d">(3)</span>changes erratically</li>
                    <li><span className="lr-d">(4)</span>Remains unchanged</li>
                  </ul>
                </div>
              </div>
             
              </div>
              <div className="all-dif border-bottom">
              <div className="questions-so">
               <div className="roup-0d"></div>
               <div className="question-q" style={{fontWeight:"bold"}}>
                Q-8 41-486-19778
               </div>
              </div>
              <div className="multi-choose">
                <div className="uest">
                In comparison with the electrostatic force between two electrons, the electrostatic force between two protons is:
                </div>
                <div className="choose-m-0">
                  <ul>
                    <li><span className="lr-d">(1)</span>increases</li>
                    <li><span className="lr-d">(2)</span>decreases</li>
                    <li><span className="lr-d">(3)</span>changes erratically</li>
                    <li><span className="lr-d">(4)</span>Remains unchanged</li>
                  </ul>
                </div>
              </div>
             
              </div>
              <div className="all-dif border-bottom">
              <div className="questions-so">
               <div className="roup-0d"></div>
               <div className="question-q" style={{fontWeight:"bold"}}>
                Q-8 41-486-19778
               </div>
              </div>
              <div className="multi-choose">
                <div className="uest">
                In comparison with the electrostatic force between two electrons, the electrostatic force between two protons is:
                </div>
                <div className="choose-m-0">
                  <ul>
                    <li><span className="lr-d">(1)</span>increases</li>
                    <li><span className="lr-d">(2)</span>decreases</li>
                    <li><span className="lr-d">(3)</span>changes erratically</li>
                    <li><span className="lr-d">(4)</span>Remains unchanged</li>
                  </ul>
                </div>
              </div>
             
              </div>
              <div className="all-dif border-bottom">
              <div className="questions-so">
               <div className="roup-0d"></div>
               <div className="question-q" style={{fontWeight:"bold"}}>
                Q-8 41-486-19778
               </div>
              </div>
              <div className="multi-choose">
                <div className="uest">
                In comparison with the electrostatic force between two electrons, the electrostatic force between two protons is:
                </div>
                <div className="choose-m-0">
                  <ul>
                    <li><span className="lr-d">(1)</span>increases</li>
                    <li><span className="lr-d">(2)</span>decreases</li>
                    <li><span className="lr-d">(3)</span>changes erratically</li>
                    <li><span className="lr-d">(4)</span>Remains unchanged</li>
                  </ul>
                </div>
              </div>
             
              </div>

              <div className="hvr-sweep-to-right mt-3" style={{backgroundColor:"green"}}>Save</div>
              <div className="hvr-sweep-to-right mt-3" style={{backgroundColor:"red"}}>Cancel</div>
              <div className="hvr-sweep-to-right mt-3">Next</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddQuestionsDetails;
