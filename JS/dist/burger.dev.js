"use strict";

document.getElementById('hamburger').addEventListener('click', function () {
  var nav = document.getElementById('nav');
  nav.classList.toggle('active');
});