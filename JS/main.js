const container = document.querySelector(".container")

for (i = 1; i < 50; i++) {

    const divEl = document.createElement("div");

    divEl.className = "quadrato"

    container.append(divEl)
}
