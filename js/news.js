$(()=>{
    $.post('getNewsMain', (data, status)=>{
        news = data.news
        ii = 4
        news.forEach((v, i)=>{
            switch(v['position']){
                case 0:
                    $('#t1').text(v['title'])
                    $('#c1').text(v['abstract'])
                    $('#c1').attr('title', v['abstract'])
                    $('#i1').attr('src', 'images/news/'+v['cover'])
                    $('#a1').attr('href', "/news_detail?p="+v['detailId'])
                    break;
                case 1:
                    $('#t2').text(v['title'])
                    $('#c2').text(v['abstract'])
                    $('#c2').attr('title', v['abstract'])
                    $('#i2').attr('src', 'images/news/'+v['cover'])
                    $('#a2').attr('href', "/news_detail?p="+v['detailId'])
                    break;
                case 2:
                    $('#t3').text(v['title'])
                    $('#c3').text(v['abstract'])
                    $('#c3').attr('title', v['abstract'])
                    $('#i3').attr('src', 'images/news/'+v['cover'])
                    $('#a3').attr('href', "/news_detail?p="+v['detailId'])
                    break;
                case 3:
                    $('#t'+ii).text(v['title'])
                    $('#c'+ii).text(v['abstract'])
                    $('#c'+ii).attr('title', v['abstract'])
                    $('#i'+ii).attr('src', 'images/news/'+v['cover'])
                    $('#a'+ii).attr('href', "/news_detail?p="+v['detailId'])
                    ii += 1;
                    break;
                default:
                    break;
            }
        })
    })

    $('.ln-f-1')
    .mouseenter((e)=>{
        $('.ln-f-1 img').addClass('img-scaleA')
    })
    .mouseleave((e)=>{
        $('.ln-f-1 img').removeClass('img-scaleA')
    })

    $('#ln-f-2-1')
    .mouseenter((e)=>{
        $('#ln-f-2-1 img').addClass('img-scaleA')
    })
    .mouseleave((e)=>{
        $('#ln-f-2-1 img').removeClass('img-scaleA')
    })

    $('#ln-f-2-2')
    .mouseenter((e)=>{
        $('#ln-f-2-2 img').addClass('img-scaleA')
    })
    .mouseleave((e)=>{
        $('#ln-f-2-2 img').removeClass('img-scaleA')
    })
    $('#news-ga-1, #news-ga-2, #news-ga-3, #news-ga-4').click((e)=>{
        n = e.currentTarget.id.charAt(e.currentTarget.id.length-1)
        clearTimeout(slide_g)
        $('.news-ga').css({'transition': 'none'})
        slide_func(n-1)
        setTimeout(() => {
            $('.news-ga').css({'transition': 'all .5s cubic-bezier(0.19, 0.57, 0.59, 0.93)'})
        }, 100)
    })

    $('.ln-f-1>div').mouseenter((e)=>{
        $('#c1').css('background-size', '100% 5%')
    }).mouseleave((e)=>{
        $('#c1').css('background-size', '0 5%')
    })

    $('#ln-f-2-1>div').mouseenter((e)=>{
        $('#c2').css('background-size', '100% 5%')
    }).mouseleave((e)=>{
        $('#c2').css('background-size', '0 5%')
    })

    $('#ln-f-2-2>div').mouseenter((e)=>{
        $('#c3').css('background-size', '100% 5%')
    }).mouseleave((e)=>{
        $('#c3').css('background-size', '0 5%')
    })

    slide_func(0)
})

var slide_g
function slide_func(n){
    if(n == 5){
        $('.news-ga').css({'transition': 'none'})
        setTimeout(() => {
            $('.news-ga').css({ 'transform': 'translatex(0)'})
        }, 0)
        setTimeout(() => {
            $('.news-ga').css({'transform': 'translatex(-100%)', 'transition': 'all .5s cubic-bezier(0.19, 0.57, 0.59, 0.93)'})
            $('.high-light').removeClass('high-light')
            $(`#news-ga-${n%4+1}`).addClass('high-light')
        }, 100);
        n = 1
    }
    else{
        $('.news-ga').css('transform',`translateX(-${n%5}00%)`)
        $('.high-light').removeClass('high-light')
        $(`#news-ga-${n%4+1}`).addClass('high-light')
    }
    slide_g = setTimeout(()=>{
        slide_func(n+1)
    }, 3000)
}