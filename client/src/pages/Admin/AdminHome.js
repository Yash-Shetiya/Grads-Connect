import React, { useState } from "react";
import styles from "./adminhome.css";
import GradsConnect from "../../assets/images/GradsConnectLogo.png";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useNavigate } from "react-router-dom";
import axios from "../../axios";

const AdminHome = () => {
  let [numData, setNumData] = useState({
    email: 42,
    account: 37,
    event: 18,
    pending: 12,
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [emailDetail, setEmailDetail] = useState({
    body: "",
    subject: "",
    mailTo: "",
  });

  const handleClose = () => {
    setEmailDetail({
      body: "",
      subject: "",
      mailTo: "",
    });
    setOpen(false);
  };

  const handleSendEmail = async () => {
    // console.log(newBookDetail);

    axios
      .post("http://localhost:8080/email", {
        email: emailDetail.mailTo,
        text: emailDetail.body,
        subject: emailDetail.subject,
      })
      .then(function (response) {
        console.log(response);
        setNumData({ ...numData, email: numData.email + 1 });
      })
      .catch(function (error) {
        console.log(error);
      });

    setEmailDetail({
      body: "",
      subject: "",
      mailTo: "",
    });
    setOpen(false);
  };

  return (
    <div className="container">
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ height: "80vh" }}
      >
        <div className="left">
          <div class="list-group">
            <a
              href="/admintestimonial"
              class="list-group-item list-group-item-action "
            >
              Testimonial
            </a>
            <a
              href="/adminverify"
              class="list-group-item list-group-item-action"
            >
              Verify Requets
            </a>
            <a
              href="/adminevent"
              class="list-group-item list-group-item-action"
            >
              Arrange events
            </a>
            <button
              onClick={handleClickOpen}
              class="list-group-item list-group-item-action"
            >
              Send Emails
            </button>
          </div>

          <div className={styles.cardA}>
            <div className="cardA right">
              <div className="card-body">
                {numData.account}
                <h3>
                  <strong>Account Activated</strong>
                </h3>
                <p className="card-text">
                  Total number of account activated till Now .
                </p>
              </div>
            </div>
            <div className="cardA leftc">
              <div className="card-body">
                {numData.email}
                <h3>
                  <strong>Email Sent</strong>
                </h3>
                <p className="card-text">
                  Total number of email sent till Now .
                </p>
              </div>
            </div>
            <div className="cardA right">
              <div className="card-body">
                {numData.event}
                <h3>
                  <strong>Event Organised</strong>
                </h3>
                <p className="card-text">
                  Total number of Event Organised till Now .
                </p>
              </div>
            </div>
            <div className="cardA leftc" class={styles.left}>
              <div className="card-body">
                <h3>
                  <strong>Pending verification</strong>
                </h3>
                <p className="card-text">Batch 2022 - 5</p>
                <p className="card-text">Batch 2021 - 8</p>
                <p className="card-text">Batch 2020 - 2</p>
              </div>
            </div>
          </div>
        </div>
        <div className="logodiv">
          <img src={GradsConnect} alt="" className="logo" />
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Send Email</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="mailTo"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            value={emailDetail.mailTo}
            onChange={(e) => {
              setEmailDetail({ ...emailDetail, mailTo: e.target.value });
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="subject"
            label="Subject"
            type="text"
            fullWidth
            variant="standard"
            value={emailDetail.subject}
            onChange={(e) => {
              setEmailDetail({ ...emailDetail, subject: e.target.value });
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Body"
            type="text"
            fullWidth
            variant="standard"
            value={emailDetail.body}
            onChange={(e) => {
              setEmailDetail({ ...emailDetail, body: e.target.value });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSendEmail}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminHome;
