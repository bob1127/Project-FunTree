

//滑鼠ICON 下滑效果
// var target_top = $("#content").offset().top;

// $("html,body").animate({scrollTop: target_top}, 1000);

    
   // $(function(){
   //   $('a[href=#content]').click(function() {      
   //   $('html,body').animate({scrollTop:$('#content').offset().);
   //             return false;top}, "show"
   //         });  
   //   });  


 // $('ul.nav li.dropdown').hover(function() {

 //     $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
 // });


//gotop 按鈕
         
       
            $('#gotop').click(function(){
                $('html,body').animate({scrollTop:0},'slow');
                return false
            });

        $(window).scroll(function(){
            if($(window).scrollTop()>800){
                $('#gotop').fadeIn();

            }else{
                $('#gotop').fadeOut();
            }
        })
        



   



//mobile

 $(".ip").click(function() {

     $(".phone").css("max-width", "65%");
     $(".phone").css("max-height", "50%");
     $(".button").css("width", "");
     $(".button").css("height", "");
     $(".camara").css("width", "");
     $(".camara").css("height", "");
     $(".camara").css("border-radius", "");
     $(".camara").css("potition", "");
     $(".camara").css("left", "");
     $(".left").css("overflow", "");
     $(".button").css("border-radius", "");
     $(".button").css("background-color", "");
     $(".button").css("border", "");
     $(".phone").css("background-color", "");
     $(".phonename").text($(this).text());

 });


 $(".i5").click(function() {
     $(".phone").css("max-width", "20%");
     $(".phone").css("max-height", "19%");

     $(".button").css("width", "58%");
     $(".button").css("height", "13%");
     $(".camara").css("width", "38%");
     $(".camara").css("height", "8%");
     $(".camara").css("border-radius", "");
     $(".camara").css("potition", "");
     $(".camara").css("left", "");
     $(".left").css("overflow", "");
     $(".button").css("border-radius", "");
     $(".button").css("background-color", "");
     $(".button").css("border", "");
     $(".phone").css("background-color", "");
     $(".phonename").text($(this).text());

 });
 $(".ix").click(function() {
     $(".phone").css("max-width", "28%");
     $(".phone").css("max-height", "28%");
     $(".button").css("width", "30px");
     $(".button").css("height", "30px");
     $(".phone").css("background-color", "#f3f3f3");
     $(".phone").css("border-radius", "15px");
     $(".camara").css("width", "34%");
     $(".camara").css("height", "45%");
     $(".camara").css("border-radius", "20px");
     $(".camara").css("potition", "absolute");
     $(".camara").css("left", "-45%");
     $(".left").css("overflow", "hidden");
     $(".button").css("border-radius", "0px");
     $(".button").css("background-color", "#333");
     $(".button").css("border", "solid 0px");
     $(".button").css("width", "8%");
     $(".button").css("height", "20%");
     $(".phonename").text($(this).text());

 });


if($(window).width() < 1200){


   $(".ix").click(function() {
     $(".phone").css("max-width", "40%");
     $(".phone").css("max-height", "16%");
    

 });

 $(".i5").click(function() {
     $(".phone").css("max-width", "32%");
     $(".phone").css("max-height", "12%");

    

 });  
}
if($(window).width() < 400){



$(".ix").click(function() {
     $(".phone").css("max-width", "40%");
     $(".phone").css("max-height", "10%");
    

 });

 $(".i5").click(function() {
     $(".phone").css("max-width", "32%");
     $(".phone").css("max-height", "8%");

    

 });  
}
// mobile 
//  var page = 0;
//  $(".content").click(function() {
//      page += 1;
//      if (page > 5) {
//          page = 0;

//      }

//      $(".pages").css("left", "-" + page * 100 + "%");
//  });

//  $(".button").click(function() {
//      page = 0;
//      $(".pages").css("left", "-" + page * 100 + "%");
//  });


 $(".tr").click(function() {
     $(".phone").css("transform", "rotate(360deg)");
 });

//  $(".wi").click(function() {
//      wiggletime = 0;
//  });


//  var wiggletime = 0;

//  setInterval(function() {
//      if (wiggletime <= 20) {
//          wiggletime++;
//          console.log(wiggletime);

//          if (wiggletime % 2 == 0) {
//              $(".phone").css("left", "-180px");
//          } else {
//              $(".phone").css("left", "180px");
//          }

//          if (wiggletime == 21) {
//              $(".phone").css("left", "")
//          }


//      }
//  }, 60);


//側邊menu滑出
 
 $('#btn').click(function() {
     $('.navbar_menu').css({
        right: '0px',
        transition : ' 0.5s ease-in-out'
     })
     
});
 $('#btn_top').click(function() {
      $('.navbar_menu').css({
        right: '-100%',
        transition : ' 0.5s ease-in-out'
     })
 });


//menu 裡面li hover 變換背景

 $('#about01').mouseenter(function() {
     $('.navbar_menu').css({   
        opacity : '1',
        transition : ' 1s ease-in-out',
        backgroundColor: 'rgb(248,195,205)'
     })
 })


$('#about02').mouseenter(function() {
     $('.navbar_menu').css({   
        opacity : '1',
        transition : ' 1s ease-in-out',
        backgroundColor: 'rgb(177,150,147)'
     })
 })
$('#about03').mouseenter(function() {
     $('.navbar_menu').css({   
        opacity : '1',
        transition : ' 1s ease-in-out',
        backgroundColor: 'rgb(218,201,166)'
     })
 })
$('#about04').mouseenter(function() {
     $('.navbar_menu').css({   
        opacity : '1',
        transition : ' 1s ease-in-out',
        backgroundColor: 'rgb(134,166,151)'
     })
 })
 // $('#about01').mouseout(function() {
 //     $('.navbar_menu').css({   
 //        transition : ' 0.5s ease-in-out',
 //        backgroundColor: '#999'
 //     })

 // })



 //滑鼠移過按鈕變色

 $('#cir01').hover(function() {
     $('#cir01').css('background-color', '#333')
 }, function() {
     $('#cir01').css('background-color', '')
 })
 $('#cir02').hover(function() {
     $('#cir02').css('background-color', '#333')
 }, function() {
     $('#cir02').css('background-color', '')
 })
 $('#cir03').hover(function() {
     $('#cir03').css('background-color', '#333')
 }, function() {
     $('#cir03').css('background-color', '')
 })
 $('#cir04').hover(function() {
     $('#cir04').css('background-color', '#333')
 }, function() {
     $('#cir04').css('background-color', '')
 })

 //點擊按鈕換圖片標示地點

 $('#cir01').click(function() {
     $('#fa02').removeClass('rotate')
     $('#fa03').removeClass('rotate')
     $('#fa04').removeClass('rotate')
     $('#fa01').addClass('rotate')
     $('#shift').css('transform', 'translateX(0px)')

     $('#text2').css({   
        opacity : '0',
        transition : ' 0.5s ease-in-out'
     })
     $('#text3').css({   
        opacity : '0',
        transition : ' 0.5s ease-in-out'
     })
     $('#text4').css({   
        opacity : '0',
        transition : ' 0.5s ease-in-out'
     })
     $('#text1').css({   
        opacity : '1',
        transition : ' 0.5s ease-in-out'
     })

     $('.location_content1,.location_name1').css({
        opacity : '1',
        transition : '1s ease-in-out'
     })
     
     $('.location_content2,.location_name2,.location_content3,.location_name3,.location_content4,.location_name4').css({
        opacity : '0',
        
     })

    })









     
 

 $('#cir02').click(function() {
     $('#fa01').removeClass('rotate')
     $('#fa03').removeClass('rotate')
     $('#fa04').removeClass('rotate')
     $('#fa02').addClass('rotate')
     
     $('#shift').css({   
        transform : 'translateX(-600px)',
        transition : ' 1s ease-in-out'
     })
     
     
     $('#text1').css({   
        opacity : '0',
        transition : ' 0.5s ease-in-out'
     })
     $('#text3').css({   
        opacity : '0',
        transition : ' 0.5s ease-in-out'
     })
     $('#text4').css({   
        opacity : '0',
        transition : ' 0.5s ease-in-out'
     })
     $('#text2').css({   
        opacity : '1',
        transition : ' 0.5s ease-in-out'
     })
     
     $('.location_content2,.location_name2').css({
        opacity : '1',
        transition : '1s ease-in-out'
     })
     $('.location_content1,.location_name1,.location_content3,.location_name3,.location_content4,.location_name4').css({
        opacity : '0',
        
     })
   



 })
 $('#cir03').click(function() {
     $('#fa01').removeClass('rotate')
     $('#fa02').removeClass('rotate')
     $('#fa04').removeClass('rotate')
     $('#fa03').addClass('rotate')
     $('#shift').css({   
        transform : 'translateX(-1200px)',
        transition : ' 1s ease-in-out'
     })
      
     $('#text1').css({   
        opacity : '0',
        transition : ' 0.5s ease-in-out'
     })
     $('#text2').css({   
        opacity : '0',
        transition : ' 0.5s ease-in-out'
     })
     $('#text4').css({   
        opacity : '0',
        transition : ' 0.5s ease-in-out'
     })
     $('#text3').css({   
        opacity : '1',
        transition : ' 0.5s ease-in-out'
     })

     $('.location_content3,.location_name3').css({
        opacity : '1',
        transition : '1s ease-in-out'
     })
     $('.location_content1,.location_name1,.location_content2,.location_name2,.location_content4,.location_name4').css({
        opacity : '0',
        
     })
 })
 $('#cir04').click(function() {
     $('#fa01').removeClass('rotate')
     $('#fa02').removeClass('rotate')
     $('#fa03').removeClass('rotate')
     $('#fa04').addClass('rotate')
     $('#shift').css({   
        transform : 'translateX(-1800px)',
        transition : ' 1s ease-in-out'
     })
     
     $('#text1').css({   
        opacity : '0',
        transition : ' 0.5s ease-in-out'
     })
     $('#text2').css({   
        opacity : '0',
        transition : ' 0.5s ease-in-out'
     })
     $('#text3').css({   
        opacity : '0',
        transition : ' 0.5s ease-in-out'
     })
     $('#text4').css({   
        opacity : '1',
        transition : ' 0.5s ease-in-out'
     })

     $('.location_content4,.location_name4').css({
        opacity : '1',
        transition : '1s ease-in-out'
     })
     $('.location_content1,.location_name1,.location_content3,.location_name3,.location_content2,.location_name2').css({
        opacity : '0',
        
     })

 })