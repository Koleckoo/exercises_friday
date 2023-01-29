const fieldArray = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]
const fieldDivs = document.querySelectorAll(".field");
console.log(fieldDivs);

let currentPlayer = "X";

fieldDivs.forEach((rectangle, index) => {
    rectangle.addEventListener(("click"), () => {
        const rowIndex = Math.floor(index/3); 
        const columnIndex = index % 3;
        if (fieldArray[rowIndex][columnIndex] === "") {
            rectangle.textContent = currentPlayer;
            fieldArray[rowIndex][columnIndex] = currentPlayer;
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    })
})


const checkRows = () => {
    fieldArray.forEach((fieldRow) => {
        let markCount = 1;
        let previousMark = "";
        fieldRow.forEach((fieldValue) =>{
            if (fieldValue !== '') {
                markCount = fieldValue === previousMark ? markCount + 1 : markCount
            }
            previousMark = fieldValue
        });
        if (markCount === 3) {
            alert(currentPlayer + "Wins!")
        }
    });
}
function checkColumns() {
    for (i = 0; i < 3; i++) {
        let markCount = 1
        let previousMark = ''
        for (j = 0; j < 3; j++) {
            fieldValue = fieldArray[j][i]
            if (fieldValue !== '') {
                markCount = fieldValue === previousMark ? markCount + 1 : markCount
            }
            previousMark = fieldValue
        }
        if (markCount ===3) {
            alert(currentPlayer + ' wins!')
        }
    }
}
 
function checkDiagonals() {
    let markCount = 1
    let previousMark = ''
    for (i = 0; i < 3; i++) {
        fieldValue = fieldArray[i][i]
        if (fieldValue !== '') {
            markCount = fieldValue === previousMark ? markCount + 1 : markCount
        }
        previousMark = fieldValue
    }
    if (markCount ===3) {
        alert(currentPlayer + ' wins!')
    }
 
    markCount = 1
    previousMark = ''
    for (i = 0; i < 3; i++) {
        fieldValue = fieldArray[i][2-i]
        if (fieldValue !== '') {
            markCount = fieldValue === previousMark ? markCount + 1 : markCount
        }
        previousMark = fieldValue
    }
    if (markCount ===3) {
        alert(currentPlayer + ' wins!')
    }
}