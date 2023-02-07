const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const user = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
  };
  res.json(user);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
