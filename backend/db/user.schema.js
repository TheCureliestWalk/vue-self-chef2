import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    settings: {
        money: {
            type: Number,
            default: 0,
        },
        theme: {
            type: String,
            enum: ["light", "dark", "system"],
            default: "light",
        },
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
});

const User = model("users", userSchema);

export default User;
