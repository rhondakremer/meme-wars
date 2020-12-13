const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeedSchema = new Schema({
    meme1: String,
    meme1Initiator: String,
    meme2: String,
    meme2Challenger: String,
    voted: [String],
    meme1votes: Number, 
    meme2votes: Number,
    date: { type: Date, default: Date.now}
});

const Feed = mongoose.model("Feed", FeedSchema);
module.exports = Feed;