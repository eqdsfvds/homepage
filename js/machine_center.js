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
    ee.observe(document.getElementsByClassName('container-title')[0])

    $('.table-cell').css('height', $('.table-cell')[0].clientWidth * 0.85 + 'px')
    $('.table-cell').mouseenter((e)=>{
        e.currentTarget.children[0].children[0].style.scale = '1.2'
        e.currentTarget.children[1].style.backgroundColor='#d1d1d1a3'
        e.currentTarget.children[1].children[0].style.opacity = '1'
    })
    $('.table-cell').mouseleave((e)=>{
        e.currentTarget.children[0].children[0].style.scale = '1'
        e.currentTarget.children[1].style.backgroundColor='#d1d1d100'
        e.currentTarget.children[1].children[0].style.opacity = '0'
    })
    $('.img-enlarge img').click((e)=>{
        $('.mask').css({'scale': '1'})
        $('#mask-c img').attr('src', e.target.parentElement.previousElementSibling.children[0].src)
    })
    $('#close-btn').click((e)=>{
        $('.mask').css({'scale': '0'})
        $('html').css('overflow', '')
    })
})