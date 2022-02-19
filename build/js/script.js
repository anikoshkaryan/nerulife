//*hamburger-menu part

document.querySelector('.hamburger-menu').addEventListener('click', function (event) {

  event.stopPropagation();

  // document.querySelector('.mobile_version').classList.toggle('open');

  // document.querySelector('.hamburger-menu').classList.toggle('open');

  $('.mobile_version').fadeToggle()
  
  

});

document.querySelector(".mobile-close").addEventListener("click", function (event) {

  event.stopPropagation();

  $('.mobile_version').fadeToggle()


});


$(document).on("change", "#search_check_input1", function(){
    $(".search_check_input_label").removeClass("active");
    $(this).parent().toggleClass("active");

})



// $(document).on("click", ".open_custom_select", function(){
//     $(this).find(".search_categories_form_select_menu_ul_main_wrapper").toggleClass("open");
// })



$(document).on("click", function(e){



  $(".search_categories_form_select_menu_ul_main_wrapper").removeClass("open");


  if ($(e.target).closest(".open_custom_select").length === 0) {

    $(".search_categories_form_select_menu_ul_main_wrapper").removeClass("open");

    console.log('ddd')
  } else {

    

    $(e.target).closest('.open_custom_select').find(".search_categories_form_select_menu_ul_main_wrapper").addClass("open");

  }

});



$(document).on("click", ".new_announcements_item_link", function(){
        $(".new_announcements_item_link").removeClass("active");
        $(this).addClass("active");
})


const swiper = new Swiper('.swiper-container', {
 
    direction: 'horizontal',
    loop: true,
    loopedSlides: 10,
      roundLengths: true,
    slidesPerView: 4,
    spaceBetween: 10,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      324: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      330: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      340: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      350: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      360: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      370: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      380: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      400: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      420: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      426: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      440: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      460: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      470: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1120: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1130: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1140: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1150: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1152: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1155: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1157: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1158: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1160: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1170: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1180: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1170: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1180: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1190: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1216: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1218: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1220: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1230: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1240: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1260: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1270: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1299: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1500: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1700: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1800: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1920: {
        slidesPerView: 4,
        spaceBetween: 10
      }
    }
    
  });



  
$(document).on("focusin", ".sign_in_input_field", function(){
  $(this).parent().addClass("active");

})


$(document).on("focusout", ".sign_in_input_field", function(){
  $(this).parent().removeClass("active");
  var val = $(this).val();
  if(val.length > 0){
      $(this).parent().find('.label-text').hide();
  } else{
      $(this).parent().find('.label-text').show();
  }

})



  
$(document).on("focusin", ".sign_up_input_field", function(){
  $(this).parent().addClass("active");

})


$(document).on("focusout", ".sign_up_input_field", function(){
  $(this).parent().removeClass("active");
  var val = $(this).val();
  if(val.length > 0){
      $(this).parent().find('.sign_up_input_text').hide();
  } else{
      $(this).parent().find('.sign_up_input_text').show();
  }

})


$(document).on("change", "#sign_up_check_input", function(){

  $(".sign_up_check_input_label").removeClass("active");
  $(this).parent().toggleClass("active");

})


$(document).on('click', '.new_announcements_item_link_btn', function(){
  $('.new_announcements_append_item').removeClass('hidden');
})