let input = document.querySelector("input");
let checkbox = document.querySelector("#grid-lines");

function createGrid(gridSide) {
    document.querySelector(".grid").remove();

    let grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.border = "1px solid black";
    document.querySelector(".sketch-area").appendChild(grid);

    for (let i = 0; i < gridSide; i++) {
        let divContainer = document.createElement("div");
    
        for (let i = 0; i < gridSide; i++) {
            let div = document.createElement("div");
            let side = (546 - 2 * gridSide)/gridSide;
            div.style.width = `${side}px`;
            div.style.height = `${side}px`;
            div.style.border = "1px solid black";
            divContainer.appendChild(div);
        }
    
        grid.appendChild(divContainer);
    }
}

createGrid(16);

input.addEventListener("input", () => {
    document.querySelector("p").textContent = `${input.value} x ${input.value}`;
    createGrid(input.value);
});

checkbox.addEventListener("change", () => {
    let gridChildren = Array.from(document.querySelector(".grid").getElementsByTagName('*'));
    if (checkbox.checked) {
        document.querySelector(".grid").style.border = "1px solid black";
        gridChildren.forEach(div => { return div.style.borderColor = "black"; });
    } else {
        document.querySelector(".grid").style.border = "2px solid black";
        gridChildren.forEach(div => { return div.style.borderColor = "white"; });
    }
});