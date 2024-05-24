const express = require('express');
var bodyParse           = require('body-parser');
const sqlite3			= require('sqlite3').verbose();
// const mainRouter = require('./js/router');
const mainRouter = require('./js/temp_router');
// const { default: rateLimit } = require('express-rate-limit');
import * as rateLimit from 'express-rate-limit'
var app                 = express()

const limiter = rateLimit({
    windowMs: 1000,
    max: 2
})

const global_limiter = rateLimit({
    windowMs: 30*60*1000,
    max: 21000
})

app.use(global_limiter)

// token有效时间
app.use(bodyParse.json({limit: '10mb'}))
app.use(bodyParse.urlencoded({limit: '10mb', extended:true}))

app.use('/', mainRouter)

var db = new sqlite3.Database(
    './database/contents.db',
    function (err) {
        if (err) {
            console.log(err.message)
        }
    }
)

// 新闻
// var newsCache = {}
// var trendingNews = []
// db.all('select newsMain.title, newsMain.detailId, newsMain.cover, news.author, news.datetime from newsMain join news on news.id=newsMain.detailId order by news.read_num desc limit 7 ', (err, rows)=>{
//     if(rows != null){
//         trendingNews = rows
//     }
// })

// app.post('/getNews', limiter, (req, res)=>{
//     var id = req.body.id
//     if(newsCache[id]==null){
//         db.get('select ifrefer,title,contents,author,datetime,read_num from news where id=?', [id], (err, row)=>{
//             if(row == null){
//                 res.json({status: false})
//             }
//             else{
//                 newsCache[id] = row
//                 res.json({status: true, refer: row.ifrefer, title: row.title, contents: row.contents, author: row.author, datetime: row.datetime, read_num:row.read_num})
//             }
//         })
//     }
//     else{
//         news = newsCache[id]
//         res.json({status: true, refer: news.ifrefer, title: news.title, contents: news.contents, author: news.author, datetime: news.datetime, read_num:news.read_num})
//     }
// })

// app.post('/getNewsMain', (req, res)=>{
//     db.all('select title, abstract, cover, detailId, position from newsMain', (err, rows)=>{
//         res.json({news: rows})
//     })
// })

// app.post('/getNewsTrending', (req, res)=>{
//     res.json({trending: trendingNews})
// })

// 启动服务器
var server = app.listen(80, ()=>{
	console.log('server is running...')
})