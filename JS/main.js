//Chiede all'utente di selezionare la difficoltà
const difficoltà = prompt("Scegli la tua difficoltà da 1 a 3 (1 è Easy!, 2 è Normal!, 3 è Hard!");

//Seleziona l'elemento della DOM sul quale verrà stampata la griglia
const container = document.querySelector(".cont")

//In base alla difficoltà scelta dall'utente selezionerà la grandezza della griglia
if (difficoltà == 1) {

    var quadrati = 50;

} else if (difficoltà == 2) {

    var quadrati = 82;

} else {

    var quadrati = 101;
}

//Stampa sulla DOM la grandezza della griglia in base alla difficoltà scelta
for (i = 1; i < quadrati; i++) {

    //Crea un elemento div
    const divEl = document.createElement("div");

    //Aggiunge la classe quadrato all'elemento appena creato
    divEl.className = "quadrato"

    //Stampa la griglia nella DOM
    container.append(divEl)

    //Stampa i numeri dei quadrati nella DOM
    divEl.innerHTML += `<p class="numero"> ${i} </p>`

    //Funzione che server a colorare un quadrato quando ci si clicca sopra
    divEl.addEventListener(`click`, function () {

        //Aggiunge il colore celeste all'elemento cliccato
        this.style.backgroundColor = "cyan"
    })
}



