import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { CiYoutube } from "react-icons/ci";
import ProgressBar from "react-bootstrap/ProgressBar";
import { GiNotebook } from "react-icons/gi";
import { MdOutlineAssignment } from "react-icons/md";
import { FaNoteSticky } from "react-icons/fa6";

function SingalStudentStatus() {

  const now = 60;
  return (
    <div>
      <div className="container-fluid">
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
        <div className="" style={{ display: "flex", gap: "20px" }}>
          <div className="user-progress">
            <div className="card-progress">
              <div
                className=""
                style={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Batch Name
              </div>
              <div className="">JEE Basic</div>
            </div>
          </div>
          <div className="user-progress">
            <div className="card-progress ">
              <div
                className=""
                style={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Progress
              </div>
              <div className="">53%</div>
            </div>
          </div>
        </div>

        <div className="student-status">
          <div className="student-progress">
          <div className="progress-define" style={{ width: '100%' }}>
      <div 
        className="progress-header" 
        style={{ display: 'flex', gap: '10px', alignItems: 'center' ,marginRight:"80px"}}
      >
        <CiYoutube style={{ fontSize: '40px' }} />
        <div style={{ fontSize: '18px', fontWeight: '500' }}>Videos</div>
      </div>

      <div style={{ width: '70%', marginTop: '10px' }}>
        <ProgressBar now={now} label={`${now}%`} />
      </div>
    </div>
    <div className="progress-define" style={{ width: '100%' }}>
      <div 
        className="progress-header" 
        style={{ display: 'flex', gap: '10px', alignItems: 'center' ,marginRight:"80px"}}
      >
        <FaNoteSticky style={{ fontSize: '40px' }} />
        <div style={{ fontSize: '18px', fontWeight: '500' }}>Tests</div>
      </div>

      <div style={{ width: '70%', marginTop: '10px' }}>
        <ProgressBar now={now} label={`${now}%`} />
      </div>
    </div>
    <div className="progress-define" style={{ width: '100%' }}>
      <div 
        className="progress-header" 
        style={{ display: 'flex', gap: '10px', alignItems: 'center' ,marginRight:"80px"}}
      >
        <MdOutlineAssignment style={{ fontSize: '40px' }} />
        <div style={{ fontSize: '18px', fontWeight: '500' }}>Assignments</div>
      </div>

      <div style={{ width: '70%', marginTop: '10px' }}>
        <ProgressBar now={now} label={`${now}%`} />
      </div>
    </div>
    <div className="progress-define" style={{ width: '100%' }}>
      <div 
        className="progress-header" 
        style={{ display: 'flex', gap: '10px', alignItems: 'center' ,marginRight:"80px"}}
      >
        <GiNotebook style={{ fontSize: '40px' }} />
        <div style={{ fontSize: '18px', fontWeight: '500' }}>E-Books</div>
      </div>

      <div style={{ width: '70%', marginTop: '10px' }}>
        <ProgressBar now={now} label={`${now}%`} />
      </div>
    </div>
     
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingalStudentStatus;
