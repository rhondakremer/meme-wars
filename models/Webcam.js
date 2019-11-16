const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WebcamPhoto = new Schema(
    { img: 
        { data: Buffer, contentType: String }
    });
const WebcamPhoto = mongoose.model('Webcamphotos', Schema);

module.exports = WebcamPhoto;
