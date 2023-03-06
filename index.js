import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./routes/data.js";

const app=express();
// app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(bodyParser.text());

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/Truckrr')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use("/api",routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));