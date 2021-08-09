const express = require('express');
const router = express.Router();
const db = require('../models');

router.get("/", (req, res) => {
    res.render("homepage");
})

router.get('/directory', async (req, res) => {
    try {
        const piggyData = await db.Piggy.findAll()
        const pigSend = piggyData.map((piggy) => piggy.get({ plain: true }));
        console.log(pigSend)
        res.render('directory', { pigSend });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get("/pig-profile/:id", async (req, res) => {
    try {
        const piggyData = await db.Piggy.findByPk(req.params.id)
        const pigSend = piggyData.dataValues
        res.render('pig-profile', pigSend);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get("/account", async (req, res) => {
    try {
        const piggyData = await db.Piggy.findAll()


        const pigSend = piggyData.map((piggy) => piggy.get({ plain: true }));
        console.log(pigSend)
        res.render('user-account', { pigSend });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.get("/login", (req, res) => {
    res.render("user-login");
})

router.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/")
})

router.get("/newpiggy", (req, res) => {
    res.render("new-piggy");
})


module.exports = router;