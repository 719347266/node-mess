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

// exports.save = function (student,callback) {
//   fs.readFile('./db.json','utf8',(err,data)=>{
//     if(err){
//       return  callback(err);
//     }
//     let students =  JSON.parse(data).students
//     student.id = students[students.length-1].id + 1
//     students.push(student)
//     let fileData = JSON.stringify({students});
//     fs.writeFile('./db.json',fileData,err => {
//       if (err){
//         return callback(err);
//       }
//       callback();
//     })
//
//   })
// }

/**
 * 更新学生列表
 */
exports.updata = function (callback) {
}
/**
 * 删除学生列表
 */
exports.dele = function (callback) {
}