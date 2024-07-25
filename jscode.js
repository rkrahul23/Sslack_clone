function sales(){
    // location.replace("practicelogin.html")
    window.location.href = "https://slack.com/intl/en-in/contact-sales";
}
function start(){
  // location.replace("practicelogin.html")
  window.location.href = "https://slack.com/get-started#/createnew";
}

function signin(){
    window.location.href = "practicelogin.html";
}
function slack(){
    window.location.href = "https://slack.com/intl/en-in/";
}
function google(){
    window.location.href = "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=606092904014-s1u3idjanlbhr4ns5b1hcjgfn63cr9nh.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Foauth2.slack.com%2Fsignin%2Foauth%2Fgoogle%2Fend&scope=openid%20email%20profile&response_type=code&access_type=offline&state=%7B%22provider%22%3A%22google%22%2C%22origin%22%3A%22signin%22%2C%22timestamp%22%3A1717656959%2C%22visitor%22%3A%228934bd637ab2114654821863bede1c15%22%7D%7C51e71e72c19fcb005c429d7110ee9f0cb04b2bc32cad101aa3aad387367f6300&prompt=consent&service=lso&o2v=2&ddm=0&flowName=GeneralOAuthFlow";  
}
function apple(){
    window.location.href = "https://appleid.apple.com/auth/authorize?client_id=com.slack.client&redirect_uri=https%3A%2F%2Foauth2.slack.com%2Fsignin%2Foauth%2Fapple%2Fend&scope=openid+email+name&response_type=code&state=%7B%22provider%22%3A%22apple%22%2C%22origin%22%3A%22signin%22%2C%22timestamp%22%3A1717657035%2C%22visitor%22%3A%228934bd637ab2114654821863bede1c15%22%7D%7C6970b9177b2bea44cca016310aef583663d7b3e389e83c2b0131e8f52cb12207&response_mode=form_post&nonce=27f53339825b2548ee262ef35f44e145032d1c7fc357aad86868a77cd8dada7d";  
}
// search bar
$(document).ready(function(){
  $("#search-icon").click(function(){
    $("#search-bar").toggle();
  });
});
// region
      $(document).ready(function(){
        $("a").click(function(event){
          event.stopPropagation();
          $(".box").toggle();
        });
        $(document).click(function(){
          $(".box").hide();
        });
      });
// email
      $(document).ready(function(){
        $("#submit").click(function(){
          var email = $("#email").val();
          alert("Email: " + email);
        });
      });

      // Get the dropdown button and the dropdown content
var dropbtn = document.querySelector('.dropbtn');
var dropdown = document.getElementById("myDropdown");

// Toggle the dropdown content when clicking on the button
dropbtn.onclick = function() {
  dropdown.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
}

// slide
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
 
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = 'none';
        if (i === index) {
            slide.style.display = 'block';
        }
    });
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Initially show the first slide
showSlide(currentSlide);

// faq


const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// drpdown2
const button1 = document.getElementById('dropdown-but');
    const box1 = document.getElementById('dropdown-bo');

    button1.addEventListener('click', () => {
        box1.style.display = box1.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (event) => {
        if (!box1.contains(event.target) && event.target !== button1) {
            box1.style.display = 'none';
        }
    });
