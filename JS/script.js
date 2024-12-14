const chapterItems = document.querySelectorAll('.chapter-item');
const slider = document.querySelector('.favoritesslider');
const favoritesWraps = document.querySelectorAll('.favoriteswrap');
const contentData = [
    { title: "Wool Runner", description: "Cozy Sneaker", image: "./images/cloud.png", backgroundImage: "url(./images/gallery/wool.jpg)" },
    { title: "Tree Runner", description: "Light and Breezy Sneaker", image: "./images/wind.png", backgroundImage: "url(./images/gallery/tree.jpg)" },
    { title: "Wool Runner Mizzle", description: "Rain-Ready Sneaker", image: "./images/rain.png", backgroundImage: "url(./images/gallery/mizzle.jpg)" }
];

let activeItem = chapterItems[0];

const updateSliderPosition = (item) => {
    const itemLeft = item.offsetLeft + (item.offsetWidth - 161) / 2;
    slider.style.left = ${itemLeft}px;
};

const updateContent = (index) => {
    favoritesWraps.forEach((wrap, i) => {
        const data = contentData[(index + i) % contentData.length];
        wrap.querySelector('.shopwrap-title').textContent = data.title;
        wrap.querySelector('.shopwrap-info').textContent = data.description;
        wrap.querySelector('.shopwrap-descript img').src = data.image;
        wrap.querySelector('.shopshoes').style.backgroundImage = data.backgroundImage;
    });
};

chapterItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        activeItem.classList.remove('active');
        item.classList.add('active');
        activeItem = item;
        updateSliderPosition(item);
        updateContent(index);
    });
});

window.onload = () => updateSliderPosition(activeItem);
