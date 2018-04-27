 var scrollTop = 0;

  var items = null;

  var oStyle = null;




  $(function(){

   items = $("#content span");

   items.each(function(i){

    $(this).data("oStyle", { top : parseInt($(this).css("top")), speed : 1000 + i * 600 });

   });

  });




  $(window).scroll(function(){

   scrollTop = $(window).scrollTop();

   items.each(function(){

    oStyle =  $(this).data("oStyle");

    $(this).stop().animate({top :oStyle.top - parseInt(scrollTop/10)}, oStyle.speed);

   });

  });