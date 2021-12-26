
$(document).ready(function(){
    $(".preloader").delay(2500).fadeOut();
});

//preloader end;

$(window).scroll(function(){
  var scrolling = $(this).scrollTop();

  if(scrolling > 200){
      $(".back-top-btn").fadeIn();
  }
  else{
      $(".back-top-btn").fadeOut();
  }

//nav fixed;

if(scrolling >300){
    $("nav").addClass("nav-fixed");
}else{
    $("nav").removeClass("nav-fixed");
}
});


$(".back-top-btn").click(function(){
   $("html,body").animate({
       scrollTop: "0px",
   },1500);
});

