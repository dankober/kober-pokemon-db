var express = require("express");

const app = express();
const port = process.env.PORT || 3000;

var routes = require("./src/api/routes");
routes(app);

app.listen(port);

console.log(`API started on ${port}`);
