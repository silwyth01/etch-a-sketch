const container = document.querySelector(".container");
let side = 16;
let resetButton = document.createElement('button');
const body = document.querySelector('body');

function setRow(column) {
    for (let i = 0; i <= side; i++) {
        let square = document.createElement('div');
        square.classList.add('square-style');
        square.style.backgroundColor = "white";
        square.style.width = `${((500 / side) - 2).toString()}px`;
        square.style.height = `${((500 / side) - 2).toString()}px`;

        column.appendChild(square);
        square.addEventListener("mouseover", function (event) {
            event.target.style.backgroundColor = "black";
        })
    }

}

function setColumn() {
    for (let i = 0; i <= side; i++) {
        let column = document.createElement('div');
        column.classList.add('column-style');
        container.appendChild(column);
        setRow(column);
    }
}

function setPrompt() {
    side = prompt('How big you want your etch-a-sketch, 16')
    if (side > 100) {
        alert("That's way too big, son ! Not bigger than 100 !!")
        setPrompt();
    }
}

function setButtonReset() {
    let buttonContainer = document.createElement('div');
    body.insertBefore(buttonContainer, container)
    buttonContainer.appendChild(resetButton)
    resetButton.textContent = "Reset";
    resetButton.onclick = () => {
        setPrompt();
        container.innerHTML = "";
        setColumn();

    }

}
setButtonReset();
setColumn();
