import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../OurGrads/OurGrads.module.css";

// import axios from "../../axios";
import axios from "axios";

const AdminVerify = () => {
  let [year, setYear] = useState("2022");

  const [batchItems, setBatchItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/pendingStudents/${year}`)
      .then((res) => setBatchItems(res.data))
      .catch((err) => console.log(err));
  }, [year]);

  let headerText = `Batch ${year}`;
  return (
    <div className="containerv">
      <button
        onClick={() => {
          year == "2021" ? setYear("2022") : setYear("2021");
        }}
      >
        {headerText && <span className={styles.headerText}>{headerText}</span>}
      </button>
      <div className="row">
        {batchItems.map((items, index) => {
          return (
            <div className={`col-md-3 py-3 ${styles.cardBox}`} key={index}>
              <div className={styles.card}>
                <div className={styles.front}>
                  <img src={"/Profile.png"} alt="person" />
                  {/* <img
                    src={`https://firebasestorage.googleapis.com/v0/b/grades-connect.appspot.com/o/${items.prn}.jpeg?alt=media`}
                    alt="personfsfs"
                    onerror="onerror=null; this.src='/logo192.png'"
                  /> */}
                  <br></br>
                  <span>
                    <p>{items.name}</p>
                    <p>{items.department}</p>
                    <p>{items.email}</p>
                    <p>
                      <u>College Of Placement :</u>
                      <br />
                      {items.clgPlacement}
                    </p>
                    <p>
                      <u>Current Designnation :</u>
                      <br />
                      {items.designation}
                    </p>
                  </span>
                </div>
                <div className={styles.back}>
                  <span>
                    <p>
                      <u>Organisation :</u>
                      <br />
                      {items.organisation}
                    </p>
                    <p>
                      <u>Place of Organisation :</u>
                      <br />
                      <p>{items.placeOrganisation}</p>
                    </p>
                    <p>
                      <u>Area of Work :</u>
                      <br />
                      {items.areaWork}
                    </p>
                    <p>
                      <u>Achievement :</u>
                      <br />
                      {items.achievement}
                    </p>
                    <p>
                      <button
                        onClick={() => {
                          console.log(items.prn);
                          axios
                            .post(
                              `http://localhost:8080/pendingStudent/${year}/${items.prn}`
                            )
                            .then((res) => {
                              console.log(res.data);
                            })
                            .catch((err) => console.log(err));
                          setBatchItems(
                            batchItems.filter((item) => {
                              return item.prn != items.prn;
                            })
                          );
                        }}
                      >
                        Verify
                      </button>
                    </p>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminVerify;
