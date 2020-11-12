let fs = require('fs')
/**
 *  获得学生列表
 */
exports.find = function (callback) {
  fs.readFile('./db.json', 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }
    callback(null, JSON.parse(data).students);
  })
}

/**
 * id查询学生
 */
exports.findByid = function (id,callback){
  fs.readFile('./db.json','utf8',(err, data) => {
    if (err){
      return callback(err)
    }
    let students = JSON.parse(data).students
    let ret = students.find(item=>{
      return  item.id == id
    })
    callback(null,ret)
  })
}
/**
 * 保存学生列表
 */
exports.save = function (student, callback) {
  fs.readFile('./db.json', 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }
    let students = JSON.parse(data).students
    student.id = students[students.length - 1].id + 1
    students.push(student)
    let findata = JSON.stringify({students})
    fs.writeFile('./db.json',findata,err=>{
      if(err){
        return callback(err)
      }
      callback();
    })
  })
}

/**
 * 更新学生列表
 */
exports.updataId = function (student,callback) {
  fs.readFile('./db.json','utf8',(err,data)=>{
    if (err){
      return callback(err)
    }
    let students = JSON.parse(data).students
    let stu =  students.find(item=>{
      return item.id == parseInt(student.id)
    })
    for(let key in student){
      stu[key] = student[key]
    }
    let fileData = JSON.stringify({students})

    fs.writeFile('./db.json',fileData,err=>{
      if (err){
        return callback(err)
      }
      callback()
    })
  })
}
/**
 * 删除学生列表
 */
exports.dele = function (callback) {
}