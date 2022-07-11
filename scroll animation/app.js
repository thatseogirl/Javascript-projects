const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);
checkBoxes();
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    console.log(triggerBottom);
    boxes.forEach(box => {
        const topBoxes = box.getBoundingClientRect().top;

        if (topBoxes < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
}
