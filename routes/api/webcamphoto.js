const router = require("express").Router();
var fs = require('file-system');
var file = require('file-system');
var fs = require('fs');
var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var multer = require('multer');
const path = require( 'path' );
var base64Img = require('base64-img');
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/memewars";
// mongoose.connect(MONGODB_URI);
 
// file.readFile === fs.readFile
 
// fs.mkdir('1/2/3/4/5', [mode], function(err) {});
// fs.mkdirSync('1/2/3/4/5', [mode]);
// fs.writeFile('path/test.txt', 'aaa', function(err) {})

//   app.use(multer({ dest: "../src/components/WebCam/images/",
//     rename: function (fieldname, filename) {
//       return filename;
//     },
//    }));
console.log("Writing file...")
    const upload = multer({
        dest: '/Users/szilardmolnar/Documents/CODING_BOOTCAMP/PROJECT_3/final-project/images',
        // storage: storage2, 
        limits: { fileSize: 1024*1024*50 }
    })
    router.route("/").post( ( req, res ) => {
        let imageName=`${Date.now()}.jpg`; 
        base64Img.img(req.body.image, `images`, imageName, function(err, filepath) {
            if(err)
            {
                console.log(err);
                res.sendStatus(500);
            }
            else
            {
                res.send(imageName);
            }
        });
        
    })
/*router.route("/")
   .post( 
       upload.single( 'file' ),
       async ( req, res ) => {
           console.log("In here...",req.files)
           const tempPath = req.file.path;
           const targetPath = path.join( __dirname, '/Users/szilardmolnar/Documents/CODING_BOOTCAMP/PROJECT_3/final-project/images/test.jpg');

           if( path.extname( req.file.originalname).toLowerCase() === '.jpg' ) {
               fs.rename( tempPath, targetPath, err => {
                   if( err ) console.error( err );

                   res
                    .status(200)
                    .contentType( 'text/plain' )
                    .end( 'uploaded file' );
                    
               })
           } else {

            fs.unlink( tempPath, err => {
                if( err ) console.error( err );

                res
                    .status(403)
                    .contentType( 'text/plain')
                    .end( 'only jpg files' );
            })

           }
       
   });*/
   module.exports = router;