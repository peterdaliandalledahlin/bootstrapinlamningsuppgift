/*
var text = 'e';

var textElements = text.split("").map(function(c) {
return $('<span id="' + c + '">' + c + '</span>');
});

var el = $('#letters');
var delay = 50; // Tune this for different letter delays.
textElements.forEach(function(e, i) {
el.append(e);
e.hide();
setTimeout(function() {
    e.fadeIn(3000)
}, 100 + i * delay)
})
*/

//start add navbar shadow
  $(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $('#navBar').addClass('nav_shadow');
    } else {
        $('#navBar').removeClass('nav_shadow');
    }
});
//end add navbar shadow

//start back to top button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("back_to_top_btn").style.display = "block";
    } else {
      document.getElementById("back_to_top_btn").style.display = "none";
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
//end back to top button

let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: '750'
})

tl.add({
    targets: 'section',
    delay: anime.stagger(100)
})

//profile script
$(document).ready(function () {
  $imgSrc = $('#imgProfile').attr('src');
  function readURL(input) {

      if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
              $('#imgProfile').attr('src', e.target.result);
          };

          reader.readAsDataURL(input.files[0]);
      }
  }
  $('#btnChangePicture').on('click', function () {
      // document.getElementById('profilePicture').click();
      if (!$('#btnChangePicture').hasClass('changing')) {
          $('#profilePicture').click();
      }
      else {
          // change
      }
  });
  $('#profilePicture').on('change', function () {
      readURL(this);
      $('#btnChangePicture').addClass('changing');
      $('#btnChangePicture').attr('value', 'Confirm');
      $('#btnDiscard').removeClass('d-none');
      // $('#imgProfile').attr('src', '');
  });
  $('#btnDiscard').on('click', function () {
      // if ($('#btnDiscard').hasClass('d-none')) {
      $('#btnChangePicture').removeClass('changing');
      $('#btnChangePicture').attr('value', 'Change');
      $('#btnDiscard').addClass('d-none');
      $('#imgProfile').attr('src', $imgSrc);
      $('#profilePicture').val('');
      // }
  });
});