import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
function Teacher() {
  const navigations = useNavigate();

  const handleNavigation = () => {
    navigations("/teacher/:id");
  };

  return (
    <div className="px-3">
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <FaSearch className="search-icon" />
        </div>
      </div>
      <div className="sstudent-card mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3" onClick={handleNavigation}>
              {" "}
              <Card
                style={{
                  width: "12rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  border: "none",
                }}
              >
                <Card.Img variant="top" src="../../user.png" />
                <Card.Body>
                  <Card.Title>Teacher 1</Card.Title>
                  <Card.Text>Guru Prasad</Card.Text>
                  <Card.Text className="txt-phy">Physics</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              {" "}
              <Card
                style={{
                  width: "12rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  border: "none",
                }}
              >
                <Card.Img variant="top" src="../../user.png" />
                <Card.Body>
                  <Card.Title>Teacher 1</Card.Title>
                  <Card.Text>Guru Prasad</Card.Text>
                  <Card.Text className="txt-phy">Physics</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              {" "}
              <Card
                style={{
                  width: "12rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  border: "none",
                }}
              >
                <Card.Img variant="top" src="../../user.png" />
                <Card.Body>
                  <Card.Title>Teacher 1</Card.Title>
                  <Card.Text>Guru Prasad</Card.Text>
                  <Card.Text className="txt-phy">Physics</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              {" "}
              <Card
                style={{
                  width: "12rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  border: "none",
                }}
              >
                <Card.Img variant="top" src="../../user.png" />
                <Card.Body>
                  <Card.Title>Teacher 1</Card.Title>
                  <Card.Text>Guru Prasad</Card.Text>
                  <Card.Text className="txt-phy">Physics</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teacher;
