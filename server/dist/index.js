"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _connection = _interopRequireDefault(require("./database/connection.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
const zomato = (0, _express.default)();
zomato.use(_express.default.json());
zomato.get("/", (req, res) => {
  res.json({
    message: "server is runnig.."
  });
});
const port = 4000;
zomato.listen(port, () => {
  (0, _connection.default)().then(() => {
    console.log("running");
  }).catch(error => {
    console.log('server is running but DB connection is failed');
    console.log(error);
  });
});