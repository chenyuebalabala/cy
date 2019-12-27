

    console.log(156);
    $(function(){

   
        $.ajax({
        url : './data/z-data.json',
        type : 'get',
        dataType : 'json',
        cache : false,
        success : function (josnArr){
            var results = '';
            $.each(josnArr,function (index,item){
                results += 
                `<div class="z-indexhover" code = "${item.code}">
                    <img src="${item.img}" alt="">
                    <div class="z-indexmove">
                        <video src="${item.video}" autoplay loop ></video>
                        <div class="z-information">
                            <h3>${item.title}</h3>
                            <p>开发商：<span>${item.developers}</span></p>
                            <p>发行商：<span>${item.publisher}</span></p>
                            <p>全部评测：<span>特别好评</span></p>
                        </div>
                        <div class="z-indexbuycar">添加至购物车</div>
                    </div>
                    <a class="z-indexprice">
                        <h2>${item.zheko}</h2>
                        <p>
                            <span>${item.yuanjia}</span>
                            <span>${item.xianjia}</span>
                        </p>
                    </a>
                </div>`
            });
            $('.z-indexfist').html(results);
        }
    });
    $('.z-indexfist').on('mouseenter','.z-indexhover',function(){
        var index = $(this).index();
        $('.z-indexmove').eq(index).animate({
            top : 0
        })
    });
    $('.z-indexfist').on('mouseleave','.z-indexhover',function(){
        var index = $(this).index();
        $('.z-indexhover .z-indexmove').eq(index).animate({
            top : 408
        })
    });
    $('.z-indexfist').on('click','.z-indexbuycar',function (){
        var code = ($(this).parent()).parent().attr('code');
        if (localStorage.getItem('goods')) {
            var codeArr = JSON.parse(localStorage.getItem('goods')).code;
        } else {
            var codeArr = [];
        }
        codeArr.push(code);
        var jsonStr = JSON.stringify({"code":codeArr});

        localStorage.setItem('goods',jsonStr);

        setTimeout(function (){
            window.location.href = './buycar.html'
        },1000)
    });

});