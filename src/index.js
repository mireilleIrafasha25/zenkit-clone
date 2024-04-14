import swagger from '../doc/swagger.json' assert {type:'json'};
import swaggerUi from "swagger-ui-express"

import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import configurations from "./configs/index.js";
import taskRouter from "./routes/task.routes.js";
import notfound from "../notfound/notfound.js";
import errorhandler from "../middleware/errorhandler/errorhandler.js";

const corsOptions = {
    allowedHeaders: ["Authorization","Content-Type"],
    methods: ["GET", "POST", "UPDATE" ],
    origin: ["http://192.168.1.150:8080", "//https://contact-app-client-xbck.onrender.com/"],
}

const app = express();
app.use(cors());
app.use('/api_doc',swaggerUi.serve,swaggerUi.setup(swagger))
app.use(express.json());
app.use('/task', taskRouter);
app.use(notfound);




mongoose.connect('mongodb+srv://mireilleirafasha:sd8MfvEL61gBjD6E@cluster0.4bfpmyu.mongodb.net/zenkit')
.then(() => {
    console.log("Connected to MongoDB");
})
.catch(err => {
    console.log(err);
})

app.listen(configurations.PORT, () => {
    console.log(`Server is running on port ${configurations.PORT}`);
})
app.use(errorhandler);