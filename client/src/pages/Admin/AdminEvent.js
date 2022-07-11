import React, { useState } from "react";
import styles from "./admin.module.css";
import GradsConnect from "../../assets/images/GradsConnectLogo.png";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
const AdminEvent = () => {
  const [formData, setFormData] = useState({
    // imgUrl: "/logo192.png",
  });

  let navigate = useNavigate();

  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlehome = () => {
    navigate("/adminhome");
  };

  const handleadd = () => {
    console.log("Testimonial added successfully", formData);
    axios
      .post("http://localhost:8080/event", formData)
      .then(function (response) {
        console.log(response);
        setFormData("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ height: "80vh" }}
      >
        <div className={styles.left}>
          <h1 className={styles.headingA}>Add Event</h1>

          {/* form */}
          <div className="mb-3 col-8">
            <label htmlFor="title" className="form-label">
              Event Title :
            </label>
            <input
              type="string"
              className="form-control"
              name="title"
              value={formData.title}
              onChange={onchange}
            />
          </div>
          <div className="mb-3 col-8">
            <label htmlFor="description" className="form-label">
              Description :
            </label>
            <input
              type="string"
              className="form-control"
              name="description"
              value={formData.description}
              onChange={onchange}
            />
          </div>
          <div className="mb-3 col-8">
            <label htmlFor="guests" className="form-label">
              Guest :
            </label>
            <input
              type="string"
              className="form-control"
              name="guests"
              value={formData.guests}
              onChange={onchange}
            />
          </div>
          <div className="mb-3 col-8">
            <label htmlFor="links" className="form-label">
              Event Link :
            </label>
            <input
              class="txt"
              type="string"
              className="form-control"
              name="links"
              value={formData.links}
              onChange={onchange}
            />
          </div>
          <div className="mb-3 col-8">
            <label htmlFor="dateTime" className="form-label">
              Event Date :
            </label>
            <input
              type="date"
              className="form-control"
              name="dateTime"
              value={formData.dateTime}
              onChange={onchange}
            />
          </div>

          {/* btns */}
          <div className="d-flex  justify-content-between">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleadd}
            >
              Add
            </button>
          </div>
          <br></br>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-primary"
              onClick={handlehome}
            >
              Home
            </button>
          </div>
        </div>

        <div className={styles.logodiv}>
          <img src={GradsConnect} alt="" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default AdminEvent;
