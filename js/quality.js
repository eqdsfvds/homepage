$(()=>{
    $('.p1>div').mouseenter((e)=>{
        $('.bk-active').removeClass('bk-active')
        $('.p1-hover').removeClass('p1-hover')
        e.currentTarget.classList.add('p1-hover')
        switch(e.currentTarget.id){
            case 's-1':
                $('#s-bk-1').addClass('bk-active')
                break
            case 's-2':
                $('#s-bk-2').addClass('bk-active')
                break
            case 's-3':
                $('#s-bk-3').addClass('bk-active')
                break
            default:
                break
        }
    })

    $('.p2>div').mouseenter((e)=>{
        $('.bk2-active').removeClass('bk2-active')
        $('.p2-hover').removeClass('p2-hover')
        e.currentTarget.classList.add('p2-hover')
        switch(e.currentTarget.id){
            case 's-4':
                $('#s-bk-4').addClass('bk2-active')
                break
            case 's-5':
                $('#s-bk-5').addClass('bk2-active')
                break
            case 's-6':
                $('#s-bk-6').addClass('bk2-active')
                break
            default:
                break
        }
    })
})