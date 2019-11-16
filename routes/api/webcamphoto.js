var fs = require('file-system');
var file = require('file-system');
var fs = require('fs');
var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var multer = require('multer');

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/memewars";
mongoose.connect(MONGODB_URI);
 
file.readFile === fs.readFile
 
fs.mkdir('1/2/3/4/5', [mode], function(err) {});
fs.mkdirSync('1/2/3/4/5', [mode]);
fs.writeFile('path/test.txt', 'aaa', function(err) {})

var Item = new ItemSchema(
    { img: 
        { data: Buffer, contentType: String }
    }
  );
  var Item = mongoose.model('Webcamphotos',ItemSchema);

  app.use(multer({ dest: "../src/components/WebCam/images/",
    rename: function (fieldname, filename) {
      return filename;
    },
   }));

   app.post("/api/photo",function(req,res){
    var newItem = new Item();
    newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
    newItem.img.contentType = "image/jpeg";
    newItem.save();
   });