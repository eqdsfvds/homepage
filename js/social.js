$(()=>{
    $('.slogan>div div').mouseenter((e)=>{
        e.currentTarget.classList.add('slogan-active-1')
        e.currentTarget.children[0].classList.add('slogan-active-2')
    })
    $('.slogan>div div').mouseleave((e)=>{
        $('.slogan-active-1').removeClass('slogan-active-1')
        $('.slogan-active-2').removeClass('slogan-active-2')
    })
})