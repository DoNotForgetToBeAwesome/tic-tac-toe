let box = document.querySelectorAll('th');
let table = document.querySelector('table');


box.forEach((e, i) => {
    e.addEventListener('click', () => {

        if (box[i].innerText == '') {
            box[i].innerHTML = 'X';
            checkEmptyBox();
            checkResult();

            systemTurn();
            checkResult();
        }
        else {
            alert('Not Empty');
        }

    })
})

function systemTurn() {

    let random = Math.round(Math.random() * 8);
    if (box[random].innerText == '') {
        box[random].innerHTML = 'O'
    }
    else {
        systemTurn();
    }
}

function checkResult() {


    let winningChance = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let check of winningChance) {

        let [x, y, z] = check;
        if (box[x].innerText && box[y].innerText == box[x].innerText && box[z].innerText == box[y].innerText) {
            box[x].setAttribute('class', 'color');
            box[y].setAttribute('class', 'color');
            box[z].setAttribute('class', 'color');

            setTimeout(() => {
                box[x].removeAttribute('class', 'color');
                box[y].removeAttribute('class', 'color');
                box[z].removeAttribute('class', 'color');

            }, 1000);

            setTimeout(() => {
                if (box[x].innerText == 'X') {
                    table.innerHTML = 'YOU WON..!';

                }
                if (box[x].innerText == 'O') {
                    table.innerHTML = 'YOU LOST..!';

                }

                table.setAttribute('class', 'fsize');
            }, 1100)
            setTimeout(() => {
                window.location.reload();
            }, 4000)
            break;

        }
    }



}


function checkEmptyBox() {
    box = [...box];
    if (box.every((e, i) => e.innerText != '')) {
        window.location.reload();
    };
}