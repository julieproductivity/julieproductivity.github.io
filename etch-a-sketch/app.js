let color= "black";

function createGrid (size){
    let grid = document.querySelector('.grid');
    
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i =0; i < amount; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "beige";
        
        square.addEventListener("mouseover", divsColor);
        grid.insertAdjacentElement("beforeend",square);
    }
} 

function changeSize (input) {
    if (input >= 2 && (input <= 100)) {
    
        createGrid(input);
} else {
    alert("Size should be between 2 and 100 ! ");
}
}

function divsColor() {
    if(color=="rgb") {
        this.style.backgroundColor=`hsla(${Math.random() * 360},100%,50%)`
} else {
    this.style.backgroundColor = "black";
    
}
    }
    

function setColor(colorChoice){
    color = colorChoice;
}

function resetPad() {
    let grid = document.querySelector('.grid');
    let overGrid = document.querySelectorAll('div');
    overGrid.forEach((div)=>div.style.backgroundColor="beige");

}

createGrid(16);




