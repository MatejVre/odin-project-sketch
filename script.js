function createGrid(dimensions){
    const container = document.querySelector(".main-container")
    const childrenArray = [];
    const square_width = String((container.clientWidth / dimensions) - 2);
    for(let i = 0; i < dimensions**2; i++){
        const square = document.createElement("div");
        square.classList.add("unit");
        square.style.width = square_width + "px";
        square.style.height = square_width + "px";

        square.addEventListener("mouseenter", () => square.style.backgroundColor = "red");

        childrenArray.push(square);
    }
    container.replaceChildren(...childrenArray);
};

function handleSizeChange(){
    let num = prompt("Enter size:", 60);
    num = Number.parseInt(num);
    createGrid(num);
};

//const btn = document.getElementsByClassName("size-button");
//btn.addEventListener("click", () => handleSizeChange);

createGrid(25);