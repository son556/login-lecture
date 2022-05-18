"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.crtl");

const multer   = require('multer');

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

router.get("/upload",ctrl.output.upload)
// router.post("/upload", ctrl.process.upload)

var fs = require('fs');

var storage  = multer.diskStorage({ // 2
  destination(req, file, cb) {
    cb(null, 'uploadedFiles/');
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

var uploadWithOriginalFilename = multer({ storage: storage });

// router.get('/', function(req,res){
//     res.render('upload');
//   });
  
  router.post('/upload', uploadWithOriginalFilename.single('attachment'), function(req,res){ // 5
      let test = JSON.stringify(req.file)
      var dejson = JSON.parse(test)
      var path = dejson.path
      fs.readFile(path, function(err, data){
          console.log('picture loading...');
          res.writeHead(200);
          res.write(data);
          res.render('confirmation');
          return res.write(data);
          // res.end();    
      });
  });
 

module.exports = router;