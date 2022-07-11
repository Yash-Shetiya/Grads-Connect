const firebase = require("../../db");
const firestore = firebase.firestore();

const getCount = async (req, res) => {
  try {
    const count = await firestore.collection("count").doc("counts");
    const data = await count.get();
    res.send(data.data());
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const inEvent = async (req, res) => {
  try {
    const count = await firestore.collection("count").doc("counts");
    const data = await count.get();
    await count.update({ event: data.data().event + 1 });
    res.send("ok");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const change = async (field, num) => {
  try {
    const count = await firestore.collection("count").doc("counts");
    const data = await count.get();
    await count.update({ field: data.data().field + num });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getCount,
  inEvent,
};

// await login.update(data);
