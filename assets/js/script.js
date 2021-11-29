/* Quadrados */
let $card1 = document.getElementById('space1');
let $card2 = document.getElementById('space2');
let $card3 = document.getElementById('space3');

/* Torres */
let tower1 = document.createElement('div');
let tower2 = document.createElement('div');
let tower3 = document.createElement('div');

/* Discos */
/* Tamanho dos discos começando do maior (1) ao menor (5) */
let disk1 = document.createElement('div');
let disk2 = document.createElement('div');
let disk3 = document.createElement('div');
// let disk4 = document.createElement('div');
// let disk5 = document.createElement('div');


/* Funções para mostrar discos e torres */
function showDisks() {
    biggestDisk($card1)
    bigDisk($card1)
    mediumDisk($card1)
    //    bigDisk($card1)
    //    biggerDisk($card1) 
}
showDisks()

// function showTowers() {
//     leftTower($card1)
//     middleTower($card2)
//     rightTower($card3)
// }
// showTowers()

/* Funcionalidades gerais */

// function leftTower(tower) {
//     tower.appendChild(tower1);
//     tower1.classList.add('torres')
//     return tower1
// }

// function middleTower(tower) {
//     tower.appendChild(tower2);
//     tower2.classList.add('torres')
//     return tower2
// }

// function rightTower(tower) {
//     tower.appendChild(tower3);
//     tower3.classList.add('torres')
//     return tower3
// }

function biggestDisk(disc) {
    disc.appendChild(disk1);
    disk1.classList.add('discos')
    disk1.style.width = '80%'
    disk1.style.height = '40px'
    disk1.style.backgroundColor = 'black';
    return disk1
}

function bigDisk(disc) {
    disc.appendChild(disk2);
    disk2.classList.add('discos')
    disk2.style.width = '60%'
    disk2.style.height = '40px'
    disk2.style.backgroundColor = 'darkblue';
    return disk2
}

function mediumDisk(disc) {
    disc.appendChild(disk3);
    disk3.classList.add('discos')
    disk3.style.width = '40%'
    disk3.style.height = '40px'
    disk3.style.backgroundColor = 'blue';
    return disk3
}
// function bigDisk(disc){}
// function biggerDisk(disc){}