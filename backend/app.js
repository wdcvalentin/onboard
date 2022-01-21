const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors');
const dotenv = require("dotenv")

//routes
const authRoute = require("./routes/auth/auth")
const userRoute = require("./routes/user.route")
const companyRoute = require("./routes/company.route")
const JobRoute = require("./routes/job.route")
const EventRoute = require("./routes/event.route")

const app = express();
const port = process.env.PORT || 4000;
dotenv.config()

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//route middlewares
app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/company", companyRoute)
app.use("/api/job", JobRoute)
app.use("/api/event", EventRoute)

const uri = process.env.ATLAS_URI;
mongoose.connect(
    uri, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
}
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.listen(port, () => console.log("server up and running"))