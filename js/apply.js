$(()=>{
    for(var i =0; i < $('.aspect img').length; i++){
        $('.aspect img')[i].style.marginTop = `-${$('.aspect img')[i].height/2}px`
    }

    t = false

    offset = 0

    $('.downTip').click((e)=>{
        index = (-offset) / (window.innerHeight - 80) + 1

        $(`.aspect:nth-child(${index}) div`).css({'bottom':'100%', 'opacity': '0'})

        $('.downTip').css('visibility', 'hidden')
            $('.container').css('transform', `translateY(${offset-window.innerHeight + 80}px)`)
            setTimeout(() => {
                offset -= window.innerHeight - 80
                t = false
                $('.downTip').css('visibility', 'unset')
            }, 1000);
            setTimeout(() => {
                index += 1
                $(`.aspect:nth-child(${index}) div`).css({'bottom':'100px', 'opacity': '1'})
            }, 200);
    })

    window.onwheel = (e)=>{
        if(t)
            return
        t = true

        index = (-offset) / (window.innerHeight - 80) + 1

        if(index == 1 && e.deltaY <= 0)
        {
            t = false
            return
        }
        if(e.deltaY > 0)
        {
            if(index == 7)
            {
                t = false
                return
            }
            $(`.aspect:nth-child(${index}) div`).css({'bottom':'100%', 'opacity': '0'})
            $('.downTip').css('visibility', 'hidden')
            $('.container').css('transform', `translateY(${offset-window.innerHeight + 80}px)`)
            setTimeout(() => {
                offset -= window.innerHeight - 80
                t = false
                if(index < 7)
                {
                    $('.downTip').css('visibility', 'unset')
                }
            }, 1000);
            setTimeout(() => {
                index += 1
                $(`.aspect:nth-child(${index}) div`).css({'bottom':'100px', 'opacity': '1'})
            }, 200);
        }
        else
        {
            if(index == 1)
            {
                t = false
                return
            }
            $(`.aspect:nth-child(${index}) div`).css({'bottom':'100%', 'opacity': '0'})
            $('.downTip').css('visibility', 'hidden')
            $('.container').css('transform', `translateY(${offset + window.innerHeight - 80}px)`)
            index -= 1
            $(`.aspect:nth-child(${index}) div`).css({'bottom':'100px', 'opacity': '1'})
            setTimeout(() => {
                offset += window.innerHeight - 80
                t = false
                $('.downTip').css('visibility', 'unset')
            }, 1000);
        }
    }
    $('.aspect:nth-child(1) div').css('bottom', '100px')
})