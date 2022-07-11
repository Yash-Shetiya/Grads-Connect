import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GradsConnect from "../../assets/images/GradsConnectLogo.png";
import axios from "../../axios";
import styles from "./Login.module.css";

const ForgotPassword = () => {
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState();
  const [resetPassData, setResetPassData] = useState({
    password: "",
    cpassword: "",
  });
  const [heading, setHeading] = useState("Forgot Password");

  const [isForgotPasswordActive, setIsForgotPasswordActive] = useState(true);
  const [isVerifyOtpPage, setIsVerifyOtpPage] = useState(false);
  const [isResetPasswordPage, setIsResetPasswordPage] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");

  let navigate = useNavigate();

  const sendOtp = () => {
    // setOtp(generatedOtp);
    const temp = Math.floor(Math.random() * 1001) + 1000;
    setGeneratedOtp(temp);

    axios
      .post("http://localhost:8080/email", {
        email,
        text: `Otp for account activation - ${temp}`,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    // if success
    setMsg("Otp Sent successfully!");
    setHeading("Verify OTP");
    setIsForgotPasswordActive(false);
    setIsVerifyOtpPage(true);
  };

  const verifyOTP = () => {
    // if success
    console.log(generatedOtp, otp);
    if (generatedOtp.toString() == otp) {
      setMsg("Otp Verfied successfully!");
      setHeading("Reset Password");
      setIsVerifyOtpPage(false);
      setIsResetPasswordPage(true);
      //   console.log("ok");
    }
    // setMsg("Otp Verfied successfully!");
  };

  const resetPassword = () => {
    // if success
    axios
      .put(`http://localhost:8080/login/${email}`, {
        password: resetPassData.password,
      })
      .then((res) => {
        navigate("/login");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });

    setMsg("Reset Password successfully!");
    // navigate("/login");
  };

  const onchange = (e) => {
    setResetPassData({ ...resetPassData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ height: "80vh" }}
      >
        <div className={styles.left}>
          {msg && (
            <div className="alert alert-success d-flex justify-content-between align-items-center">
              {msg}
              <button type="button" className="btn" onClick={() => setMsg("")}>
                X
              </button>
            </div>
          )}
          <h1 className={styles.heading}>{heading}</h1>

          {/* form */}
          {isForgotPasswordActive ? (
            <>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email :
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button className="btn btn-primary" onClick={sendOtp}>
                Send Otp
              </button>
            </>
          ) : isVerifyOtpPage ? (
            <>
              <div className="mb-3">
                <label htmlFor="otp" className="form-label">
                  OTP :
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <button className="btn btn-primary" onClick={verifyOTP}>
                Verify Otp
              </button>
            </>
          ) : isResetPasswordPage ? (
            <>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password :
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={resetPassData.password}
                  onChange={onchange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="otp" className="form-label">
                  Confirm Password :
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="cpassword"
                  value={resetPassData.cpassword}
                  onChange={onchange}
                />
              </div>
              <button className="btn btn-primary" onClick={resetPassword}>
                Reset Password
              </button>
            </>
          ) : (
            <></>
          )}
        </div>

        <div className={styles.logodiv}>
          <img src={GradsConnect} alt="" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
