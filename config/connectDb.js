// import mongoose
const mongoose = require('mongoose')
// import colors
const colors = require('colors')


// function to connect to db
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)   // await establishing of connection. Within brackets we provide the mongodb url which comes from an env variable.
        console.log(`server running on ${mongoose.connection.host}`.bgCyan.white)   // prints when connection is established
    } catch (error) {
        console.log(`${error}`.bgRed)   // prints the error
    }
}

// export this function
module.exports = connectDb

