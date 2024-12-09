"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var sections = document.querySelectorAll('.stories__shop');
  sections.forEach(function (section) {
    var leftArrow = section.parentElement.querySelector('.left-arrow');
    var rightArrow = section.parentElement.querySelector('.right-arrow');
    var items = section.querySelectorAll('.arrivals');
    leftArrow.addEventListener('click', function (e) {
      e.preventDefault();
      section.insertBefore(items[items.length - 1], items[0]);
    });
    rightArrow.addEventListener('click', function (e) {
      e.preventDefault();
      section.appendChild(items[0]);
    });
  });
});