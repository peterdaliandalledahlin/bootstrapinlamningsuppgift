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

$('#navbar_equalspower').click(function (event) {

  var _opened = $(".navbar-collapse").hasClass("navbar-collapse") && $(".navbar-collapse").hasClass("in");
  if (_opened === true && !($(event.target).hasClass("navbar-toggle"))) {
    $("button.navbar-toggle").click();
  }
  });

  document.querySelector("#login_btn").addEventListener("click", function(event) {

    let email = $("#login-email").val();
    let password = $("#login-password").val();

    let correctEmail = "example@example.com";
    let correctPassword = "MyPassword";

    if( validateEmail(email) ) {
        $('#login_spinner').show();
        if(email == correctEmail && password == correctPassword) {
            event.preventDefault();
            setTimeout(function() { window.location.href = "/profile.html"; }, 2000);
        }
    
        else {
            event.preventDefault();
            setTimeout(function() { $('#tip').show(); $('#wrong-email').show(); $('#email-format').hide(); $('#login_spinner').hide() }, 2000);
        }
    } else {
        event.preventDefault();
        $('#email-format').show();
        $('#login_spinner').hide();
    }
})

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// document.querySelector("#register_btn").addEventListener("click", function(event) {

//     event.preventDefault();
//     $('#register_info').show();
//     resetForm();
//     setTimeout(function() { window.location.href = "/"; }, 3000);

// })

function resetForm() {
  document.getElementById("registration_form").reset();
}

$('.alert').hide();

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

document.querySelector("#register_btn").addEventListener("click", function(event) {

  event.preventDefault();

  let firstname = $("#firstname").val();
  let lastname = $("#lastname").val();
  let email = $("#register-email").val();
  let password = $('#register-password').val();
  let address = $('#address').val();
  let city = $("#city").val();
  let zipcode = $("#zipcode").val();

  if( firstname == "" || lastname == "" || email == "" || password == "" || address == "" || city == "" || zipcode == "" || !validateEmail(email)) {
      $('.alert').show();
      $('#tip').hide();
      $('#wrong-email').hide();
      $('#email-format').hide();
      $('#register_info').hide();
      $('.invalid-feedback').show();

  } else {
    $('.alert').hide();
    $('#register_info').show();
    $('.valid-feedback').show();
    resetForm();
    // setTimeout(function() { window.location.href = "/"; }, 3000);
    setTimeout(function() { window.location.href = $('#LogInModal').modal('show'); }, 3000);
      //window.location.href = "/profile.html";
  }
  
})