let input = document.querySelector("input");
let checkbox = document.querySelector("#grid-lines");
let haveGridLines = true;
let grid = document.querySelector(".grid");

function createGrid(gridSide) {
    grid.remove();

    grid = document.createElement("div");
    grid.classList.add("grid");
    haveGridLines ? grid.style.border = "1px solid black" : grid.style.border = "2px solid black";
    document.querySelector(".sketch-area").appendChild(grid);

    for (let i = 0; i < gridSide; i++) {
        let divContainer = document.createElement("div");
    
        for (let i = 0; i < gridSide; i++) {
            let div = document.createElement("div");
            let side = (546 - 2 * gridSide)/gridSide;
            div.style.width = `${side}px`;
            div.style.height = `${side}px`;
            haveGridLines ? div.style.border = "1px solid black" : div.style.border = "1px solid white";
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
    let gridChildren = Array.from(grid.getElementsByTagName('*'));
    if (checkbox.checked) {
        haveGridLines = true;
        grid.style.border = "1px solid black";
        gridChildren.forEach(div => { return div.style.borderColor = "black"; });
    } else {
        haveGridLines = false;
        grid.style.border = "2px solid black";
        gridChildren.forEach(div => { return div.style.borderColor = "white"; });
    }
});