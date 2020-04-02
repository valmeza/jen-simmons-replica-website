"use strict";

(function() {
  // button event

  var button1 = document.getElementById("click-me");
  var button2 = document.getElementById("something");
  var button3 = document.getElementById("break");
  var button4 = document.getElementById("ehh");

  var name = document.getElementById("name");
  button1.addEventListener("click", function() {
    name.style.color = "#0000ff";
  });

  var picture = document.getElementById("images-1");
  var secondPicture = document.getElementById("images-2");
  button2.addEventListener("click", function() {
    picture.style.borderRadius = "10px";
    secondPicture.style.borderRadius = "50%";
  });

  var breakIt = document.getElementById("para");
  var breakIt2 = document.getElementById("para2");

  button3.addEventListener("click", function() {
    breakIt.style.transform = "rotate(-25deg)";
    breakIt2.style.transform = "rotate(25deg)";
  });

  button4.addEventListener('click', function() {
    button4.style.display = 'none';
  });
})();
