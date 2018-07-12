var express = require('express')
var app = express()
var multer = require('multer')
var fs = require('fs')
var http = require('http')
var request = require('superagent')
var path = require('path')
/*
var router = express.Router
var child_process = require('child_process')
var events=require('events')
var jwt = require('jsonwebtoken')

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

var secretOrPrivateKey='shhhhh'
var token=jwt.sign({uuid:this.uuid},secretOrPrivateKey,{expiresIn:60*60*24})
console.log('token:',token)
res.set('token',token)
var jobPath = 'C:/job.txt'
*/
var uuid = ''
var projectName = ''
// backPath = 'http://192.168.3.35:3000/App/'
/**
 * 接收uuid，创建用户文件夹
 */
app.get('/user', function (req, res) {
    console.log('访问成功')

    uuid = req.param('uuid')
    console.log('uuid:', uuid)

    fs.mkdir('images/' + uuid + '/', function (err) {
        if (err) {
            console.log('文件夹' + uuid + '创建失败：', err)
        } else {
            console.log('文件夹' + uuid + '创建成功')
        }
    })
    res.send()
})

/**
 * 创建指定名称项目
 */
app.get('/creatProject', function (req, res) {

    projectName = req.param('newProject')

    fs.mkdir('images/' + uuid + '/' + projectName + '/', function (err) {
        if (err) {
            console.log('项目' + projectName + '错误：', err)
        } else {
            console.log('项目' + projectName + '创建成功')
            fs.mkdir('images/' + uuid + '/' + projectName + '/' + 'proj/', function (err) {
                if (err) {
                    console.log('proj创建失败:', err)
                }
            })
        }
    })

    res.send()
})

/**
 * 保存图片并重命名
 */
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images/' + uuid + '/' + projectName + '/')
    },
    filename: function (req, file, cb) {
        cb(null, Math.random() + '-' + file.originalname)
    }
})

var upload = multer({
    storage: storage
})

app.post('/upload', upload.single('file'), function (req, res) {
    console.log('文件保存路径', __dirname + req.file.path)

    // console.log('upload response',res)
    res.send()

})
/**
 * 接收完成
 */
app.get('/isFinished',function(req,res){
    console.log('isFinished!')
    reqPyServe()
    res.send()
})
app.get('/getReturn', function (req, res) {
    
    // while (fs.existsSync('images/' + uuid + '/' + projectName + '/' + 'proj/Productions/Production_1/App') == false) {
    //     continue
    // }
    fs.exists('images/'+uuid+'/'+projectName+'/proj/Productions/Production_1/App',function(exists){
        if(!exists){
            res.send('notExists')
        }else if(exists){
            var path = 'images/' + uuid + '/' + projectName + '/proj/Productions/Production_1'
            app.use(express.static(path))
            res.send('Exists')
        }
    })
   
    /*
    var emitter=new events.EventEmitter()
    fs.existsSync('image/'+projectName+'/'+'proj/Productions/Production_1/App/resource')
        console.log('目录已存在：','image/'+projectName+'/'+'proj/Productions/Production_1/App/resource')
        back(res)
    
    fs.writeFile(jobPath,picsPath + '\r\n' + back3DPicPath,function(err){
        if(err){
            console.log(err)
        }else{
            console.log('写入成功')
        }
    })
    */

})

/**
 * 向python后台发送请求
 */
function reqPyServe() {
    var options = {
        hostname: '127.0.0.1',
        port: 8080,
        path: '/pushConvertJob/jpgdirectory/' + projectName + '^' + projectName + '/' + 'proj',
        method: 'GET'
    }

    var otherReq = http.request(options, function (res) {
        console.log('接口返回数据：', res.statusCode)
    })

    otherReq.end()
}

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("访问地址为 http://%s:%s", host, port)
})
// server.setTimeout(0)