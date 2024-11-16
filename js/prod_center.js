$(()=>{
    if(window.scrollY>0)
        wheelDirct = 0
    else
        wheelDirct = 1
    window.onwheel = (e)=>{
        if(e.deltaY < 0 && wheelDirct == 1)
        {
            $('.navigation').css('transform', 'translateY(-100px)');
            wheelDirct = 0
        }
        else if(e.deltaY > 0 && wheelDirct == 0){
            $('.navigation').css('transform', 'unset');
            wheelDirct = 1
        }
        else{
            return
        }
    }

    window.addEventListener('scroll', (e)=>{
        if(window.scrollY < 50)
        {
            $('.navigation').css('transform', 'unset');
        }
    })

    var ee = new IntersectionObserver((obj)=>{
        obj.forEach((v, i)=>{
            if(v.intersectionRatio > 0){
                $(v.target).css({'transform': 'translateY(0)', 'opacity': '1'})
                ee.unobserve(v.target)
            }
        })
    })
    $('.table-cell-side').map((i, o)=>{
        ee.observe(o)
    })
    $('.table-cell-is').map((i, o)=>{
        ee.observe(o)
    })
    ee.observe(document.getElementsByClassName('container-title')[0])

})