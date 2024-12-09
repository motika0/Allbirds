"use strict";

var chapterItems = document.querySelectorAll('.chapter-item');
var slider = document.querySelector('.favorites__slider');
var activeItem = chapterItems[0];
var favoritesWraps = document.querySelectorAll('.favorites__wrap');
var contentData = [{
  title: "Wool Runner",
  description: "Cozy Sneaker",
  image: "./images/cloud.png",
  backgroundImage: "url(./images/gallery/wool.jpg)"
}, {
  title: "Tree Runner",
  description: "Light and Breezy Sneaker",
  image: "./images/wind.png",
  backgroundImage: "url(./images/gallery/tree.jpg)"
}, {
  title: "Wool Runner Mizzle",
  description: "Rain-Ready Sneaker",
  image: "./images/rain.png",
  backgroundImage: "url(./images/gallery/mizzle.jpg)"
}];
chapterItems.forEach(function (item, index) {
  item.addEventListener('click', function () {
    var itemLeft = item.offsetLeft + (item.offsetWidth - 161) / 2;
    slider.style.left = "".concat(itemLeft, "px");
    activeItem.classList.remove('active');
    item.classList.add('active');
    activeItem = item;
    moveFavoritesWraps(index);
  });
});

window.onload = function () {
  var activeLeft = activeItem.offsetLeft + (activeItem.offsetWidth - 161) / 2;
  slider.style.left = "".concat(activeLeft, "px");
};

function moveFavoritesWraps(index) {
  var order = [[0, 1, 2], [1, 2, 0], [2, 0, 1]];
  var newOrder = order[index];
  newOrder.forEach(function (newIndex) {
    var wrap = favoritesWraps[newIndex];
    wrap.parentNode.appendChild(wrap);
  });
  updateContent(newOrder);
}

function updateContent(newOrder) {
  newOrder.forEach(function (newIndex, i) {
    var data = contentData[newIndex];
    var wrap = favoritesWraps[i];
    var titleElement = wrap.querySelector('.shop__wrap-title');
    var descriptionElement = wrap.querySelector('.shop__wrap-info');
    var imageElement = wrap.querySelector('.shop__wrap-descript img');
    var shoesElement = wrap.querySelector('.shop__shoes');
    titleElement.textContent = data.title;
    descriptionElement.textContent = data.description;
    imageElement.src = data.image;
    shoesElement.style.backgroundImage = data.backgroundImage;
  });
}