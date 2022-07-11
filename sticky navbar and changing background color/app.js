const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixedTop);

console.log(nav)

function fixedTop() {
    if (window.scrollY > nav.offsetHeight) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
    // let scrolledPoint = window
}
