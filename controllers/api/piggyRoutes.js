const router = require('express').Router();
const db = require('../../models');

router.get('/',(req,res)=>{
  db.Piggy.findAll()
  .then(userData=>{
      res.json(userData)
  }).catch(err=>{
      console.log(err);
      res.status(500).json({
          message:"Uh oh!",
          error:err
      })
  })
})

router.get('/:id',(req,res)=>{
  db.Piggy.findByPk(req.params.id)
  .then(userData=>{
      res.json(userData)
  }).catch(err=>{
      console.log(err);
      res.status(500).json({
          message:"Uh oh!",
          error:err
      })
  })
})

module.exports = router;