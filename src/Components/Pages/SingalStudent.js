import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SingalStudent() {
  const navigation = useNavigate("");

  const handleNavigation = () => {
    navigation("/students/status/:id");
  };

  return (
    <div>
      <div className="container">
        <div
          className="row"
          style={{
            alignItems: "center",
            padding: "25px",
            borderBottom: "1px solid",
          }}
        >
          <div className="col-md-2">
            <div className="details-user">
              <Card.Img variant="top" src="../../user.png" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="details-user">
              <div className="student-name">Abhishek</div>
              <div className="student-name">
                Institute : <span className="kmm-tag">KMM Institute</span>
              </div>
              <div className="student-name">
                Joining Date - <span className="kmm-tag">12/11/2024</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="student-name">
              Email : <span className="kmm-tag">example@gmail.com</span>
            </div>
            <div className="student-name">
              Contact Number : <span className="kmm-tag">+9193393023</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="student-name">
              Address :{" "}
              <span className="kmm-tag">
                {" "}
                #52,100 Feet Rd,Kengeri,
                <br />
                Bangaluru,India,Karnatka (222-222)
              </span>
            </div>
          </div>
        </div>
        <div className="user-progress" onClick={handleNavigation}>
          <div className="card-progress">
            <div className="" style={{ fontSize: "15px", fontWeight: "bold" }}>
              Batch Name
            </div>
            <div className="">JEE Basic</div>
          </div>
          <div className="card-progress mt-3">
            <div className="" style={{ fontSize: "15px", fontWeight: "bold" }}>
              Progress
            </div>
            <div className="">53%</div>
          </div>
        </div>
        <div className="user-progress">
          <div className="card-progress">
            <div className="" style={{ fontSize: "15px", fontWeight: "bold" }}>
              Batch Name
            </div>
            <div className="">JEE Basic2</div>
          </div>
          <div className="card-progress mt-3">
            <div className="" style={{ fontSize: "15px", fontWeight: "bold" }}>
              Progress
            </div>
            <div className="">23%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingalStudent;
