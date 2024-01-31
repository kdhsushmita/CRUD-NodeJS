const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,  //key value --nosql -- i.e object
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, "Please add the contact name"],
    },
    email: {
        type: String,
        required: [true, "Please add the contact email"],
    },
    phone: {
        type: String,
        required: [true, "Please add the contact phone"],
    }
},
    {
        timestamps: true,  //created at , updated at aaucha jaba naya user create huncha
    }
)

module.exports = mongoose.model("Contact", contactSchema);