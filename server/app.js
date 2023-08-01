/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const { isProduction, staticPath, port } = require("./config.js");
const staicRoutes = require("./staicRoutes.js");
const express = require("express");
const app = express();

console.log(isProduction, port);

app.use(express.static(staticPath));
// app.use(express.static("dev"));

app.listen(port, () => {
    console.log(`Start: http://localhost:${port}`);
});

staicRoutes(app, staticPath);
