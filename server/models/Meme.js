const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemeSchema = new Schema({
    baseImgURL: String,
    topText: String,
    topY: String,
    topX: String,
    bottomText: String,
    bottomY: String,
    bottomX: String,
    createdBy: String,
    imageOf: String,
    date: { type: Date, default: Date.now}
});

const Meme = mongoose.model("Meme", MemeSchema);
module.exports = Meme;
