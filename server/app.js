const express = require('express');
const app = express();
app.get("/api", (req, res) => {
    res.json("api")
})

app.listen(() => {
    console.log(`http://localhost:4000`)
})