window.addEventListener("load", function (e) {
    // header navbar menu toggle
    $("header .activeBars").click(function () {
      $("header .activeMenuBars").slideToggle(1000);
    });
    $(".choose .owl-carousel").owlCarousel({
      items: 4,
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 1000,
    });
    // videoPLay
    $(".kinght .fa-play").click(function () {
      document.querySelector(".videoPlay video").play();
      $(".kinght .videoPlay").addClass("active");
      $(this).fadeOut();
    });
  
    $(".kinght .videoPlay").mouseover(function () {
      if ($(this).hasClass("active")) {
        $(".kinght .fa-pause").fadeIn(); 
        $(".kinght .fa-pause").css("display", "flex");
      }
    }); 
  
    $(".kinght .videoPlay").mouseout(function () {
      $(".kinght .fa-pause").fadeOut();
    });
  
    $(".kinght .fa-pause").click(function () {
      document.querySelector(".videoPlay video").pause();
      $(".kinght .fa-play").fadeIn();
      $(".kinght video").removeClass("active");
    });
    // footer
    $("footer #accardionTitle").click(function () {
      $(this.children[0]).css("transform", "rotate(180deg)").addClass("act");
      $("footer #accardionContent").not($(this).next()).slideUp();
      $(this).next().slideToggle();
      if ($(this.children[0]).hasClass("act")) {
        $(this.children[0]).css("transform", "rotate(360deg)").removeClass("act");
      }
    });
});    
