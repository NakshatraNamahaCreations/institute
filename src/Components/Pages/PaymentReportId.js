import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
function PaymentReportId() {
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
            <div className="student-name">
              Class : <span className="kmm-tag">12th</span>
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

        <div className="student-status">
          <h5 className="mb-2 pt-3">Subscriptions Details</h5>
          <div className="" style={{ fontWeight: "500" }}>
            SubscriptionType :{" "}
            <span style={{ color: "#26337c" }}>JEE-Advanced Course</span>
          </div>
          <div className="" style={{ fontWeight: "500" }}>
            Subscription Start Date :{" "}
            <span style={{ color: "#26337c" }}>15th September 2024</span>
          </div>
          <div className="" style={{ fontWeight: "500" }}>
            New Payment Date :{" "}
            <span style={{ color: "#26337c" }}>15 October 2024</span>
          </div>
        </div>

        <div
          className="mt-4"
          style={{
            backgroundColor: "white",
            width: "fit-content",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <h5 className="mb-2">Payment Details</h5>
          <div className="" style={{ fontWeight: "500" }}>
            Subscription Price :{" "}
            <span style={{ color: "#26337c" }}>Rs. 2,595</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentReportId;
