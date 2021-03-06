const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/with", (req, res) => {
  console.log(req.body, req.body.data.attributes.payload);
  res.status(200).json({ data: "ok" });
});

app.listen(process.env.PORT, () => {
  console.log(`server is up at ${process.env.PORT}`);
});
