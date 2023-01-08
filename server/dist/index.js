"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _connection = _interopRequireDefault(require("./database/connection"));
var _auth = _interopRequireDefault(require("./api/auth"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Database connection

_dotenv.default.config();
const zomato = (0, _express.default)();
zomato.use(_express.default.json());
zomato.get("/", (req, res) => {
  res.json({
    message: "Server is running.."
  });
});

// /auth/signup
zomato.use("/auth", _auth.default);
const PORT = 4000;
zomato.listen(PORT, () => {
  (0, _connection.default)().then(() => {
    console.log("Server is running !!");
  }).catch(error => {
    console.log("Server is running, but the database connection failed");
    console.log(error);
  });
  // console.log("Server is running !!");
});