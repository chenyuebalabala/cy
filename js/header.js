function event(dom,eve1,eve2){
    $(dom).bind(eve1,function(){
        $(this).children().eq(1).css('display','block');
    })
    $(dom).bind(eve2,function(){
        $(this).children().eq(1).css('display','none');
    })
}
event('.title li','mouseenter','mouseleave');
event('.nav-list li','mouseenter','mouseleave');

$('.language p').bind('click',function(){
    $('.language div').css('display','block');  
})
$('.language div span').bind('click',function(){
    $('.language p').text($(this).text()); 
    $('.language div').css('display','none');
})


