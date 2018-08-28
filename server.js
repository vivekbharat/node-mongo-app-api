const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("./db/mongoose");

const Todo = require("./models/todo");
const User = require("./models/user");

const app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  // console.log(req.body);
  const todo = new Todo({
    text: req.body.text
  });
  todo
    .save()
    .then(data => res.send(data))
    .catch(e => {
      console.log(`Error Occured while saving ${e}`);
      res.sendStatus(404).send(e);
    });
});

app.listen(3000, () => console.log("Server started on port 3000"));

// const vivek = new User({
//   email: "v329@njit.edu"
// });

// vivek
//   .save()
//   .then(data => console.log(`User saved - ${data}`))
//   .catch(e => console.log(`User not saved ${e}`));

// const todo = new Todo({
//   text: "Study React",
//   completed: true,
//   completedAt: 60 * 60 * 24 * 30 * 48
// });

// todo
//   .save()
//   .then(data => console.log(`Saved Todo ${data}`))
//   .catch(err => console.log(`unable to save ${err}`));
