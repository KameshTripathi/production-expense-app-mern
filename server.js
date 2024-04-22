// import express
const express = require('express')
// import cors
const cors = require('cors')
// import morgan
const morgan = require('morgan')
// import colors
const colors = require('colors')
// import dotenv
const dotenv = require('dotenv')
const connectDb = require('./config/connectDb') // gets automatically imported when connectDb() is called.


// config .env file
dotenv.config()


// call database
connectDb()


// create rest object
const app = express()   // Now, all features of express can be used via app.


// add middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())


// add routes
// app.get('/', (req, res) => {
// res.send('<h1>hello from server</h1>')
// })    // First argument is the url pattern where empty slash represents home. Second argument is the call back function having request and response. Since the request method is get, therefore we can check the code in browser also. Had it been post, we would be needing postman, etc. tools or frontend form to do the same.
// user route
app.use("/api/v1/users", require("./routes/userRoute"));
// transaction route
app.use("/api/v1/transactions", require("./routes/transactionRoute"))


// static files
app.use(express.static(path.join(__dirname, './client/build')))

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// create port
const PORT = 8080 || process.env.PORT   // First part is for development phase, second is for production phase.


// listen server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})  // The call back function prints a message.
