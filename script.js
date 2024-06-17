let input = document.querySelector("input");
let checkbox = document.querySelector("#grid-lines");
let haveGridLines = true;
let grid = document.querySelector(".grid");
let gridChildren;
let startColoring = false;

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
        gridChildren = Array.from(grid.getElementsByTagName('*'));

        grid.addEventListener("mousedown", (e) => {
            startColoring = true;
            e.target.style.backgroundColor = "black"; 
            e.target.classList.add("black");
            e.target.style.borderColor = "black";
        })
        
        grid.addEventListener("mouseup", (e) => {
            startColoring = false;
        })

        gridChildren.forEach(container => {
            let containerChildren = Array.from(container.getElementsByTagName('*'));
            containerChildren.forEach(div => {
             div.addEventListener("mouseenter", () => {
                 if (startColoring) { 
                    div.style.backgroundColor = "black"; 
                    div.classList.add("black");
                    div.style.borderColor = "black";
                } 
             });
            })
        });
    }
}

createGrid(16);

input.addEventListener("input", () => {
    document.querySelector("p").textContent = `${input.value} x ${input.value}`;
    createGrid(input.value);
});

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        haveGridLines = true;
        grid.style.border = "1px solid black";
        gridChildren.forEach(div => { return div.style.borderColor = "black"; });
    } else {
        haveGridLines = false;
        grid.style.border = "2px solid black";
        gridChildren.forEach(div => { div.style.borderColor = div.classList.contains("black") ? "black" : "white"; });
    }
});

