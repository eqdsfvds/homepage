$(()=>{
    var ee = new IntersectionObserver((obj)=>{
        obj.forEach((v, i)=>{
            if(v.intersectionRatio > 0){
                $(v.target).css({'transform': 'translateY(0)', 'opacity': '1'})
                ee.unobserve(v.target)
            }
        })
    })
    $('.table-cell').map((i, o)=>{
        ee.observe(o)
    })
    $('.table-cell-is').map((i, o)=>{
        ee.observe(o)
    })
    ee.observe(document.getElementsByClassName('container-title')[0])

})