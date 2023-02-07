const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const user = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    address: {
      street: "123 Main St.",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
    phone: "555-555-5555",
    website: "https://johndoe.com",
    company: {
      name: "Acme Inc.",
      catchPhrase: "Making things happen!",
      bs: "Innovative solutions for a better tomorrow.",
    },
  };
  res.json(user);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
