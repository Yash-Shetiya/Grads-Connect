import React, { useState } from "react";
import styles from "./Donate.module.css";
import GradsConnect from "../../assets/images/GradsConnectLogo.png";
import { useNavigate } from "react-router-dom";
const Donate = () => {
  const [formData, setFormData] = useState({ email: "", fname: "", mob: "" });

  let navigate = useNavigate();

  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitdata = () => {
    console.log("Data Submited");
  };

  return (
    <div className="container">
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ height: "80vh" }}
      >
        <div className={styles.left}>
          <hr></hr>
          <h1 className={styles.headingA}>Donation Form</h1>
          <h5 className={styles.subheading}>
            Wherever you go, go with all your heart.
          </h5>
          <p>
            {" "}
            It's Time To Give Back, We All Faces Many Problems During Our
            Graduation But With Your Help We Can Guide And Help Your Fellow
            Juniors, please Fill Below Form And Let College Know You Are Willing
            To Donate, After Submitting Below Form Admin Will Contact You For
            Further Process. Thank You For Your Help Toward College....!
          </p>
          <hr></hr>

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
            <label htmlFor="email" className="form-label">
              Email :
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={onchange}
            />
          </div>

          <div className="mb-3 col-6">
            <label htmlFor="mob" className="form-label">
              Mobile No. :
            </label>
            <input
              type="phone number"
              className="form-control"
              name="mob"
              value={formData.mob}
              onChange={onchange}
            />
          </div>
          <div>
            <p>Select Payment Gateway :</p>
            <input type="radio" value="Male" name="gender" /> UPI
            <input
              type="radio"
              value="Female"
              name="gender"
              className="ms-4"
            />{" "}
            Net Banking
            <input
              type="radio"
              value="Other"
              name="gender"
              className="ms-4"
            />{" "}
            Debit Or Credit Card
          </div>
          <hr></hr>

          {/* btns */}
          <div className="d-flex justify-content-between ">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={submitdata}
            >
              Donate
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

export default Donate;
