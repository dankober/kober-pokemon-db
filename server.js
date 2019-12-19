const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;

var routes = require("./src/api/routes");
routes(app);

app.listen(port, function() {
  console.info(`API started on ${port}`);
});
