// $('.z-removeall').click(function (){
//     $('.z-buycarmask').css('display','block')
// })
// $('.z-no').click(function (){
//     $('.z-buycarmask').css('display','none')
// })
$(function(){
    console.log(123);
    if (localStorage.getItem('goods')) {
        //本地数据  ["abc2","abc6","abc8","abc1"]
        var codeArr = JSON.parse(localStorage.getItem('goods')).code;

        // 加载数据
        $.ajax({
            url: './data/z-data.json',
            type: 'get',
            cache: false,
            dataType: 'json',
            success: function (jsonArr){
                var results = '';
                $.each(codeArr,function (i,code){// code = 'abc2'
                    $.each(jsonArr,function (index,item){// item = {...,code:'abc8'}
                        if (code == item.code) {// 判断是否为购物车的数据
                            results += `<li code = "${item.code}">
                            <img src="${item.img}" alt="">
                            <span>${item.title}</span>
                            <div class="z-buycarprice">
                                <p class="z-brforediscount">${item.yuanjia}</p>
                                <p class="z-afteriscount">${item.xianjia}</p>
                                <p class="z-removebuycar">移除</p>
                            </div>
                        </li>`;
                        }
                    });
                });
                $('.z-buycarleft').append(results);
            }
        });

        // 删除购物车商品
        $('.z-buycarleft').on('click','.z-removebuycar',function (){
            // 获取要删除商品的编号
            var code = ($(this).parent()).parent().attr('code');

            // 删除数组元素  pop  unshift  splice(index,1)
            $.each(codeArr,function (index,item){
                if (code == item) {
                    codeArr.splice(index,1);//删除指定下标的数组元素
                }
            });
            if (codeArr.length == 0) {
                $('.list').append('<li style="line-height: 80px; text-align: center; color: #999;">购物车暂无数据！</li>');
                localStorage.removeItem('goods');
            } else {
                 // 更新本地存储数据
                var jsonStr = JSON.stringify({"code":codeArr});
                localStorage.setItem('goods',jsonStr);
            }
            // 删除页面中的节点
            ($(this).parent()).parent().remove();

            alert('商品成功移出购物车！');
        })


    } else {
        $('.z-buycarleft').append('<li style="line-height: 80px; text-align: center; color: #999;">购物车暂无数据！</li>');
    }
})