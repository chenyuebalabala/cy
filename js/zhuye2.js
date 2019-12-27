var c2_line1_1s = document.querySelector('.c2_line1 .c2_line1_1 .c2_line1_1s');
$('.c2_line1_1y').css("left","c2_line1_1s.clientWidth");

$(".c2_line1_1").hover(
    function () {
        var index = $(this).index();
        $('.c2_line1_1y').eq(index).show();
        $(".c2_line1_1y").on("mouseenter", function(){ //未来元素无效 
            $('.c2_line1_1y').eq(index).hide();
        });
    },
    function () {
        var index = $(this).index();
        $('.c2_line1_1y').eq(index).hide();
    }
 );
 $(".c2_line2_1").hover(
    function () {
        var index = $(this).index();
        $('.c2_line2_1y').eq(index).show();
        $(".c2_line2_1y").on("mouseenter", function(){ //未来元素无效
            $('.c2_line2_1y').eq(index).hide();
        });        
    },
    function () {
        var index = $(this).index();
        $('.c2_line2_1y').eq(index).hide();
    }
 );
 $(".c2_line3_1").hover(
    function () {
        var index = $(this).index();
        $('.c2_line3_1y').eq(index).show();
        $(".c2_line3_1y").on("mouseenter", function(){ //未来元素无效
            $('.c2_line3_1y').eq(index).hide();
        });        
    },
    function () {
        var index = $(this).index();
        $('.c2_line3_1y').eq(index).hide();
    }
 );

 $(".c2_qq1").hover(
    function () {
        $('.c2_cy1').show();
        $(".c2_cy1").on("mouseenter", function(){ //未来元素无效 
            $('.c2_cy1').hide();
        });
    },
    function () {
        $('.c2_cy1').hide();
    }
 );
 $(".c2_qq2").hover(
    function () {
        $('.c2_cy2').show();
        $(".c2_cy2").on("mouseenter", function(){ //未来元素无效
            $('.c2_cy2').hide();
        }); 
        
    },
    function () {
        $('.c2_cy2').hide();
    }
 );
 $(".c2_qq3").hover(
    function () {
        $('.c2_cy3').show();
        $(".c2_cy3").on("mouseenter", function(){ //未来元素无效
            $('.c2_cy3').hide();
        });        
    },
    function () {
        $('.c2_cy3').hide();
    }
 ); 

//轮播图插件
var swiper = new Swiper('.swiper-container', {
slidesPerView: 3,
spaceBetween: 30,
slidesPerGroup: 3,
loop: false,
// loopFillGroupWithBlank: true,
pagination: {
    el: '.swiper-pagination',
    clickable: true,
},
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
}); 
//说明隐藏与出现
$(".c2_game1").on("mouseenter", function(){ //未来元素无效         
    $('.c2_game1_y').show();
});
$(".c2_game1").on("mouseleave", function(){ //未来元素无效
    $('.c2_game1_y').hide();
}); 
$(".c2_game1_y").on("mouseenter", function(){ //未来元素无效  
    $('.c2_game1_y').hide();
}); 
$(".c2_game2").on("mouseenter", function(){ //未来元素无效              
    $('.c2_game2_y').show();
});
$(".c2_game2").on("mouseleave", function(){ //未来元素无效
    $('.c2_game2_y').hide();
}); 
$(".c2_game2_y").on("mouseenter", function(){ //未来元素无效
    $('.c2_game2_y').hide();
}); 
//最后一个向左展示
$(".c2_game1").on("mouseenter", function(){ //未来元素无效         
    $('.c2_yy1').show();
});
$(".c2_game1").on("mouseleave", function(){ //未来元素无效
    $('.c2_yy1').hide();
}); 
$(".c2_yy1").on("mouseenter", function(){ //未来元素无效  
    $('.c2_yy1').hide();
}); 
$(".c2_game2").on("mouseenter", function(){ //未来元素无效              
    $('.c2_yy2').show();
});
$(".c2_game2").on("mouseleave", function(){ //未来元素无效
    $('.c2_yy2').hide();
}); 
$(".c2_yy2").on("mouseenter", function(){ //未来元素无效
    $('.c2_yy2').hide();
});

//模块上移动画
$(".swiper-slide").hover(
    function () {
        var index = $(this).index();
       $('.franchise_logo').eq(index).stop().animate({
            top:0
        },{
            queue: true,//加入队列(排队)
            duration: 500,
            easing: 'swing',
            complete: function (){}
        })
        $('.c2_lunbo_game').eq(index).stop().animate({
            top:150
        },{
            queue: true,//加入队列(排队)
            duration: 500,
            easing: 'swing',
            complete: function (){
            }
        })
    },
    function () {
        var index = $(this).index();
        $('.franchise_logo').eq(index).stop().animate({
            top:170
        },{
            queue: true,//加入队列(排队)
            duration: 500,
            easing: 'swing',
            complete: function (){}
        })
        $('.c2_lunbo_game').eq(index).stop().animate({
            top:456
        },{
            queue: true,//加入队列(排队)
            duration: 500,
            easing: 'swing',
            complete: function (){}
        })
    }
 );
//json图片调用
 $(function(){
    $.ajax({
        url:'./data/zhuye2.json',
        type:'get',
        dataType:'json',
        cache:false,
        success:function (jsonArr){
            var results = '';
            var results2 = '';
            var results3 = '';
            var results4 = '';
            var results5 = '';
            $.each(jsonArr,function (index,item){
                results=`
                    <div class="c2_line1_1s1"></div>
                    <img src="${item.imgurl}">
                    <video class="c2_video11" autoplay="autoplay" loop="loop" preload="none" muted="muted">
                        <source src="${item.vedio}" type="video/webm">
                    </video>`;
                results2=`
                    <div class="c2_line2_1s1"></div>
                    <img src="${item.imgurl2}">
                    <video class="c2_video21" autoplay="autoplay" loop="loop" preload="none" muted="muted">
                        <source src="${item.vedio2}" type="video/webm">
                    </video>`;
                    results3=`
                    <div class="c2_line3_1s1"></div>
                    <img src="${item.imgurl3}">
                    <video class="c2_video31" autoplay="autoplay" loop="loop" preload="none" muted="muted">
                        <source src="${item.vedio3}" type="video/webm">
                    </video>`;
                results4=`
                    <div class="c2_line3_1s1"></div>
                    <img src="${item.imgurl4}">
                    <video class="c2_video31" autoplay="autoplay" loop="loop" preload="none" muted="muted">
                        <source src="${item.vedio4}" type="video/webm">
                    </video>`;
                results5=`
                    <div class="c2_line2_1s1"></div>
                    <img src="${item.imgurl5}">
                    <video class="c2_video21" autoplay="autoplay" loop="loop" preload="none" muted="muted">
                        <source src="${item.vedio5}" type="video/webm">
                    </video>`;
                $('.c2_line1_1s').eq(index).html(results);
                $('.c2_line2_1s').eq(index).html(results2);
                $('.c2_line3_1s').eq(index).html(results3);
                $('.sb1').eq(index).html(results4);
                $('.sb2').eq(index).html(results5);
            });            
        }
    });
});
