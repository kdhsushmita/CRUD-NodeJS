const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add the username"],
    },
    email: {
        type: String,
        required: [true, "Please add email"],
    },
    password: {
        type: String,
        required: [true, "Please add password"],
    }
},
    {
        timeStamp: true
    }
)

module.exports = mongoose.model("User", userSchema);