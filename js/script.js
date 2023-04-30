const mainBlock = document.getElementById('main');
const addImage = document.createElement('img');
const randomNumber = Math.ceil(Math.random(1) * 9);
addImage.src= `img/${randomNumber}.png`;
mainBlock.appendChild(addImage);