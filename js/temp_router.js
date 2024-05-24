const express = require('express')
const fs      = require('fs')
const router = express.Router()

var root = '.'

function aa(res, path, fn){
    fs.access(path + fn, (err)=>{
        if(err){
            res.end()
        }else{
            res.sendFile(path + fn, {root: root})
        }
    })
}

router.get('/images/construct/:filename', (req, res)=>{
    aa(res, './images/construct/', req.params.filename)
})

router.get('/css/banner.css', (req, res)=>{
    res.sendFile('/css/banner.css', {root: root})
})

router.get('/css/temp_index.css', (req, res)=>{
    res.sendFile('/css/temp_index.css', {root: root})
})

router.get('/', (req, res)=>{
    res.sendFile('temp_index.html', {root: root})
})

router.get('/*', (req, res)=>{
    res.sendFile('temp_index.html', {root: root})
})

module.exports = router
