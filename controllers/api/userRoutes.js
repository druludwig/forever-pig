const router = require('express').Router();
const db = require('../../models');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
  db.User.findAll()
    .then(userData => {
      res.json(userData)
    }).catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Uh oh!",
        error: err
      })
    })
})

router.get('/:id', (req, res) => {
  db.Piggy.findByPk(req.params.id)
    .then(userData => {
      res.json(userData)
    }).catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Uh oh!",
        error: err
      })
    })
})

// router.post("/", (req, res) => {
//   if(!req.session?.user?.id){
//     res.status(401).json({
//       message: "you must oink-in first"
//     })
//   }else {
//     db.User.findByPk(req.session.user.id).then(yourData => {
//       yourData.addFollow(req.body.follow).then(done => {
//         res.json({
//           message:"followed!"
//         })
//       })
//     })
//   }
// })
router.post("/login",(req,res)=>{
  db.User.findOne({
      where:{
          email:req.body.email,
      }
  }).then(userData=>{
      if(!userData){
          res.status(403).json({
              message:"Invalid username or password"
          })
      } else {
          if(bcrypt.compareSync(req.body.password,userData.password)){
              req.session.user = {
                  email:userData.email
              }
              res.json(userData)
          } else {
              res.status(403).json({
                  message:"Invalid username or password"
              })
          }
      }
  }).catch(err=>{
      console.log(err);
      res.status(500).json({
          message:"Uh oh!",
          error:err
      })
  })
})


router.get("/session", (req, res) => {
  res.json ({ 
    sessionData:req.session
  })
})

router.post("/", (req, res) => {
  db.User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
  })
    .then(newUser => {
      req.session.user = {
        id:userData.id,
        username:userData.username,
        email:userData.username,
        email:userData.email
      }
      res.json(newUser);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: "error",
        error: err
      })
    })
})



router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!userData) {
      res.status(404).json({ message: 'No dan ol user found with that id!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
