a = new IntersectionObserver((obj)=>{
    obj.forEach((v, i)=>{
        switch(v.target.classList[0]){
            case '':
                break
            default:
                if(v.intersectionRatio > 0){
                    $(v.target).css({'transform': 'translateY(0vw)', 'opacity': '1'})
                    a.unobserve(v.target)
                }
                v.target.getAttribute('name') == 'pre3-con' && $($(v.target).find($('img'))[0]).css({'animation': 'pre3-row-i 30s infinite alternate'})
                break
        }
    })
})

a.observe($('.title')[0])
a.observe($('.pre3-container1')[0])
a.observe($('.pre3-container2')[0])
a.observe($('.pre3-container3')[0])
a.observe($('.pre3-container4')[0])
