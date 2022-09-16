const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Technocrats", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we are connected");
});

var signupSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});
var Signup = mongoose.model("Signup", signupSchema);
module.exports.Signup = Signup;



var loginSchema = new mongoose.Schema({
  lusername: {
    type: String,
    required: true,
  },
  lpassword: {
    type: String,
    required: true,
  }
});
var Login = mongoose.model("Login", loginSchema);
module.exports.Login = Login;
