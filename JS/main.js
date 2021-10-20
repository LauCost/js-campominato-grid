
const difficoltà = prompt("Scegli la tua difficoltà da 1 a 3 (1 è Easy!, 2 è Normal!, 3 è Hard!");

const container = document.querySelector(".cont")

if (difficoltà == 1) {

    var quadrati = 50;

} else if (difficoltà == 2) {

    var quadrati = 82;

} else {

    var quadrati = 101;
}

for (i = 1; i < quadrati; i++) {

    const divEl = document.createElement("div");

    divEl.className = "quadrato"

    container.append(divEl)
}


