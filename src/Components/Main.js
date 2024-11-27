import React from "react";
import Sidebarleft from "./Sidebarleft";

function Main({ children }) {
  return (
    <div className="">
      <div className="TOP-HEADER">
        <div
          className=""
          style={{ width: "21%", backgroundColor: "#8080802b" }}
        >
          <Sidebarleft />
        </div>
        <div className="right-side" style={{ width: "79%" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Main;
