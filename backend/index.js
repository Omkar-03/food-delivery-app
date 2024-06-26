require('dotenv').config();
const express = require('express')
const mongoDB = require('./db')
const app = express()
const port = 5000

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://main--hungryhubapp.netlify.app");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

mongoDB();

app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})