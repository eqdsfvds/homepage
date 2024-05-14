$(()=>{
    var i1 = $('.popu1>img')[0].width
    var i2 = $('.popu1>img')[0].height
    var k1 = i2 / i1
    
    var i3 = $('.img>img')[0].width
    var i4 = $('.img>img')[0].height
    var k2 = i4 / i3
    
    var klist = {'popu1': k1, 'img': k2}
    var hlist = {'popu1': i2, 'img': i4}
    
    $('.img,.popu1').mouseenter((e)=>{
        let target = e.currentTarget.children[1]
        target.classList = []
        let x = e.offsetX
        let y = e.offsetY
        let c = e.currentTarget.classList[0]
        let k = klist[c]
        if(y < x*k)
        {
            if(y < hlist[c]-k*x)
            {
                target.classList.add('top')
            }
            else
            {
                target.classList.add('right')
            }
        }
        else
        {
            if(y < hlist[c]-k*x)
            {
                target.classList.add('left')
            }
            else
            {
                target.classList.add('bottom')
            }
        }
    })
    
    $('.popu1,.img').mouseleave((e)=>{
        let target = e.currentTarget.children[1]
        let x = e.offsetX
        let y = e.offsetY
        let c = e.currentTarget.classList[0]
        let k = klist[e.currentTarget.classList[0]]
        if(y < x*k)
        {
            if(y < hlist[c]-k*x)
            {
                target.classList.replace(target.classList[0],'top-r')
            }
            else
            {
                target.classList.replace(target.classList[0],'right-r')
            }
        }
        else
        {
            if(y < hlist[c]-k*x)
            {
                target.classList.replace(target.classList[0],'left-r')
            }
            else
            {
                target.classList.replace(target.classList[0],'bottom-r')
            }
        }
    })
    })

    a = new IntersectionObserver((obj)=>{
        obj.forEach((v, i)=>{
            if(v.intersectionRatio > 0){
                $(v.target).css({'transform': 'translateY(0vw)', 'opacity': '1'})
                a.unobserve(v.target)
            }
        })
    })

    $('.cate-container').map((i, o)=>{
        a.observe(o)
    })
    $('.title').map((i, o)=>{
        a.observe(o)
    })
    a.observe(document.getElementsByClassName('pre4-container')[0])
