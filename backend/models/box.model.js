const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const boxSchema = new Schema({
    userID: { type: String, required: true },
    description: {type: String, required: true },
    date: { type: Date, required: true },
    total: { type: Number, required: true}
    }, {
        timestamps: true,
    }
);
const Box = mongoose.model('Box', boxSchema);
module.exports = Box;