const images = document.getElementById('images');
const rightButton = document.getElementById('right');
const leftButton = document.getElementById('left');
const allImages = document.querySelectorAll('#images img');

let index = 0

let interval = setInterval(run, 2000);

function run() {
    index++
    changeImages()
}

function changeImages() {
    if (index > allImages.length - 1) {
        index = 0
    } else if (index < 0) {
        index = allImages.length - 1
    }
    images.style.transform = `translateX(${-index * 500}px)`
}

function resetInterval() {
    clearInterval(interval);
    // interval = setInterval(run, 3000)
}
rightButton.addEventListener('click', () => {
    index++
    changeImages()
    resetInterval()
})

leftButton.addEventListener('click', () => {
    index--
    changeImages()
    resetInterval()
})