const firebase = require("../../db");
const firestore = firebase.firestore();
const fs = require("fs");
// const csv = require("fast-csv");
const csv = require("csv-parser");

const CSVHandler = async (req, res) => {
  const batch = req.params.batch;

  // const fileRows = [];
  // csv
  //   .parseFile(req.file.path)
  //   .on("data", function (data) {
  //     fileRows.push(data); // push each row
  //   })
  //   .on("end", function () {
  //     console.log(fileRows);
  //     fs.unlinkSync(req.file.path); // remove temp file
  //     //process "fileRows" and respond
  //     res.send("ok");
  //   });

  //   const results = []; //######
  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", async (data) => {
      //   results.push(data); //    #########
      //   await firestore.collection(`students${batch}`).doc(data.prn).set(data);
      try {
        await firestore.collection(`students${batch}`).doc(data.prn).set(data);
      } catch (error) {
        console.log(error.message);
      }
    })
    .on("end", () => {
      //   console.log(results);       #########
      fs.unlinkSync(req.file.path); // remove temp file
      //   up(results);
      res.send("Record saved successfuly");
    });

  //   const up = async (results) => {
  //     for (let i = 0; i < results.length; ++i) {
  //       try {
  //         let data = results[i];
  //         // console.log(data);
  //         await firestore.collection(`students${batch}`).doc(data.prn).set(data);
  //       } catch (error) {
  //         console.log(error.message);
  //       }
  //     }
  //   };
  //   res.send("Record saved successfuly");
};

module.exports = {
  CSVHandler,
};
