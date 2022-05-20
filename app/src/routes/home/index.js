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

router.get("/upload",ctrl.output.upload);

// router.post("/upload", ctrl.process.upload)

var fs = require('fs');
var file_name;

var storage  = multer.diskStorage({ // 2
  destination(req, file, cb) {
    cb(null, 'uploadedFiles/');
  },
  filename(req, file, cb) {
    file_name = file.originalname;
    cb(null, file.originalname);
  },
});

var uploadWithOriginalFilename = multer({ storage: storage });

router.post('/confirmation', uploadWithOriginalFilename.single('attachment'), function(req,res){ // 5
  res.render("home/confirmation");
});


router.get('/picture', function(req,res){ // 5

  let path = "D:\\nodejs\\server_test\\app\\uploadedFiles\\" + file_name;
  fs.readFile(path, function(err, data){
    res.writeHead(200);
    res.write(data);
    res.end();    
  }); 

});  


router.post('/result', function(req,res){ // 5

  var PythonShell = require("python-shell");
  var options = {
      mode: 'text',
      pythonPath: '',
      pythonOptions: ['-u'],
      scriptPath: '',
      args: ['D:/nodejs/server_test/app/uploadedFiles/']
  };

  PythonShell.PythonShell.run('test.py', options, function(err, results){
      
      if (err) {console.log(err); return err};
      
      console.log('results: %j', results); 
      
  });

  res.render("home/result");
});

router.get('/picture_gray', function(req,res){ // 5

  let path = "D:\\nodejs\\server_test\\app\\image\\" + file_name;
  fs.readFile(path, function(err, data){
    res.writeHead(200);
    res.write(data);
    res.end();    
  }); 

});

module.exports = router;