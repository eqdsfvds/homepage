$(()=>{
    var count1 = 0, count2 = 0, count3 = 0, count4 = 0, count5 = 0
    const countAnimation1 = ()=>{
        count1 = parseFloat((count1 + 1.16).toFixed(2))
        if(count1 >= 22.8){
            count1 = 22.8
        }
        $('#p1').text(count1)
        if(count1 < 22.8)
            window.requestAnimationFrame(countAnimation1)
    }
    const countAnimation2 = ()=>{
        count2 = parseFloat((count2 + 1.16).toFixed(2))
        if(count2 >= 32.3){
            count2 = 32.3
        }
        $('#p2').text(count2)
        if(count2 < 32.3)
            window.requestAnimationFrame(countAnimation2)
    }
    const countAnimation3 = ()=>{
        count3 = parseFloat((count3 + 1.16).toFixed(2))
        if(count3 >= 55.3){
            count3 = 55.3
        }
        $('#p3').text(count3)
        if(count3 < 55.3)
            window.requestAnimationFrame(countAnimation3)
    }
    const countAnimation4 = ()=>{
        count4 = parseFloat((count4 + 1.16).toFixed(2))
        if(count4 >= 72.8){
            count4 = 72.8
        }
        $('#p4').text(count4)
        if(count4 < 72.8)
            window.requestAnimationFrame(countAnimation4)
    }
    const countAnimation5 = ()=>{
        count5 = parseFloat((count5 + 1.16).toFixed(2))
        if(count5 >= 105){
            count5 = 105
        }
        $('#p5').text(count5)
        if(count5 < 105)
            window.requestAnimationFrame(countAnimation5)
    }
    setTimeout(() => {
        window.requestAnimationFrame(countAnimation1)
        window.requestAnimationFrame(countAnimation2)
        window.requestAnimationFrame(countAnimation3)
        window.requestAnimationFrame(countAnimation4)
        window.requestAnimationFrame(countAnimation5)
    }, 500);

    var a = new IntersectionObserver((obj)=>{
        obj.forEach((v, i)=>{
            if(v.intersectionRatio > 0){
                if(v.target.id == 'earth')
                {
                    $('#point-1').css('opacity', '1')
                    $('#point-2').css('opacity', '1')
                    $('#point-3').css('opacity', '1')
                    $('#point-4').css('opacity', '1')
                }
                if(v.target.tagName == 'H2')
                {
                    $(v.target).css({'transform': 'translateX(0)', 'opacity': '1'})
                }
                else if(v.target.classList[0] == 'ratio')
                {
                    $('.ratio div:nth-child(1)').css({'opacity': '1', 'transform': 'translateX(0)'})
                    $('.ratio div:nth-child(2)').css({'opacity': '1', 'transform': 'translateX(0)'})
                    $('.ratio div:nth-child(3)').css({'opacity': '1', 'transform': 'translateX(0)'})
                    $('.ratio div:nth-child(4)').css({'opacity': '1', 'transform': 'translateX(0)'})
                }
                else
                {
                    $(v.target).css({'transform': 'translateY(0)', 'opacity': '1'})
                }
                a.unobserve(v.target)
            }
        })
    })
    a.observe($('.cust-server img')[0])
    a.observe($('h2')[0])
    a.observe($('h2')[1])
    a.observe($('h2')[2])
    a.observe($('#earth')[0])
    a.observe($('#cn')[0])
    a.observe($('#asia')[0])
    a.observe($('#eu')[0])
    a.observe($('#na')[0])
    a.observe($('.ratio')[0])
})
