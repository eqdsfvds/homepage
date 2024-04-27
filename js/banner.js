$(()=>{


    $('#about')[0].addEventListener('mouseover', (e)=>{
        $('.about-popu').addClass('popu-active')
    })
    $('#about')[0].addEventListener('mouseleave', (e)=>{
        $('.popu-active').removeClass('popu-active')
    })
    $('#capacity')[0].addEventListener('mouseover', (e)=>{
        $('.capacity-popu').addClass('popu-active')
    })
    $('#capacity')[0].addEventListener('mouseleave', (e)=>{
        $('.popu-active').removeClass('popu-active')
    })

    $('#prod_center')[0].addEventListener('mouseover', (e)=>{
        if(e.target.id != 'prod_center') return
        $('.popu').css({'height': '200px'})
    })
    $('#prod_center')[0].addEventListener('mouseleave', (e)=>{
        $('.popu').css({'height': '0'})
    })
    $('#show_prod').mouseover((e)=>{
        $('#show_machine').css('color', 'black')
        $('#show_prod').css('color', '#ff6a00')
        $('#machine').css('display', 'none')
        $('#prod').css('display', 'flex')
    })
    $('#show_machine').mouseover((e)=>{
        $('#show_prod').css('color', 'black')
        $('#show_machine').css('color', '#ff6a00')
        $('#prod').css('display', 'none')
        $('#machine').css('display', 'flex')
    })
})