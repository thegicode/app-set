const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("dev"));

app.listen(port, () => {
    console.log(`Start: http://localhost:${port}`);
});
