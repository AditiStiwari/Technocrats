const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const Data = require("./Database");
app.use("/public", express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname));

app.get("/LandingPage.html", (req, res) => {
  res.sendFile(path.join(__dirname, "LandingPage.html"));
});
app.get("/LoginPage.html", (req, res) => {
  res.sendFile(path.join(__dirname, "LoginPage.html"));
});

app.post("/Signup", async (req, res) => {
  try {
    const ouruser = new Data.Signup({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    });
    const reserved = await ouruser.save();
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/Login", async (req, res) => {
  try {
    let lusername = req.body.lusername;
    let lpassword = req.body.lpassword;

    let check = await Data.Signup.findOne({ username: lusername });
    if (check.password === lpassword) {
      res.sendFile(path.join(__dirname, "HomePage.html"));
    } else {
      res.sendFile(path.join(__dirname, "LoginPage.html"));
    }
  } catch (error) {
    res.sendFile(path.join(__dirname, "LoginPage.html"));
  }
});

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/LandingPage.html`);
});
