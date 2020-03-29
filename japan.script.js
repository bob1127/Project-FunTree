
$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});


$('ul.nav li.dropdown').hover(function () {

$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
});








$(".ip").click(function(){

    $(".phone").css("max-width","55%");
    $(".phone").css("max-height","69%");
    $(".button").css("width","");
    $(".button").css("height","");
    $(".camara").css("width","");
    $(".camara").css("height","");
    $(".camara").css("border-radius","");
    $(".camara").css("potition","");
    $(".camara").css("left","");
    $(".left").css("overflow","");
    $(".button").css("border-radius","");
    $(".button").css("background-color","");
    $(".button").css("border","");
    $(".phone").css("background-color","");
    $(".phonename").text($(this).text());
  
  });

  
  $(".i5").click(function(){
    $(".phone").css("max-width","25%");
    $(".phone").css("max-height","25%");

    $(".button").css("width","58%");
    $(".button").css("height","13%");
    $(".camara").css("width","38%");
    $(".camara").css("height","8%");
    $(".camara").css("border-radius","");
    $(".camara").css("potition","");
    $(".camara").css("left","");
    $(".left").css("overflow","");
    $(".button").css("border-radius","");
    $(".button").css("background-color","");
    $(".button").css("border","");
    $(".phone").css("background-color","");
    $(".phonename").text($(this).text());
    
  });
  $(".ix").click(function(){
    $(".phone").css("max-width","35%");
    $(".phone").css("max-height","35%");
    $(".button").css("width","30px");
    $(".button").css("height","30px");
    $(".phone").css("background-color","#f3f3f3");
    $(".phone").css("border-radius","15px");
    $(".camara").css("width","34%");
    $(".camara").css("height","45%");
    $(".camara").css("border-radius","20px");
    $(".camara").css("potition","absolute");
    $(".camara").css("left","-45%");
    $(".left").css("overflow","hidden");
    $(".button").css("border-radius","0px");
    $(".button").css("background-color","#333");
    $(".button").css("border","solid 0px");
    $(".button").css("width","8%");
    $(".button").css("height","20%");
    $(".phonename").text($(this).text());

    });



    var page=0;
    $(".content").click(function(){
      page+=1;
      if(page>5){
        page=0;
       
      }

        $(".pages").css("left","-"+page*100+"%");
    });
    
    $(".button").click(function(){
      page=0;
       $(".pages").css("left","-"+page*100+"%");
    }); 
    
   
    $(".tr").click(function(){
         $(".phone").css("transform","rotate(360deg)");
    });
    
    $(".wi").click(function(){
      wiggletime=0;
    })
    

    var wiggletime=0;
    
    setInterval(function(){
      if(wiggletime<=20){
        wiggletime++;
        console.log(wiggletime);
     
      if(wiggletime%2==0){
        $(".phone").css("left","-180px");
      }else{
        $(".phone").css("left","180px");
      }

      if(wiggletime==21){
        $(".phone").css("left","")
      }


      }
    },60);



$('#btn').click(function(){
  $('.navbar_menu').fadeIn('slow')
})
$('#btn_top').click(function(){
  $('.navbar_menu').fadeOut('slow')
})




$('#about01').mouseenter(function(){
  $('.navbar_menu').css('background-image',"url('https://images.pexels.com/photos/3850838/pexels-photo-3850838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')","opa").aimation({
    
  })
 
})
$('#about01').mouseout(function(){
  $('.navbar_menu').css('background-image','none')
 
})



//滑鼠移過按鈕變色

$('#cir01').hover(function(){
            $('#cir01').css('background-color','#333')
        },function(){
            $('#cir01').css('background-color','')
        }
        )
        $('#cir02').hover(function(){
            $('#cir02').css('background-color','#333')
        },function(){
            $('#cir02').css('background-color','')
        }
        )
        $('#cir03').hover(function(){
            $('#cir03').css('background-color','#333')
        },function(){
            $('#cir03').css('background-color','')
        }
        )
        $('#cir04').hover(function(){
            $('#cir04').css('background-color','#333')
        },function(){
            $('#cir04').css('background-color','')
        }
        )
    
//點擊按鈕換圖片標示地點

$('#cir01').click(function(){
            
        $('#fa02').removeClass('rotate')
            $('#fa03').removeClass('rotate')
            $('#fa04').removeClass('rotate')
        $('#fa01').addClass('rotate')
            $('#shift').css('transform','translateX(0px)')
            
            $('#text2').animate({
                opacity: '0',   
            })
            $('#text3').animate({
                opacity: '0',  
            })
            $('#text4').animate({
                opacity: '0', 
            })
            $('#text1').animate({
                opacity: '1',
                transform: 'scale(1.2)', 
            })
        })
        $('#cir02').click(function(){
            
            $('#fa01').removeClass('rotate')
            $('#fa03').removeClass('rotate')
            $('#fa04').removeClass('rotate')
            $('#fa02').addClass('rotate')
            $('#shift').css('transform','translateX(-300px)')
            $('#text1').animate({
                opacity: '0',   
            })
            $('#text3').animate({
                opacity: '0',  
            })
            $('#text4').animate({
                opacity: '0', 
            })
            $('#text2').animate({
                opacity: '1',
                transform: 'scale(1.2)',

            })
          
        })
        $('#cir03').click(function(){
            $('#fa01').removeClass('rotate')
            $('#fa02').removeClass('rotate')
            $('#fa04').removeClass('rotate')
            $('#fa03').addClass('rotate')
            $('#shift').css('transform','translateX(-600px)')
            $('#text1').animate({
                opacity: '0',   
            })
            $('#text2').animate({
                opacity: '0',  
            })
            $('#text4').animate({
                opacity: '0', 
            })
            $('#text3').animate({
                opacity: '1',
                transform: 'scale(1.2)',
                
            })

        })
        $('#cir04').click(function(){
            $('#fa01').removeClass('rotate')
            $('#fa02').removeClass('rotate')
            $('#fa03').removeClass('rotate')
            $('#fa04').addClass('rotate')
            $('#shift').css('transform','translateX(-900px)')
            $('#text1').animate({
                opacity: '0',   
            })
            $('#text2').animate({
                opacity: '0',  
            })
            $('#text3').animate({
                opacity: '0', 
            })
            $('#text4').animate({
                opacity: '1',
                transform: 'scale(1.2)',
                
            })
        })