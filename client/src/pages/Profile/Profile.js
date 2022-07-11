import React, { useState } from "react";
import style from "./style.module.css";
import GradsConnect from "../../assets/images/GradsConnectLogo.png";
import { Link } from "react-router-dom";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem("data"))
  );

  return (
    <div className="container">
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ height: "80vh" }}
      >
        <div className={style.left}>
          <div className={style.heading}>
            <h1 style={{ fontSize: "40px" }}>My Profile</h1>
            <Link to="/register" className="btn btn-primary">
              Edit
            </Link>
          </div>
          {Object.keys(userDetails).map((key, index) => {
            return (
              <div key={index} style={{ padding: "3px", fontSize: "20px" }}>
                <span
                  style={{ textTransform: "capitalize", fontWeight: "bold" }}
                >
                  {key} :{" "}
                </span>
                <span>{userDetails[key]}</span>
              </div>
            );
          })}
        </div>
        <div className={style.logodiv}>
          <img src={GradsConnect} alt="" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
