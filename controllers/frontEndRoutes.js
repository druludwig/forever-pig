const express = require('express');
const router = express.Router();
const db = require('../models');

router.get("/",(req,res)=>{
    res.render("homepage");
})

router.get("/directory",(req,res)=>{
    res.render("directory")
})

router.get("/account",(req,res)=>{
    res.render("user-account");
})

router.get("/login",(req,res)=>{
    res.render("user-login");
})

router.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/")
})

// router.get('/logout', (req,res) => {
  
//     req.session.destroy(function(err) {
   
//     res.redirect('/');
  
//   });
//   });

router.get("/newpiggy",(req,res)=>{
    res.render("new-piggy");
})


module.exports = router;