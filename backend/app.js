const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors');
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")

const app = express();
const port = process.env.PORT || 4000;
dotenv.config()

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//route middlewares
app.use("/api/user", authRoute)
app.use("/api/posts", postRoute)

const uri = process.env.ATLAS_URI;
console.log('uri', uri);
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


app.listen(4000, () => console.log("server up and running"))