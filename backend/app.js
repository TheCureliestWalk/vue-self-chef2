import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import multer from "multer";
import path from "node:path";
import process from "node:process";
import helmet from "helmet";
import session from "express-session";
import compression from 'compression';
// MongoDB
import { connectDB } from "./db/connect.js";

const app = express();
const port = process.env.PORT || 3000;

const secretCookie = "JustAHash";
// App Use
app.use(helmet());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
//app.use(session({ secret: secretCookie, resave: false, saveUninitialized: true, cookie: { secure: true } }));
app.use(compression({ filter: shouldCompress }))
 
function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }
 
  // fallback to standard filter function
  return compression.filter(req, res)
}
app.use("/public", express.static(path.join(process.cwd(), "public")));
app.use(multer().array());
app.use((err, req, res, next) => {
    // Handle the error
    console.error(err);
    res.status(500).send("Internal Server Error");
});
connectDB();

// Routes
import indexRouter from "./routes/index.js";
import cookieRouter from "./routes/cookie.js";
import userRouter from "./routes/user.js";
import dashboardRouter from "./routes/dashboard.js";
app.use(indexRouter);
app.use(cookieRouter);
app.use(userRouter);
app.use("/dashboard", dashboardRouter);

app.listen(port, () => console.log(`Server at http://localhost:${port}`));
