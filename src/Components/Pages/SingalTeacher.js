import React from "react";
import { Card } from "react-bootstrap";

function SingalTeacher() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div className="details-user">
              <Card.Img variant="top" src="../../user.png" />
              <div className="content-details">
                <div className="row">
                  <div className="col-md-6">
                    <div className="pt-2">
                      <div className="details-name">Name</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {" "}
                    <div className="details-name-1">Guru Prasad</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="pt-2">
                      <div className="details-name">Age</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {" "}
                    <div className="details-name-1">31 yrs</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="pt-2">
                      <div className="details-name">Address</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {" "}
                    <div className="details-name-1">
                      {" "}
                      #52,100 Feet Rd,Kengeri,
                      <br />
                      Bangaluru,India,Karnatka (222-222)
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="pt-2">
                      <div className="details-name">Email</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {" "}
                    <div className="details-name-1"> groups@gmail.com</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="pt-2">
                      <div className="details-name">Subject</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {" "}
                    <div className="details-name-1">Math</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="pt-2">
                      <div className="details-name">Qualifications</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {" "}
                    <div className="details-name-1">M.sc Math</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="pt-2">
                      <div className="details-name">Experiences</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {" "}
                    <div className="details-name-1">5 years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingalTeacher;
