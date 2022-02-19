$(document).on("click", ".my_office_item_big_click_item", function(){

    var data_id = $(this).data("id");
    $(".my_office_item_big_click_item").removeClass("active")
    $(this).addClass("active");

    $(".my_office_item_big_advertisements_wrapper").removeClass("open");
    $("#" + data_id).addClass("open");

})

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



// $(document).on("click", ".choose_categories_select_option", function(){
//   var dataValue = $(this).data("value");
//   var dataName = $(this).data("name");
//  $(this).closest(".office_header_select_title_options_wrapper").find(".office_header_select1").val(dataValue);
//  $(this).closest(".office_header_select_title_options_wrapper").find(".office_header_select_wrapper_title_hidden").html(dataName);
// })