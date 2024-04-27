$(()=>{
    params = {
        'PCB层数': ['1-20层', '24层'],
        '产品大小': ['MAX: 724mm X 623mm\nMIN: 76mm X 51mm', 'MAX:762mm X 660mm\nMIN: 63.5mm X 38mm'],
        '板厚': ['0.075mm - 6.0mm, < 0.5mm for OSP 表面处理', '0.075mm - 6.5mm'],
        '内层铜厚': ['MAX: 6OZ', 'MAX: 8OZ'],
        '外层铜厚': ['MAX: 6OZ', 'MAX: 10OZ'],
        '内层线宽/线隙(Min.)': ['1/3OZ 基铜: 50um,HOZ 基铜: 50um\n1OZ 基铜: 75um,2OZ 基铜: 100um\n3OZ 基铜: 125um,4OZ 基铜: 150um\n>4OZ 基铜: 175um',
                               '1/3OZ 基铜: 38um,HOZ 基铜: 38um\n1OZ 基铜: 63um,2OZ 基铜: 88um\n3OZ 基铜: 114um,4OZ 基铜: 140um\n>4OZ 基铜: 165um'],
        '外层线宽/线隙(Min.)': ['1/3OZ 基铜: 50um,HOZ 基铜: 75um\n1OZ 基铜: 100um,2OZ 基铜: 125um\n3OZ 基铜: 150um,4OZ 基铜: 175um\n>4OZ 基铜: 200um',
                               '1/3OZ 基铜: 38um,HOZ 基铜: 50um\n1OZ 基铜: 75um,2OZ 基铜: 100um\n3OZ 基铜: 125um,4OZ 基铜: 150um\n>4OZ 基铜: 175um'],
        '层间对准度': ['±2mil', '±2mil'],
        '压板后板厚公差': ['±6%', '±5%'],
        '成品板厚公差': ['±10%', '±8%'],
        '板弯曲': ['≤0.5%', '≤0.5%'],
        '钻孔孔径': ['0.15-6.5mm', '0.15-8.5mm'],
        '孔对准度公差': ['±50um', '±50um'],
        '电镀孔孔径公差': ['±75um(喷锡表面处理), ±50um(其它表面处理)', '±50um'],
        '非电镀孔孔径公差': ['±50um', '±25um'],
        '背钻深度公差': ['±50um', '±40um'],
        '最大纵横比': ['16 : 1', '18 : 1'],
        '阻焊桥宽度': ['50um', '50um'],
        '线角绿油厚度': ['MIN: 5um', 'MIN: 5um'],
        '线面绿油厚度': ['MIN: 12um', 'MIN: 12um'],
        '碳油桥宽度(Min.)': ['200um', '200um'],
        '碳油间距(Min.)': ['200um', '200um'],
        '文字特性': ['高度:0.5mm min, 宽度:75um min', '高度:0.5mm min, 宽度:75um min'],
        '外围尺寸公差(Min.)': ['±100um', '±75um'],
        '斜边角度': ['45°/ 30°', '45°/ 30°'],
        '斜边长度公差': ['±125um', '±125um'],
        '斜边角度公差': ['±5°', '±5°'],
        'V-Cut保留厚度公差': ['±2mil', '±2mil'],
        'V-Cut to V-Cut距离公差': ['±2mil', '±2mil'],
        'V-Cut角度': ['30°/45°/60°/75°', '30°/45°/60°/75°'],
        '表面处理': ['自有无铅喷锡, OSP, 化学沉镍/金', '自有无铅喷锡, OSP, 化学沉镍/金'],
        '喷锡厚度': ['1~40um', '1~40um'],
        'OSP 厚度': ['0.2~0.5um', '0.2~0.5um'],
        '化学沉镍厚度': ['50~300μinch', '50~300μinch'],
        '化学沉金厚度': ['1~5μinch', '1~5μinch'],
        '化学沉锡厚度': ['0.80~1.20μm', '0.80~1.20μm'],
        '阻抗控制公差': ['±10% 差分阻抗\n±5% 特性阻抗', '±8% 差分阻抗\n±5% 特性阻抗'],
        '平面度': ['≤1mm', '≤0.8mm'],
        '金属基板层数': ['1-3层', '4层'],
        '金属基板厚度': ['0.8-4mm', '4.5mm'],
        '金属基板铜厚': ['0.5-4OZ', '5OZ'],
        '金属基板绝缘层厚度': ['0.075 - 0.3mm', '0.4mm'],
        '金属基板耐高压能力': ['1500 - 5000 VDC', '6000 VDC'],
        '金属基板热阻': ['2 - 6 W/m.K', '8 W/m.K']
    }
    $('.search-ops div').mouseenter((e)=>{
        $(e.currentTarget).append(`<svg viewBox="0 0 1024 1024" width="23" height="23">
                <path d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z" fill="#ffffff"></path>
            </svg>`)
    })
    $('.search-ops div').mouseleave((e)=>{
        e.currentTarget.children[0] && e.currentTarget.children[0].remove()
    })
    $('.close-btn').click((e)=>{
        $('.mask').css('display', 'none')
        $('.mask-content').css({'transform':'translateY(-10vh)', 'opacity': '0'})
    })
    $('.mask-content').click((e)=>{
        e.stopPropagation()
    })
    $('.mask').click((e)=>{
        $('.mask').css('display', 'none')
        $('.mask-content').css({'transform':'translateY(-10vh)', 'opacity': '0'})
    })
    $('.search div:nth-child(1)').click((e)=>{
        $('.mask').css('display', 'flex')
        setTimeout(() => {
            $('.mask-content').css({'opacity': '1', 'transform': 'translateY(0)'})
        }, 0);
    })
    $('.search-ops div').click((e)=>{
        info = params[e.currentTarget.textContent.trim()]
        $('#pName').text(e.currentTarget.textContent.trim())
        $('#search-item').text(e.currentTarget.textContent.trim())
        $('#pPro').text(info[0])
        $('#pSam').text(info[1])
        $('.mask').css('display', 'none')
        $('.mask-content').css({'transform':'translateY(-10vh)', 'opacity': '0'})
    })

    var ee = new IntersectionObserver((obj)=>{
        obj.forEach((v, i)=>{
            if(v.intersectionRatio > 0){
                $(v.target).css({'transform': 'translateY(0)', 'opacity': '1'})
                ee.unobserve(v.target)
            }
        })
    })
    ee.observe(document.getElementsByClassName('p-title')[0])
    ee.observe(document.getElementsByClassName('poster-desc')[0])
})