const c1RadioButton = document.getElementById("c1");
const c2RadioButton = document.getElementById("c2");
const c3RadioButton = document.getElementById("c3");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const ml1 = document.querySelector("#ML1");
const ml2 = document.querySelector("#ML2");
const ml3 = document.querySelector("#ML3");

// Function to add the "up" class to a card and remove it from others
function updateCardClass(selectedCard, cardToChange1, cardToChange2) {
    selectedCard.classList.add("up");
    cardToChange1.classList.remove("up");
    cardToChange2.classList.remove("up");
}

function updateClassLogo(selectedLogo, logoToChange1, logoToChange2) {
    selectedLogo.classList.add("gold");
    logoToChange1.classList.remove("gold");
    logoToChange2.classList.remove("gold");
}

// Event listener for the radio buttons
c1RadioButton.addEventListener("change", function () {
    if (this.checked) {
        updateCardClass(card1, card2, card3);
        updateClassLogo(ml1, ml2, ml3);
    }
});

c2RadioButton.addEventListener("change", function () {
    if (this.checked) {
        updateCardClass(card2, card1, card3);
        updateClassLogo(ml2, ml1, ml3);
    }
});

c3RadioButton.addEventListener("change", function () {
    if (this.checked) {
        updateCardClass(card3, card1, card2);
        updateClassLogo(ml3, ml1, ml2);
    }
});

updateCardClass(card2, card1, card3);
updateClassLogo(ml2, ml1, ml3);