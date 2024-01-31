const mongoose = require("mongoose"); //for mongodb database connection

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);  //for connection```````````````````````````
        console.log("Database connected succesfully", connect.connection.host, connect.connection.name);
    }
    catch (err) {
        console.log("DB Error", err);
        process.exit(1);
    }
}


module.exports = connectDB;