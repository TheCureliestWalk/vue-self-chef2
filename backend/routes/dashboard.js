import express from "express";
import authMiddleware from "../middleware/auth.js";
const app = express();

app.get("/", authMiddleware, (req, res) => {
    res.json({
        url: req.url,
        name: req.query.name,
    });
});

export default app;
