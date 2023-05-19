import express from "express";
const app = express();

app.get("/cookie", (req, res) => {
    res.cookie("name", "ThisisCookie", {
        expire: Date.now() + 60 * 30 * 1000,
        maxAge: 60 * 30 * 1000,
    });
    res.redirect("/");
});
app.get("/clear", (req, res) => {
    res.clearCookie("name");
    res.redirect("/");
});

export default app;
