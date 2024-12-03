import React from "react";
import Sidebarleft from "./Sidebarleft";

function Main({ children }) {
  return (
    <div className="">
      <div className="TOP-HEADER" style={{height:" calc(100vh - 50px)"}}>
        <div
          className=""
          // style={{ width: "21%", backgroundColor: "#8080802b" }}
        >
          <Sidebarleft />
        </div>
        <div
          className="right-side"
          style={{ width: "100%", overflow: "hidden", overflowY: "scroll" ,}}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Main;
