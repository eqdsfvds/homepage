$(()=>{

    window.addEventListener('scroll', (e)=>{
        if(window.scrollY == 0)
        {
            $('.navigation').removeClass('navigation-show')
        }
        else if($('.navigation-show')){
            $('.navigation').addClass('navigation-show')
        }
    })

    window.onscroll = ()=>{
        if($('.p4')[0].getBoundingClientRect().y <= -$('.p4')[0].getBoundingClientRect().height || $('.p4')[0].getBoundingClientRect().y > 80){
            if($('.navigation-black')[0])
                $('.navigation').removeClass('navigation-black'), $('#logo img')[0].src = '../images/logo.png'
        }
        else if($('.p4')[0].getBoundingClientRect().y <= 80){
            if(!$('.navigation-black')[0])
                $('.navigation').addClass('navigation-black'), $('#logo img')[0].src = '../images/logo_white.png'
        }
    }
    window.onbeforeunload = ()=>{
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
    }
    $('.p2-prod').css('height', $('.p2-prod')[0].clientWidth * 0.4 + 'px')
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
    a.observe($('#p2-prod')[0])
    a.observe($('.p3-container')[0])
    a.observe($('.p4-nav')[0])
    $('.p4-part1-cell').map((i, o)=>{
        a.observe(o)
    })
    $('.p5-content-item').map((i, o)=>{
        a.observe(o)
    })
    foo(0)
})

var content = {
    0: ['全球分布', '华兴宇总部及其生产基地位于四川省什邡市，研发中心坐落于四川省成都市。在深圳市和香港设置了两处办公室。销售中心安置于墨西哥境内。'],
    1: ['环保及社会责任', '华兴宇始终坚持绿色工厂运营理念，包括但不限于配备废水净化系统、使用清洁能源（电能、天然能、风能），持续投资节能及可回收利用系统等，接受大众监督共同创造绿色环保的生产图景。'],
    2: ['华兴宇电子科技', '成立于2011年7月，致力于各种高端印制电路板产品的设计、制造和销售。拥有世界一流的印刷电路板自动生产线和检测设备，并以先进的生产技术和加工流程为动力，确保产品以优质的质量和节能的方式生产。']
}

function foo(num){
    a = num % 3
    setTimeout(()=>{
        let b = $('.b-show')[0]
        b.classList.remove('b-show')
        $('.title-h').css('display', 'none')
        $('.title-p').css('display', 'none')
        $('.title-h')[0].textContent = content[a][0]
        $('.title-p')[0].textContent = content[a][1]
        setTimeout(() => {
            $('.title-h').css('display', 'block')
            $('.title-p').css('display', 'block')
        }, 100);
        setTimeout(()=>{
            b.style.animation = ''
        }, 2000)
        $('.b').children()[a].style.animation = 'img_scale 30s linear'
        $('.b').children()[a].classList.add('b-show')
        foo(num+1)
    }, 7000)
}