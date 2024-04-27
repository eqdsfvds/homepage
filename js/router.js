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

router.get('/fonts/:filename', (req, res)=>{
    aa(res, './fonts/', req.params.filename)
})

router.get('/css/:filename', (req, res)=>{
    aa(res, './css/', req.params.filename)
})

router.get('/js/:filename', (req, res)=>{
    aa(res, './js/', req.params.filename)
})

router.get('/images/worksflow/:filename', (req, res)=>{
    aa(res, './images/worksflow/', req.params.filename)
})

router.get('/images/machine/thumbnail/:filename', (req, res)=>{
    aa(res, './images/machine/thumbnail/', req.params.filename)
})

router.get('/images/machine/:filename', (req, res)=>{
    aa(res, './images/machine/', req.params.filename)
})

router.get('/images/prod/:filename', (req, res)=>{
    aa(res, './images/prod/', req.params.filename)
})

// router.get('/images/test/:filename', (req, res)=>{
//     aa(res, './images/test/', req.params.filename)
// })

router.get('/images/illustration/:filename', (req, res)=>{
    aa(res, './images/illustration/', req.params.filename)
})

router.get('/images/bk/:filename', (req, res)=>{
    aa(res, './images/bk/', req.params.filename)
})

router.get('/images/tr/:filename', (req, res)=>{
    aa(res, './images/tr/', req.params.filename)
})

router.get('/images/cars/:filename', (req, res)=>{
    aa(res, './images/cars/', req.params.filename)
})

router.get('/images/region/:filename', (req, res)=>{
    aa(res, './images/region/', req.params.filename)
})

router.get('/images/customers/:filename', (req, res)=>{
    aa(res, './images/customers/', req.params.filename)
})

router.get('/images/news/:filename', (req, res)=>{
    aa(res, './images/news/', req.params.filename)
})

router.get('/images/hornors/:filename', (req, res)=>{
    aa(res, './images/hornors/', req.params.filename)
})

router.get('/images/contact/:filename', (req, res)=>{
    aa(res, './images/contact/', req.params.filename)
})

router.get('/images/apply/:filename', (req, res)=>{
    aa(res, './images/apply/', req.params.filename)
})

router.get('/images/quality/certs/:filename', (req, res)=>{
    aa(res, './images/quality/certs/', req.params.filename)
})

router.get('/images/quality/:filename', (req, res)=>{
    aa(res, './images/quality/', req.params.filename)
})

router.get('/images/development/:filename', (req, res)=>{
    aa(res, './images/development/', req.params.filename)
})

router.get('/images/social/:filename', (req, res)=>{
    aa(res, './images/social/', req.params.filename)
})

router.get('/images/sales/:filename', (req, res)=>{
    aa(res, './images/sales/', req.params.filename)
})

router.get('/images/productCate/:filename', (req, res)=>{
    aa(res, './images/productCate/', req.params.filename)
})

router.get('/images/:filename', (req, res)=>{
    aa(res, './images/', req.params.filename)
})

router.get('/', (req, res)=>{
    res.sendFile('index.html', {root: root})
})

router.get('/about', (req, res)=>{
    res.sendFile('about.html', {root: root})
})

router.get('/prod', (req, res)=>{
    res.sendFile('prod_center.html', {root: root})
})

router.get('/machine', (req, res)=>{
    res.sendFile('machine_center.html', {root: root})
})

router.get('/capacity', (req, res)=>{
    res.sendFile('ability.html', {root: root})
})

router.get('/dd_cap', (req, res)=>{
    res.sendFile('deadline.html', {root: root})
})

router.get('/news', (req, res)=>{
    res.sendFile('news.html', {root: root})
})

router.get('/hornor', (req, res)=>{
    res.sendFile('hornor.html', {root: root})
})

router.get('/news_detail', (req, res)=>{
    res.sendFile('news_detail.html', {root: root})
})

router.get('/contact', (req, res)=>{
    res.sendFile('contact.html', {root: root})
})

router.get('/apply', (req, res)=>{
    res.sendFile('apply.html', {root: root})
})

router.get('/quality', (req, res)=>{
    res.sendFile('quality.html', {root: root})
})

router.get('/development', (req, res)=>{
    res.sendFile('development.html', {root: root})
})

router.get('/social', (req, res)=>{
    res.sendFile('social.html', {root: root})
})

router.get('/sales', (req, res)=>{
    res.sendFile('sales.html', {root: root})
})

router.get('/productCate', (req, res)=>{
    res.sendFile('productCate.html', {root: root})
})

// 404页
router.get('/*', (req, res)=>{
    res.sendFile('404.html', {root: root})
})

module.exports = router