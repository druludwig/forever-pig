const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/',(req,res)=>{
    db.Piggy.findAll().then(piggy=>{
        const jsonPiggy = piggy.map(piggy=>{
            return piggy.get({plain:true})
        })
        console.log(jsonPiggy);
        res.render("index",{
            piggy:jsonPiggy
        })
    })
})

router.get("/login",(req,res)=>{
    res.render("login");
})

router.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/")
})

router.get("/profile",(req,res)=>{
    if(req.session.user){
        db.User.findByPk(req.session.user.id,{
            include:[db.Piggy]
        }).then(userData=>{
            const userJson = userData.get({plain:true})
            console.log(userJson)
            res.render("profile",userJson)
        })
    } else {
        res.redirect("/login")
    }
})

module.exports = router;