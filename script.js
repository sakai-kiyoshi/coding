$(function() {

    $(window).on('load scroll', function(){

        //animatedのclassを持った要素をセレクタに指定
        var elem = $('.catch-copy');
      
        elem.each(function () {
      
          //data属性からアニメーション名を取得
          var isAnimate = $(this).data('animate');
          //animated要素に位置を取得
          var elemOffset = $(this).offset().top;
          //現在のスクロールポジションを取得
          var scrollPos = $(window).scrollTop();
          //ウィンドウの高さを取得
          var wh = $(window).height();
      
          //animated要素がウィンドウ内の中央位置にきたら処理(+以降を消せば読み込んだ瞬間)
          if(scrollPos > elemOffset - wh){
            $(this).addClass(isAnimate);
          }
        });
      
      });
    
      $('.test').on('click', function(){// クリック

        //data属性からアニメーション名を取得
        var animationName = $(this).data('animate');
      
        //アニメーション要素にdata属性から取得したclassを追加　1秒後に削除
        $(this).addClass(animationName).delay(1000).queue(function(next){
          $(this).removeClass(animationName);
          next();
        });
      });
    

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
