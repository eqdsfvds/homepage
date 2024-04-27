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
        e.currentTarget.children[0].style.scale = '0.9'
        e.currentTarget.children[1].style.opacity = '.8'
        e.currentTarget.children[2].style.height = '60%'
    })
    $('.table-cell').mouseleave((e)=>{
        e.currentTarget.children[0].style.scale = '1'
        e.currentTarget.children[1].style.opacity = '0'
        e.currentTarget.children[2].style.height = '0'
    })
    $('.img-enlarge img').click((e)=>{
        $('.img-amplified').removeClass('img-amplified')
        t = e.target.parentElement.previousElementSibling
        n = e.target.parentElement.nextElementSibling
        $('#mask-p img').attr('src', t.getAttribute('src'))
        $('#mask-d-h').text(n.nextElementSibling.textContent)
        $('#mask-d-b').html(n.children[0].innerHTML)
        $(`.gallery img[src="${t.getAttribute('src')}"]`).addClass('img-amplified')
        setTimeout(() => {
            if($(`.gallery img[src="${t.getAttribute('src')}"]`)[0].offsetLeft > 2400 - $('.scroll-gallery').width()){
                $('.gallery').css('transform', `translateX(${$('.scroll-gallery').width() - 2400}px)`)
                a = $('.scroll-gallery').width() - 2400
                $('.bg-right').css('filter', 'contrast(.1)')
            }
            else{
                $('.gallery').css('transform', `translateX(-${$(`.gallery img[src="${t.getAttribute('src')}"]`)[0].offsetLeft-20}px)`)
                a = 20 - $(`.gallery img[src="${t.getAttribute('src')}"]`)[0].offsetLeft
                $('.bg-right').css('filter', 'contrast(1)')
            }
        }, 0);
        $('.mask').css({'bottom': '0'})
        $('html').css('overflow', 'hidden')
    })
    $('.mask').click((e)=>{
        if(e.target.classList[0] == 'mask'){
            $('.mask').css({'bottom': '-100%'})
            $('html').css('overflow', '')
        }
    })
    $('#close-btn').click((e)=>{
        $('.mask').css({'bottom': '-100%'})
        $('html').css('overflow', '')
    })
    a = 0
    $('.bg-right').click((e)=>{
        $('.bg-left').css('filter', 'contrast(1)')
        if(250 - a < 2400 - $('.scroll-gallery').width()){
            $('.gallery').css('transform', `translateX(${a-250}px)`)
            a -= 250
            $('.bg-right').css('filter', 'contrast(1)')
        }
        else{
            $('.gallery').css('transform', `translateX(${$('.scroll-gallery').width() - 2400}px)`)
            a = $('.scroll-gallery').width() -2400
            $('.bg-right').css('filter', 'contrast(.1)')
        }
    })
    $('.bg-left').click((e)=>{
        $('.bg-right').css('filter', 'contrast(1)')
        if(a+250 >= 0){
            $('.gallery').css('transform', `translateX(0px)`)
            a = 0
            $('.bg-left').css('filter', 'contrast(.1)')
        }
        else{
            $('.gallery').css('transform', `translateX(${a+250}px)`)
            a += 250
        }
    })
    $('.gallery img').click((e)=>{
        $('.img-amplified').removeClass('img-amplified')
        e.target.classList.add('img-amplified')

        $('#mask-p img').attr('src', e.target.getAttribute('src'))

        t = $(`.table-cell img[src="${e.target.getAttribute('src')}"]`)[0].nextElementSibling.nextElementSibling
        $('#mask-d-h').text(t.nextElementSibling.textContent)
        $('#mask-d-b').html(t.innerHTML)
    })

})