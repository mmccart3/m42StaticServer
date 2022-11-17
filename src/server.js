const express = require("express");
const app = express();

app.use("/static",express.static("public"));
app.use("/another",express.static("public/another.html"));

app.listen(5001, () => {
    console.log("Listening on Port 5001")
});