$(()=>{

    wheelDirct = 0
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

    window.onbeforeunload = ()=>{
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
    }
    $('.p2-prod').css('height', $('.p2-prod')[0].clientWidth * 0.5 + 'px')
    $('.p3-dev img').css('height', $('.p3-dev img')[0].clientWidth * 0.7 + 'px')

    $('.p2-pic-mask').hover((e)=>{
        $('.p2-gallery').css('animation-play-state', 'paused')
        e.currentTarget.style.opacity = 1
        e.currentTarget.nextElementSibling.children[0].style.scale = '1.2'
    })
    $('.p2-pic-mask').mouseleave((e)=>{
        $('.p2-gallery').css('animation-play-state', 'running')
        e.currentTarget.style.opacity = 0
        e.currentTarget.nextElementSibling.children[0].style.scale = '1'
    })
    $('.p5-content-item').mouseover((e)=>{
        $(e.currentTarget.children[0]).css({'opacity': '1', 'transform': 'translateY(0)'})
        e.currentTarget.children[1].style.scale = 1.1
    })
    $('.p5-content-item').mouseleave((e)=>{
        $(e.currentTarget.children[0]).css({'opacity': '0', 'transform': 'translateY(-1vw)'})
        e.currentTarget.children[1].style.scale = 1
    })
    $('body').on('click', '.p4-nav span:not(.p4-nav-active)', (e)=>{
        $('.p4-nav-active').removeClass('p4-nav-active')
        $('.cell-expand').removeClass('cell-expand')
        $(e.target).addClass('p4-nav-active')
        $(`#${e.target.getAttribute('name')}`).addClass('cell-expand')
    })

    var a = new IntersectionObserver((obj)=>{
        obj.forEach((v, i)=>{
            if(v.intersectionRatio > 0){
                $(v.target).css({'transform': 'translateY(0)', 'opacity': '1'})
                a.unobserve(v.target)
            }
        })
    })
    $('.title').map((i, o)=>{
        a.observe(o)
    })
    $('.title p').map((i, o)=>{
        a.observe(o)
    })
    a.observe($('#p2-prod')[0])
    a.observe($('.p3-container')[0])
    a.observe($('.p4-nav')[0])
    $('.p4-part1-cell').map((i, o)=>{
        a.observe(o)
    })
    a.observe($('.p5-content')[0])
    foo(0)
})
