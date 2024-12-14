const chapterItems = document.querySelectorAll('.chapter-item'); 
const slider = document.querySelector('.favorites__slider');
let activeItem = chapterItems[0]; 

const favoritesWraps = document.querySelectorAll('.favorites__wrap');

const contentData = [
    {
        title: "Wool Runner",
        description: "Cozy Sneaker",
        image: "./images/cloud.png",
        backgroundImage: "url(./images/gallery/wool.jpg)"
    },
    {
        title: "Tree Runner",
        description: "Light and Breezy Sneaker",
        image: "./images/wind.png",
        backgroundImage: "url(./images/gallery/tree.jpg)"
    },
    {
        title: "Wool Runner Mizzle",
        description: "Rain-Ready Sneaker",
        image: "./images/rain.png",
        backgroundImage: "url(./images/gallery/mizzle.jpg)"
    }
];

chapterItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        const itemLeft = item.offsetLeft + (item.offsetWidth - 161) / 2; 
        slider.style.left = `${itemLeft}px`; 

        activeItem.classList.remove('active');
        item.classList.add('active');
        activeItem = item;

        moveFavoritesWraps(index);
    });
});

window.onload = () => {
    const activeLeft = activeItem.offsetLeft + (activeItem.offsetWidth - 161) / 2; 
    slider.style.left = `${activeLeft}px`; 
};

function moveFavoritesWraps(index) {
    const order = [
        [0, 1, 2],
        [1, 2, 0], 
        [2, 0, 1]  
    ];

    const newOrder = order[index];

    newOrder.forEach((newIndex) => {
        const wrap = favoritesWraps[newIndex];
        wrap.parentNode.appendChild(wrap); 
    });

    updateContent(newOrder);
}

function updateContent(newOrder) {
    newOrder.forEach((newIndex, i) => {
        const data = contentData[newIndex];
        const wrap = favoritesWraps[i];

        const titleElement = wrap.querySelector('.shop__wrap-title');
        const descriptionElement = wrap.querySelector('.shop__wrap-info');
        const imageElement = wrap.querySelector('.shop__wrap-descript img');
        const shoesElement = wrap.querySelector('.shop__shoes');

        titleElement.textContent = data.title;
        descriptionElement.textContent = data.description;
        imageElement.src = data.image;
        shoesElement.style.backgroundImage = data.backgroundImage;
    });
}
