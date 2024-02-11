let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("generated-calendar-slide");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

document.getElementById("generate-schedules-button").onclick = function () {
  document.getElementById("generated-schedules-popup").style.display = "block";
}

document.querySelector(".generated-schedule-popup-close").onclick = function () {
  document.getElementById("generated-schedules-popup").style.display = "none";
}

window.onclick = function (event) {
  if (event.target == document.getElementById("generated-schedules-popup")) {
    document.getElementById("generated-schedules-popup").style.display = "none";
  }
}

document.querySelector(".generated-schedule-popup-prev").addEventListener('click', function () {
  plusSlides(-1);
});

document.querySelector(".generated-schedule-popup-next").addEventListener('click', function () {
  plusSlides(1);
});

var popup = document.getElementById("popupScheduledMeetings");

var btn = document.getElementById("openScheduledMeetings");

var span = document.getElementsByClassName("close-btn")[0];

btn.onclick = function () {
  popup.style.display = "block";
}

span.onclick = function () {
  popup.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}
