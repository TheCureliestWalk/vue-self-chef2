import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Please send a BODY request with POST method");
});

app.post("/:body", (req, res) => {
    res.status(200).json({
        param: req.params.body,
    });
});

export default app;
