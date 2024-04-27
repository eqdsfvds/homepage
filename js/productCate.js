
$(()=>{
    $('#data-table table:nth-child(1)').addClass('active')

    var a = new IntersectionObserver((obj)=>{
        obj.forEach((v, i)=>{
            if(v.intersectionRatio > 0){
                if(v.target.tagName == 'H2')
                {
                    $(v.target).css({'transform': 'translateX(0)', 'opacity': '1'})
                }
                a.unobserve(v.target)
            }
        })
    })
    
    a.observe($('h2')[0])

    $('#layersLabel').click((e)=>{
        $('.radio-active').removeClass('radio-active')
        $('.active').removeClass('active')
        $('.cate-active').removeClass('cate-active')
        e.target.classList.add('radio-active')
        $('#layers').addClass('active')
        $('#layersDesc').addClass('cate-active')
    })
    $('#copperLabel').click((e)=>{
        $('.radio-active').removeClass('radio-active')
        $('.active').removeClass('active')
        $('.cate-active').removeClass('cate-active')
        e.target.classList.add('radio-active')
        $('#copper').addClass('active')
        $('#copperDesc').addClass('cate-active')
    })
    $('#applyAreaLabel').click((e)=>{
        $('.radio-active').removeClass('radio-active')
        $('.active').removeClass('active')
        $('.cate-active').removeClass('cate-active')
        e.target.classList.add('radio-active')
        $('#applyArea').addClass('active')
        $('#applyDesc').addClass('cate-active')
    })
})
