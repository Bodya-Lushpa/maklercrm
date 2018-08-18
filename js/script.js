$(document).ready(function(){

   var show = true;
  var countbox = "#counts";
  $(window).on("scroll load resize", function(){
    if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height();        // Высота окна браузера
    var d_height = $(document).height();      // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if(w_top + 800 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
      $(".spincrement").spincrement({
        thousandSeparator: "",
        duration: 2000,
        thousandSeparator: " "
      });
      show = false;
    }
  });

  $(".history-m_item").click(function(e) {
      e.preventDefault();      
      $(this).toggleClass("active-m");
      $(this).find(".history-block").slideToggle();
    });

	$(".step").click(function(e) {
			e.preventDefault();
			$(".step").removeClass("active");
      $(".step").removeClass("animated infinite pulse");
      $(".step-number").removeClass("animated infinite pulse");
      $(this).addClass("active animated infinite pulse");
      $(this).find(".step-number").addClass("animated infinite pulse");
    });

	$(".step1").click(function(e) {
			e.preventDefault();
			$(".history-block").hide();
			$(".h-block1").show();
    });

		$(".step2").click(function(e) {
			e.preventDefault();
			$(".history-block").hide();
			$(".h-block2").show();
    });

    $(".step3").click(function(e) {
			e.preventDefault();
			$(".history-block").hide();
			$(".h-block3").show();
    });

    $(".step4").click(function(e) {
			e.preventDefault();
			$(".history-block").hide();
			$(".h-block4").show();
    });

    $(".step5").click(function(e) {
			e.preventDefault();
			$(".history-block").hide();
			$(".h-block5").show();
    });

    $(".step6").click(function(e) {
			e.preventDefault();
			$(".history-block").hide();
			$(".h-block6").show();
    });

    $(".burger-block").click(function(e) {
      e.preventDefault();
      $(".menu-m").show();
    });

    $(".menu-m_close").click(function(e) {
      e.preventDefault();
      $(".menu-m").hide();
    });

  	$(".phone-masc").mask("+7(999) 999-99-99");


    $(".btn").click(function() {
      $('.thanks').show();
    });

    $(".advantage__btn1").click(function(e) {
    	e.preventDefault();
      $('.advantage__text1').toggle();
      if ($(".advantage__btn1").html()=="Подробнее") {
      	$(".advantage__btn1").html("Скрыть");
        $(".advantage__item1").css("box-shadow", "0px 4px 20.16px 0.84px rgba(0, 0, 0, 0.11)");
      }else{
      	$(".advantage__btn1").html("Подробнее");
        $(".advantage__item1").css("box-shadow", "none");
      }
    });

    $(".menu-desktop").on("click",".menu__item-swipe a", function (event) {
          //отменяем стандартную обработку нажатия по ссылке
          event.preventDefault();
          var id  = $(this).attr('href'),

              top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 1500);
      });

    $("#menu-m").on("click",".menu__item-swipe-m a", function (event) {
          //отменяем стандартную обработку нажатия по ссылке
          event.preventDefault();
          var id  = $(this).attr('href'),

              top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 1500);
      });


    $(".advantage__btn2").click(function(e) {
    	e.preventDefault();
      $('.advantage__text2').toggle();
      if ($(".advantage__btn2").html()=="Подробнее") {
      	$(".advantage__btn2").html("Скрыть");
        $(".advantage__item2").css("box-shadow", "0px 4px 20.16px 0.84px rgba(0, 0, 0, 0.11)");
      }else{
      	$(".advantage__btn2").html("Подробнее");
        $(".advantage__item2").css("box-shadow", "none");
      }
    });

    $(".advantage__btn3").click(function(e) {
    	e.preventDefault();
      $('.advantage__text3').toggle();
      if ($(".advantage__btn3").html()=="Подробнее") {
      	$(".advantage__btn3").html("Скрыть");
        $(".advantage__item3").css("box-shadow", "0px 4px 20.16px 0.84px rgba(0, 0, 0, 0.11)");
      }else{
      	$(".advantage__btn3").html("Подробнее");
        $(".advantage__item3").css("box-shadow", "none");
      }
    });

    $(".advantage__btn4").click(function(e) {
    	e.preventDefault();
      $('.advantage__text4').toggle();
      if ($(".advantage__btn4").html()=="Подробнее") {
      	$(".advantage__btn4").html("Скрыть");
        $(".advantage__item4").css("box-shadow", "0px 4px 20.16px 0.84px rgba(0, 0, 0, 0.11)");
      }else{
      	$(".advantage__btn4").html("Подробнее");
        $(".advantage__item4").css("box-shadow", "none");
      }
    });

    $(".advantage__btn5").click(function(e) {
    	e.preventDefault();
      $('.advantage__text5').toggle();
      if ($(".advantage__btn5").html()=="Подробнее") {
      	$(".advantage__btn5").html("Скрыть");
        $(".advantage__item5").css("box-shadow", "0px 4px 20.16px 0.84px rgba(0, 0, 0, 0.11)");
      }else{
      	$(".advantage__btn5").html("Подробнее");
        $(".advantage__item5").css("box-shadow", "none");
      }
    });

    $(".advantage__btn6").click(function(e) {
    	e.preventDefault();
      $('.advantage__text6').toggle();
      if ($(".advantage__btn6").html()=="Подробнее") {
      	$(".advantage__btn6").html("Скрыть");
        $(".advantage__item6").css("box-shadow", "0px 4px 20.16px 0.84px rgba(0, 0, 0, 0.11)");
      }else{
      	$(".advantage__btn6").html("Подробнее");
        $(".advantage__item6").css("box-shadow", "none");
      }
    });

    $('.form').submit(function(e) {

      e.preventDefault();

      var form = $(this), button = $(this).find('[type=submit]'), thanks = $(this).find('.form-thank');
      button.html('Подождите').attr('disabled', true);

      $.post('form.php', form.serialize(), function(data) {
        thanks.show();
      });

    });

});


var video = document.getElementById("video");
var vid = document.getElementById("play");

vid.onclick = function(e){
  e.preventDefault();
  if (video.paused) {
    video.play();
  }
  else{
    video.pause();
  } 
}

$(document).ready(
      function() {
        $(".resault_block").niceScroll(
        {
          cursorcolor: "#11cebf",
          cursoropacitymin: "1",
          cursorwidth: "10px"
        }
        );
      }
);






