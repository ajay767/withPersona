const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/with", (req, res) => {
  console.log(req.body);
  res.status(200);
});

app.listen(process.env.PORT, () => {
  console.log(`server is up at ${process.env.PORT}`);
});
