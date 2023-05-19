import bcrypt from "bcrypt";

import express from "express";
const app = express();

import User from "../db/user.schema.js";

// get all users
app.get("/user", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// get user by Username
app.get("/user/:username", async (req, res) => {
    const users = await User.findOne({ username: req.params.username });
    if (!users) {
        return res.status(401).send({
            message: "User not found."
        }); // if not 'return' it will error because there's no `users` from const that can't find
    }
    res.json(users);
});

// login method
app.post("/user/login", (req, res) => {});

// register method
app.post("/user/register", async (req, res) => {
    const { username, password } = req.body;
    // check if username and password are entered // use typeof for checking password is string otherwise it error. In ES2020 is introduce ? operator for checking null and undefined.
    if (typeof password === "string" && password.length < 6) {
        return res.status(401).send({
            message: "Password must be at least 6 characters long.",
        });
    }
    try {
        const users = await User.findOne({ username });
        // find if the request username is already had on database.
        if (users) {
            return res.status(401).json({
                message: "Username already exist."
            })
        }
        // create new user if not exist or duplicate.
        const user = new User({
            username,
            password: await bcrypt.hash(password, 10),
        });
        await user.save();
        res.json({
            message: `Account registered successfully.`,
        });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(401).json({
                message: "Username already exists.",
            });
        } else {
            return res.status(401).json({
                message: `${err.message}`,
            });
        }
    }
});

export default app;
