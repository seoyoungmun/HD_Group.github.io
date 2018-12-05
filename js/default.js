$('.family_site li').mouseenter(function(){
    $(this).find('h4').stop().fadeIn();
    $(this).find('img').addClass('on');
    var i;
    var j;
    for(i=1;i<9;i++){
        if($(this).hasClass('f0'+i)){
            for(j=i+1; j<9; j++){
                $('.f0'+j).stop().animate({left:(j-1)+'5%'});
            }
        }
    }
})
$('.family_site li').mouseleave(function(){
    $(this).find('h4').stop().fadeOut();
    $(this).find('img').removeClass('on');
    var i;
    for(i=1;i<9;i++){
        $('.f0'+i).stop().animate({left:(i-1)+'0%'});
    }
})


//마우스휠
$('html,body').on('mousewheel DOMMouseScroll', function(e, delta){
    var top = $(document).scrollTop();
    var history_bottom = $(window).height()*0.9 + 1170;
    var ceo_bottom = history_bottom + 700;
    if((top>=0)&&(top<340)) { /*header ~ main-header*/
        if(delta<0) { $('html,body').stop().animate({scrollTop:340},700);
        }
    } else if((top>=340) && (top<1150)) { /*현대그룹 비전*/
        if(delta<0) { $('html,body').stop().animate({scrollTop:1150},900);
        }
    } else if((top>=1150) && (top<history_bottom-1)) { /*현대 역사*/
        if(delta<0) { $('html,body').stop().animate({scrollTop:history_bottom},900);
        }
    } else if((top>=history_bottom-1) && (top<ceo_bottom+130)) { /*CEO*/
        if(delta<0) { $('html,body').stop().animate({scrollTop:ceo_bottom+140},900);
        }
    } /*else if((top>=ceo_bottom+135) && (top<ceo_bottom+580)) {
        if(delta<0) {
            $('html,body').stop().animate({scrollTop:ceo_bottom+'30vw'},700);
        }
    } else if((top>=ceo_bottom+580) && (top<ceo_bottom+1555)) {
        if(delta<0) {
            $('html,body').stop().animate({scrollTop:ceo_bottom+1560},900);
        }
    }*/
})


new WOW().init();

//계열사 FadeIn
/*
$(window).scroll(function(){
    var top = $(document).scrollTop();

    var family_up = $(window).height()*0.9+2127;
    var family_bottom = family_up + $(window).width()*0.6;
    if((top>family_up)&&(top<family_bottom)){
        $('.asan').css({visibility: 'visible'})
        $('.asan').addClass('in-down');
    }
    
})
*/
