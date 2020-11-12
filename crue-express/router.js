let express = require('express')
let fs = require('fs')
let students = require('./student')

let router = express.Router()

router.get('/students',(req,res)=>{
  students.find((err,students)=>{
    if (err){
      return res.status(500).send('error')
    }
    res.render('index.html',{
      list:['苹果','雪梨','香蕉','榴莲'],
      students
    })
  })
})

router.get('/students/new',(req,res)=>{
  res.render('new.html');
})
router.post('/students/new',(req,res)=>{
  students.save(req.body,(err)=>{
    if (err){
      return res.status(500).send('error');
    }
    res.redirect('/students')
  })
})
module.exports = router