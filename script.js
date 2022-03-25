
$(document).ready(function () {

  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".nav").addClass("sticky")
    } else {
      $(".nav").removeClass("sticky")
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show")
    } else {
      $(".scroll-up-btn").removeClass("show")
    }
  })

  // scroll-up-btn script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // $("html").css("scrollBehavior", "auto")
  });
  // NAV ITEM SMOOTH SCROLL SCRIPT
  // 1st method

  // $(".nav .menu li a").click(function () {
  //   $('html').css("scrollBehavior", "smooth")
  // })
  
  //2nd method

  var scrollLinks = $('.scroll')
  scrollLinks.click(function(e){
    e.preventDefault();

    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    },1000)
  })
  
  // //active link switching
  // $(window).scroll(function(){
  //   var scrollBarLocation = $(this).scrollTop();
  //   scrollLinks.each(function(){
  //     var sectionOffset = $(this.hash).offset().top
  //     if (sectionOffset <= scrollBarLocation) {
  //       $(this).parent().siblings().addClass('active')
  //     }
  //   })
  // })

  //typing animation starts
  var typed = new Typed(".typing",{
    strings:["Youtuber","Blogger","Video Editor","Tutor","Student","Enthrepenure"],
    typeSpeed:100,
    backSpeede:60,
    loop:true,
  })

  var typed = new Typed(".typing-2",{
    strings:["Youtuber","Blogger","V Editor","Tutor","Student"],
    typeSpeed:100,
    backSpeede:60,
    loop:true,
  })

  $(".menu-btn").click(function () {
    $(".nav .menu").toggleClass("active")
    $(".menu-btn i").toggleClass("active")
  })
  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  })

})