import express from "express";
const app = express();

app.get("/", (req, res, next) => {
    console.log("Middleware is running!");
    next();
});

export default app;
