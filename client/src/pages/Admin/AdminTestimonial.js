import React, { useState } from "react";
import styles from "./admin.module.css";
import GradsConnect from "../../assets/images/GradsConnectLogo.png";
import { useNavigate } from "react-router-dom";
const AdminTestimonial = () => {
  const [formData, setFormData] = useState({
    fname: "",
    Department: "",
    Batch: "",
  });

  let navigate = useNavigate();

  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleadd = () => {
    console.log("Testimonial added successfully");
  };

  const handlehome = () => {
    navigate("/adminhome");
  };

  return (
    <div className="container">
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ height: "80vh" }}
      >
        <div className={styles.left}>
          <h1 className={styles.headingA}>Add Testimonial</h1>

          {/* form */}
          <div className="mb-3 col-6">
            <label htmlFor="fname" className="form-label">
              Full Name :
            </label>
            <input
              type="string"
              className="form-control"
              name="fname"
              value={formData.fname}
              onChange={onchange}
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="Department" className="form-label">
              Department :
            </label>
            <input
              type="string"
              className="form-control"
              name="Department"
              value={formData.Department}
              onChange={onchange}
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="Batch" className="form-label">
              Batch :
            </label>
            <input
              type="number"
              className="form-control"
              name="Batch"
              value={formData.Batch}
              onChange={onchange}
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="Testimonial" className="form-label">
              Testimonial :
            </label>
            <input
              class="txt"
              type="string"
              className="form-control"
              name="testimonial"
              value={formData.Testimonial}
              onChange={onchange}
            />
          </div>

          {/* btns */}
          <div className="d-flex justify-content-between">
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

export default AdminTestimonial;
