$(function() {
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
    $('.slider').slick({
        autoplay: true,
        dots: true,
    });
});

$(function() {
    $('.menu-btn').click(function() {
        $(this).toggleClass('active');
  
        if ($(this).hasClass('active')) {
            $('.gnavi__sp-style').addClass('active');
        } else {
            $('.gnavi__sp-style').removeClass('active');
        }
    });
});

$(function() {
    $('.menu-btn').click(function() {
    if($('body').hasClass('hidden')) {
    $('body').removeClass('hidden');
    } else {
    $('body').addClass('hidden');
    }
    });
    });

    $(function(){
        var current_scrollY;
        $('.menu-nav').on('click', function() { 
          if ($('body').hasClass('hidden')) {
      　　　　current_scrollY = $( window ).scrollTop();
            $( 'body' ).css( {　//スクロール位置を保持した状態にする
              position: 'fixed',
              width: '100%',
              top: -1 * current_scrollY
              } );
          } else {
            $( 'body' ).attr( { style: '' } );　//bodyに当てたcssを外す
            $("html,body").scrollTop(current_scrollY); //スクロール位置を保持した状態にしたいがここでtopに戻ってしまう
          }
        });
      });

$(document).ready(function() {
  var pagetop = $('.pagetop');
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
            }
       });
       pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
              return false;
   });
});
