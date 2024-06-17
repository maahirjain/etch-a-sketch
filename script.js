let gridSide = 16;

for (let i = 0; i < gridSide; i++) {
    let divContainer = document.createElement("div");

    for (let i = 0; i < gridSide; i++) {
        let div = document.createElement("div");
        div.style.width = "32px";
        div.style.height = "32px";
        div.style.border = "1px solid black";
        divContainer.appendChild(div);
    }

    document.querySelector(".sketch-area").appendChild(divContainer);
}

