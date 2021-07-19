const container = document.querySelector(".container");
let side = 16;
let resetButton = document.createElement('button');
const body = document.querySelector('body');

function setRow(column) {
    for (let i = 0; i <= side; i++) {
        let square = document.createElement('div');
        square.classList.add('square-style');
        square.style.backgroundColor = "white";
        square.style.width = `${((500 / side) - 2)}px`;
        square.style.height = `${((500 / side) - 2)}px`;

        column.appendChild(square);
        square.addEventListener("mouseover", function (event) {
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            console.log(event.target.style.backgroundColor);
            // let darkness = event.target.style.filter`brightness(0.9)`;
            if (event.target.style.backgroundColor.toString() === 'white') {
                event.target.style.backgroundColor = randomColor;
            } else {
                event.target.style.filter += `brightness(0.9)`;
            }
        }
        )
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
