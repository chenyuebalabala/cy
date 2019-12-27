var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    effect : 'fade',
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  });
  $('.z-SClist li').bind('mouseenter',function (){
    $(this).css('background-color','#333')
    var index = $(this).index();
    $('.z-SCdetailed').eq(index).css('display','block')
  })
  $('.z-SClist li').bind('mouseleave',function (){
    $(this).css('background-color','rgba( 0, 0, 0, 0.2 )')
    var index = $(this).index();
    $('.z-SCdetailed').eq(index).css('display','none')
  })