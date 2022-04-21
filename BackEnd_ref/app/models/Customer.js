const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect('mongodb://' + process.env.DB_HOST + '/' + process.env.DB_NAME, { useNewUrlParser: true, useUnifiedTopology: true })

const schemaCustomer = new /* mongoose. */Schema({
    name: { type: String, required: true },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        zipcode: { type: String, required: true },
    },
    nip: String,
    action: {
        type: Schema.Types.ObjectId,
        ref: "Action"
    }

});

module.exports = mongoose.model('Customer', schemaCustomer);


