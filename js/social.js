$(()=>{
    $('.slogan>div div').mouseenter((e)=>{
        e.currentTarget.classList.add('slogan-active-1')
        e.currentTarget.children[0].classList.add('slogan-active-2')
    })
    $('.slogan>div div').mouseleave((e)=>{
        $('.slogan-active-1').removeClass('slogan-active-1')
        $('.slogan-active-2').removeClass('slogan-active-2')
    })

    a = new IntersectionObserver((obj)=>{
        obj.forEach((v, i)=>{
            if(v.intersectionRatio > 0){
                $(v.target).css({'transform': 'translateY(0vw)', 'opacity': '1'})
                a.unobserve(v.target)
            }
        })
    })

    a.observe($('.title p')[0])
    a.observe($('.title h2')[0])
    $('.slogan div').map((i, o)=>{
        a.observe(o)
    })
    a.observe($('.container>h2')[0])
    $('.intro').children().map((i, o)=>{
        a.observe(o)
    })
})