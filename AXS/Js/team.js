const cd1 = document.querySelector(".cd1");
const cd2 = document.querySelector(".cd2");
const cd3 = document.querySelector(".cd3");
const cd4 = document.querySelector(".cd4");

const i1 = document.querySelector(".i1");
const i2 = document.querySelector(".i2");
const i3 = document.querySelector(".i3");
const i4 = document.querySelector(".i4");

const crosses = document.querySelectorAll(".cross");

cd1.addEventListener("click", function () {
    i1.classList.add("visible");
});

cd2.addEventListener("click", function () {
    i2.classList.add("visible");
});

cd3.addEventListener("click", function () {
    i3.classList.add("visible");
});

cd4.addEventListener("click", function () {
    i4.classList.add("visible");
});

crosses.forEach(cross => {
    cross.addEventListener("click", function () {
        i1.classList.remove("visible");
        i2.classList.remove("visible");
        i3.classList.remove("visible");
        i4.classList.remove("visible");
    })
})


document.addEventListener("keydown", function handleEscapeKeyPress(event) {
    if (event.key === "Escape" || event.key === " " || event.key === "Enter") {
        i1.classList.remove("visible");
        i2.classList.remove("visible");
        i3.classList.remove("visible");
        i4.classList.remove("visible");
    }
    console.log(event.key);
})