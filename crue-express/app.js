let express = require('express');
let app = express();
let router = require('./router');
let bodyparser = require('body-parser')


app.use(bodyparser.urlencoded({express:true}))
app.use(bodyparser.json())
app.engine('html',require('express-art-template'))
app.use('/node_modules/',express.static('./node_modules'))
app.use('/public/',express.static('./public'))

app.use(router)
app.listen(3000,()=>{
  console.log('开启成功');
})