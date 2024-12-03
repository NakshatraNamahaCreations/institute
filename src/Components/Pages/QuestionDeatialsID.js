import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const QuestionDeatialsID = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/testtemplatecreations");
  };

  return (
    <div className="input-quest">
      <div className="row">
        <div
          className="col-md-8"
          style={{ border: "1px solid green", borderRadius: "15px" }}
        >
          <div className="all-dif border-bottom">
            <div className="questions-so">
              <div className="roup-0d"></div>
              <div className="question-q" style={{ fontWeight: "bold" }}>
                Q-8 41-486-19778
              </div>
            </div>
            <div className="multi-choose">
              <div className="uest">
                In comparison with the electrostatic force between two
                electrons, the electrostatic force between two protons is:
              </div>
              <div className="choose-m-0">
                <ul>
                  <li>
                    <span className="lr-d">(1)</span>increases
                  </li>
                  <li>
                    <span className="lr-d">(2)</span>decreases
                  </li>
                  <li>
                    <span className="lr-d">(3)</span>changes erratically
                  </li>
                  <li>
                    <span className="lr-d">(4)</span>Remains unchanged
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="hvr-sweep-to-right mt-3 mb-3"
            style={{ backgroundColor: "green" }}
          >
            Low
          </div>
          <div
            className="hvr-sweep-to-right mt-3 mb-3"
            style={{ backgroundColor: "#009688" }}
          >
            NEET-2020
          </div>
          <div className="hvr-sweep-to-right mt-3 mb-3">
            Previously used-Test name
          </div>
          <div
            className="hvr-sweep-to-right mt-3 mb-3"
            style={{ backgroundColor: "red" }}
            onClick={handleOpen}
          >
            Report Error
          </div>
        </div>
      </div>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              className="mb-4"
              style={{ color: "black", fontSize: "14px", fontWeight: "600" }}
            >
              Report any error in this questions
            </Typography>
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              defaultValue="Type here !"
              style={{ width: "100%" }}
            />
            <div className="hvr-sweep-to-right mt-3 mb-3">Submit</div>
          </Box>
        </Modal>
      </div>
      <div className="hvr-sweep-to-right mt-3 mb-3" onClick={handleClick}>
        Submit
      </div>
    </div>
  );
};

export default QuestionDeatialsID;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
