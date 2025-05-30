import express from "express";
import data from "./data.js";

const app = express();

app.use(express.json());

app.get("/api/get-users", (req, res) => {
  res.send(data);
});

app.post("/api/save-user", (req, res) => {
  const existingUser = data.map((user) => {
    user.email === req.body.email;
  });

  if (existingUser) {
    res.status(401).send({ message: "User Already Exists." });
  } else {
    const newUser = {
      id: data[data.length - 1].id + 1,
      name: req.body.name,
      email: req.body.email,
    };

    data.push(newUser);
    res.send(newUser);
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
