$(document).ready(function() {
    $('.sale-box').children("span").eq(0).mouseover(function() {
      $('.function-section').eq(0).children(".function-box").eq(0).css({
        'box-shadow': '5px 5px 10px rgba(41, 41, 41, 0.541) , -5px -5px 10px rgba(41, 41, 41, 0.541) '
      });
    });
  
    $('.sale-box').children("span").eq(0).mouseout(function() {
        $('.function-section').eq(0).children(".function-box").eq(0).css({
            'box-shadow': ''
      });
    });
  });
  ///////////////////////////////////
$(document).ready(function() {
    $('.sale-box').children("span").eq(1).mouseover(function() {
      $('.function-section').eq(0).children(".function-box").eq(1).css({
        'box-shadow': '5px 5px 10px rgba(41, 41, 41, 0.541) , -5px -5px 10px rgba(41, 41, 41, 0.541) '
      });
    });
  
    $('.sale-box').children("span").eq(1).mouseout(function() {
        $('.function-section').eq(0).children(".function-box").eq(1).css({
            'box-shadow': ''
      });
    });
  });
///////////////////////////////
$(document).ready(function() {
    $('.sale-box').children("span").eq(2).mouseover(function() {
      $('.function-section').eq(0).children(".function-box").eq(2).css({
        'box-shadow': '5px 5px 10px rgba(41, 41, 41, 0.541) , -5px -5px 10px rgba(41, 41, 41, 0.541) '
      });
    });
  
    $('.sale-box').children("span").eq(2).mouseout(function() {
        $('.function-section').eq(0).children(".function-box").eq(2).css({
            'box-shadow': ''
      });
    });
  });
///////////////////////////////
$(document).ready(function() {
    $('.sale-box').children("span").eq(3).mouseover(function() {
      $('.function-section').eq(0).children(".function-box").eq(3).css({
        'box-shadow': '5px 5px 10px rgba(41, 41, 41, 0.541) , -5px -5px 10px rgba(41, 41, 41, 0.541) '
      });
    });
  
    $('.sale-box').children("span").eq(3).mouseout(function() {
        $('.function-section').eq(0).children(".function-box").eq(3).css({
            'box-shadow': ''
      });
    });
  });

  $(document).ready(function() {
    $('.sale-box').children("span").eq(4).mouseover(function() {
      $('.function-section').eq(1).children(".function-box").eq(2).css({
        'box-shadow': '5px 5px 10px rgba(41, 41, 41, 0.541) , -5px -5px 10px rgba(41, 41, 41, 0.541) '
      });
    });
  
    $('.sale-box').children("span").eq(4).mouseout(function() {
        $('.function-section').eq(1).children(".function-box").eq(2).css({
            'box-shadow': ''
      });
    });
  });

$(document).ready(function() {
    $('.sale-box').children("span").eq(5).mouseover(function() {
      $('.function-section').eq(1).children(".function-box").eq(1).css({
        'box-shadow': '5px 5px 10px rgba(41, 41, 41, 0.541) , -5px -5px 10px rgba(41, 41, 41, 0.541) '
      });
    });
  
    $('.sale-box').children("span").eq(5).mouseout(function() {
        $('.function-section').eq(1).children(".function-box").eq(1).css({
            'box-shadow': ''
      });
    });
  });

$(document).ready(function() {
    $('.sale-box').children("span").eq(6).mouseover(function() {
      $('.function-section').eq(1).children(".function-box").eq(0).css({
        'box-shadow': '5px 5px 10px rgba(41, 41, 41, 0.541) , -5px -5px 10px rgba(41, 41, 41, 0.541) '
      });
    });
  
    $('.sale-box').children("span").eq(6).mouseout(function() {
        $('.function-section').eq(1).children(".function-box").eq(0).css({
            'box-shadow': ''
      });
    });
  });


  // FAQ'S

  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
      panel.style.transition = "all .6s ease"
    }
  });
}

// $(document).ready(function() {
//   $(".accordion").click(function() {
//     if ($(".panel").st("min-width")) {
//       $(this).children("span").removeClass("min-width");
//       $(this).children("span").animate({ width:"68%" }, 1000);
//       $("#drop-down").slideDown(1000);
//     } else {
//       $(this).children("span").addClass("min-width");
//       $(this).children("span").animate({ width: "40%" }, 1000);
//       $("#drop-down").slideUp(1000);
//     }
//   });
// });

function transform(x){
  x.classList.toggle("change")
}