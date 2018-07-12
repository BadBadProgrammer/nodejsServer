/*
var fs=require('fs')
var data='第1行'+'\r\n'+'第2行'
var path='/Users/CHD-JS-014/Desktop/test1.txt'
// fs.writeFile(path,data,{flag:'w'},function(err){
//     if(err){
//         console.log('失败',err)
//     }else{
//         console.log('读取成功')
//         fs.readFile(path,function(err,data){
//             if(err){
//                 console.log(err)
//             }else{
//                 console.log(data)
//             }
//         })
//     }
// })
fs.open(path,'w+',function(err){
    if(err){
        console.log(err)
    }
})
*/

/*
var express=require('express')
var app=express()

var path='D:/webphoto/12345678/shilaba/proj/Productions/Production_2'

app.use(express.static(path)).listen(3000)
*/

/*
var exec = require('child_process').exec
var execFile = require('child_process').execFile

var imageProcessPath = 'C:/Users/CHD-JS-014/Desktop/App/picUploadDemo/uploadServe/utils/AutorunContextCapture SDK Command Prompt.lnk'
var cmd='cd C:/ProgramData/Microsoft/Windows/Start Menu/Programs/Bentley/ContextCapture Center 64-bit && AutorunContextCapture SDK Command Prompt'
var testCmd='cd C:/Users/CHD-JS-014/Desktop && test demo shut down'
// exec(testCmd,function(error,stdout,stderr){
//     if(error){
//         console.log(error) 
//     }
//     console.log(stdout)
// })
// execFile(imageProcessPath,function(error,stdout,stderr){
//     if(error){
//         console.log(error)
//     }
//     console.log(stdout)
// })
const path = require('path');
var depath=path.format({
    dir:__dirname+'\\image',
})
console.log(depath)
*/

/*
var http=require('http')

var options={
    hostname:'127.0.0.1',
    port:8080,
    path:'/pushConvertJob/jpgdirectory/'+'projectName'+'^'+'projectName'+'/'+'proj',
    method:'GET'
}
var req=http.request(options)
req.end();
*/

/*
for(let i=0;i<10;i++){
        console.log(i) 
}
if(i=9){
     console.log('ok')
} 
*/

/*
var fs=require('fs')
var events=require('events')

var chokidar = require('chokidar')
*/

/*
aaa=true
var watcher = chokidar.watch('images/c3e3a4c0d307afcd/zzzzzz/proj', {
    persistent: true
  });
  var log = console.log.bind(console);
  watcher
  .on('add',path => log(`${path} has been added`))
  .on('addDir', path => log(`Directory ${path} has been added`))
  .on('unlink',path=>log(`${path} has been unlink`))
  .on('unlinkDir', path => log(`Directory ${path} has been removed`))
  .on('error', error => log(`Watcher error: ${error}`))
  .on('ready', () => log('Initial scan complete. Ready for changes'))
  .on('raw', (event, path, details) => {
    log('Raw event info:', event, path, details);
  });
var emitter = new events.EventEmitter()
emitter.on('isExist',function(arg1){
    console.log(arg1)
})
emitter.emit('isExist',fs.existsSync('image/'+'zzzzzz/'+'proj/Productions/Production_1/App/resource')||false)
*/

/*
var http=require('http')
var options={
    hostname:'127.0.0.1',
    port:8080,
    // path:'/pushConvertJob/jpgdirectory/re^re/proj',
    path:'/getJobStatus',
    method:'GET'
}
var otherReq=http.request(options,function(res){
    // console.log(res)
    console.log('接口返回数据：',res.statusMessage)
    console.log(res.statusCode)
})
otherReq.end()
*/

/*
var fs=require('fs')
while(fs.existsSync('images/c3e3a4c0d307afcd/fucku/proj/Productions/Production_1/App')==false){
    continue
}
console.log(fs.existsSync('images/c3e3a4c0d307afcd/fucku/proj/Productions/Production_1/App'))
*/

/*
var fs=require("fs")
fs.exists('images/c3e3a4c0d307afcd/re/proj/App',function(exists,path){
    console.log(exists);
    console.log(!exists);
    console.log(path);
    
})
*/

// console.log([1,2,3].map(x=>x*x))
/*
function factorial(n, total) {
    if (n === 1) return total;
    return factorial(n - 1, n * total);
}
factorial(5, 1) // 120
*/

/*
let birth='888'
const person = {
    name:'www',
    birth,
    hello(){console.log(this.name,birth);
    }
}
console.log(person);
console.log(person.hello());
*/

/*
let a = Symbol('name')
console.log(a)
*/

/*
function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
      strMap.set(k, obj[k]);
    }
    return strMap;
  }

function jsonToStrMap(jsonStr) {
    return objToStrMap(JSON.parse(jsonStr));
  }
  
  console.log(jsonToStrMap('{"yes": true, "no": false}'));
//   Map { 'yes' => true, 'no' => false }
*/
