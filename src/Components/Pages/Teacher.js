import React, { useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
function Teacher() {
  const navigations = useNavigate();

  const handleNavigation = () => {
    navigations("/teacher/:id");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 200, // Offset from the original trigger point
      easing: "ease-in-out", // Animation easing
      delay: 50, // Delay before the animation starts
    });
  }, []);

  return (
    <div className="px-3">
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <FaSearch className="search-icon" />
        </div>
      </div>
      <div className="sstudent-card mt-3">
        <div className="">
          <div className="row">
            <div className="col-md-3" data-aos="flip-left"  onClick={handleNavigation}>
              {" "}
              <Card className="hover-card">
                <Card.Img
                  variant="top"
                  src="../../user.png"
                  className="card-image"
                />
                <Card.Body>
                  <Card.Title>Teacher 1</Card.Title>
                  <Card.Text>Guru Prasad</Card.Text>
                  <Card.Text className="txt-phy">Physics</Card.Text>
                </Card.Body>
              </Card>
              {/* <Card
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
              </Card> */}
            </div>
            <div className="col-md-3" data-aos="flip-left"  onClick={handleNavigation}>
              {" "}
              <Card className="hover-card">
                <Card.Img
                  variant="top"
                  src="../../user.png"
                  className="card-image"
                />
                <Card.Body>
                  <Card.Title>Teacher 1</Card.Title>
                  <Card.Text>Guru Prasad</Card.Text>
                  <Card.Text className="txt-phy">Physics</Card.Text>
                </Card.Body>
              </Card>
       
            </div>
            <div className="col-md-3" data-aos="flip-left"  onClick={handleNavigation}>
              {" "}
              <Card className="hover-card">
                <Card.Img
                  variant="top"
                  src="../../user.png"
                  className="card-image"
                />
                <Card.Body>
                  <Card.Title>Teacher 1</Card.Title>
                  <Card.Text>Guru Prasad</Card.Text>
                  <Card.Text className="txt-phy">Physics</Card.Text>
                </Card.Body>
              </Card>
       
            </div>
            <div className="col-md-3" data-aos="flip-left"  onClick={handleNavigation}>
              {" "}
              <Card className="hover-card">
                <Card.Img
                  variant="top"
                  src="../../user.png"
                  className="card-image"
                />
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
