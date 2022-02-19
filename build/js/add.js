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



  $(document).on("click", ".add_child_image", function(){
      var imageSource = $(this).attr("src");
      $("#adds_parent_image").attr('src',imageSource);
 
    })


      
$(document).on("focusin", ".price_input_field", function(){
  $(this).parent().addClass("active");

})


$(document).on("focusout", ".price_input_field", function(){
  $(this).parent().removeClass("active");
  var val = $(this).val();
  if(val.length > 0){
      $(this).parent().find('.label-text').hide();
  } else{
      $(this).parent().find('.label-text').show();
  }

})

$(document).on("focusin", ".contacts_input_field", function(){
  $(this).parent().addClass("active");

})


$(document).on("focusout", ".contacts_input_field", function(){
  $(this).parent().removeClass("active");
  var val = $(this).val();
  if(val.length > 0){
      $(this).parent().find('.contacts_label-text').hide();
  } else{
      $(this).parent().find('.contacts_label-text').show();
  }

})

$(document).on("change", "#search_check_input10", function(){
  $(".search_check_input_label").removeClass("active");
  $(this).parent().toggleClass("active");

})




$(document).on("change", "#placement_method_input1", function(){
  $("#first_payment_method").removeClass("active");
  $("#second_payment_method").removeClass("active");
  $("#third_payment_method").removeClass("active");
  $(".label_hiiden_div_svg_wrapper").removeClass("active");
  $(this).parent().toggleClass("active");
  $(this).parent().parent().toggleClass("active");
})


$(document).on("change", "#placement_method_input2", function(){
  $("#second_payment_method").removeClass("active");
  $("#first_payment_method").removeClass("active");
  $("#third_payment_method").removeClass("active");
  $(".label_hiiden_div_svg_wrapper").removeClass("active");
  $(this).parent().toggleClass("active");
  $(this).parent().parent().toggleClass("active");

})


$(document).on("change", "#placement_method_input3", function(){
  $("#third_payment_method").removeClass("active");
  $("#second_payment_method").removeClass("active");
  $("#first_payment_method").removeClass("active");
  $(".label_hiiden_div_svg_wrapper").removeClass("active");
  $(this).parent().toggleClass("active");
  $(this).parent().parent().toggleClass("active");

})



$(document).on("click", ".choose_a_placement_method_click_item", function(){

  var data_id = $(this).data("id");

  $(".choose_a_placement_method_item").removeClass("open");

  
  $("#" + data_id).addClass("open");


  


})


// $(document).on("click", ".choose_categories_select_title_svg_wrapper", function(){
//     $(".choose_categories_item").removeClass("open");
//     $(this).parent().toggleClass("open");


    


// })



$(document).on("click", function(e){


    $(".choose_categories_item").removeClass("open");

    if ($(e.target).closest(".choose_categories_item").length === 0) {

      $(e.target).closest(".choose_categories_item").removeClass("open");

    } else {
   
      $(e.target).closest(".choose_categories_item").addClass("open");

    }

});

$(document).on("click", ".choose_categories_select_option", function(){
  var dataValue = $(this).data("value");
  var dataName = $(this).data("name");
 $(this).closest(".choose_categories_item").find(".choose_categories_select_input").val(dataValue);
 $(this).closest(".choose_categories_item").find(".choose_categories_select_title_hidden").html(dataName);
})




$(document).on("click", ".office_header_select_wrapper svg", function(){
  $(".office_header_select_title_options_wrapper").toggleClass("open");
})


$(document).on("click", function(e){



  $(".office_header_select_title_options_wrapper").removeClass("open");

  if ($(e.target).closest(".office_header_select_title_options_wrapper").length === 0) {

    $(e.target).closest(".office_header_select_title_options_wrapper").removeClass("open");

  } else {
 
    $(e.target).closest(".office_header_select_title_options_wrapper").addClass("open");

  }

});
