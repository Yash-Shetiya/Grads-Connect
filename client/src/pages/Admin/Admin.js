import React, { useState } from "react";
import styles from "./admin.module.css";
import GradsConnect from "../../assets/images/GradsConnectLogo.png";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
const Admin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  let navigate = useNavigate();

  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

  const handleLogin = () => {
    console.log(formData);
    axios
      .post("http://localhost:8080/login", formData)
      .then((data) => {
        console.log(data.data);
        if (data.data.password == formData.password) {
          navigate("/adminhome");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="container">
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ height: "80vh" }}
      >
        <div className={styles.left}>
          <h1 className={styles.headingA}>Login</h1>

          {/* form */}
          <div className="mb-3 col-7">
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
          <div className="mb-3 col-7">
            <label htmlFor="password" className="form-label">
              Password :
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={onchange}
            />
          </div>

          {/* btns */}
          <div className="justify-content-between">
            <button
              className="btn btn-primary m-2"
              type="submit"
              onClick={handleLogin}
            >
              LogIn
            </button>
            <button
              type="button"
              className="btn btn-primary m-2"
              onClick={() => navigate("/forgotpassword")}
            >
              Forgot Password?
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

export default Admin;
