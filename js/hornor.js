var a = new IntersectionObserver((obj)=>{
    obj.forEach((v, i)=>{
        if(v.intersectionRatio > 0){
            if(v.target.tagName == 'IMG'){
                $(v.target).css({'transform': 'rotateX(30deg) rotateZ(0.01deg)', 'opacity': '1'})
                setTimeout(()=>{
                    $(v.target).css('transition', '.35s')
                    v.target.onmouseenter = (e)=>{
                        $(e.currentTarget).css({'transform': 'rotateX(0deg) translateY(5vh)',
                        'box-shadow': '0 0 0px 10px #552e0e, 10px 10px 10px 5px black', 'filter': 'brightness(1)'})
                    }
                    v.target.onmouseleave = (e)=>{
                        $(e.currentTarget).css({'transform': 'rotateX(30deg) rotateZ(0.01deg)',
                        'box-shadow': '0 0 0px 10px #552e0e, 0 0 10px 11px black;', 'filter': 'brightness(.9)'})
                    }
                }, 500)
                a.unobserve(v.target)
            }
            else{
                $(v.target).css({'transform': 'translateY(0)', 'opacity': '1'})
                a.unobserve(v.target)
            }
        }
    })
})
$('.wn').map((i, o)=>{
    a.observe(o)
})
$('.hs-c p').map((i, o)=>{
    a.observe(o)
})
$('.hp').map((i, o)=>{
    a.observe(o)
})