$(()=>{
    $.get('/getNews', {id: window.location.search.split('=')[1]}, (data, status)=>{
        if(data.refer == 1){
            $('refer')[0].innerHTML = '来源：'
        }
        $('.container H1')[0].append(data.title)
        $('title').text(data.title)
        $('author')[0].innerHTML = data.author
        $('time')[0].innerHTML = data.datetime
        $('read_num')[0].innerHTML = data.read_num
        $('.title2').after(data.contents)
    })

    $.get('getNewsTrending', (data, status)=>{
        news = data.trending
        container = $('.container>div:nth-child(2)')
        console.log(container)
        news.forEach(element => {
            container.append(`<div class="recommend">
            <img src="images/news/${element.cover}" />
            <div class="side-title"><a href="/news_detail?p=${element.detailId}">${element.title}</a></div>
            <div class="side-intro side-author">${element.author}</div>
            <div class="side-intro side-ctime">${element.datetime}</div>
        </div>`)
        });
    })

isShow = false

    window.addEventListener('scroll', (e)=>{
        if(window.scrollY == 0)
        {
            $('.toTop').removeClass('show')
            isShow = false
        }
        else if(!isShow){
            $('.toTop').addClass('show')
            isShow = true
        }
    })
})