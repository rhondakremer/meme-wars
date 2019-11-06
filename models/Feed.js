const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeedSchema = new Schema({
    user1email: String,
    user2email: String,
    meme1: { data: Buffer, contentType: String },
    meme2: { data: Buffer, contentType: String },
    voted: [String],
    votes: [{"meme1votes": 0}, {"meme2votes": 0}],
    date: { type: Date, default: Date.now}
});

const Feed = mongoose.model("Feed", FeedSchema);
module.exports = Feed;