/* Constantes gerais para geração dos elementos usando o DOM*/
/* Quadrados */
const box1 = document.getElementById('space1');
const box2 = document.getElementById('space2');
const box3 = document.getElementById('space3');

/* Torres */
const tower1 = document.createElement('div');
const tower2 = document.createElement('div');
const tower3 = document.createElement('div');

/* Discos */
/* Tamanho dos discos começando do menor (1) ao maior (3) */
const disk1 = document.createElement('div');
const disk2 = document.createElement('div');
const disk3 = document.createElement('div');


/* Funções para mostrar discos e torres */
function showDisks() {
    diskC(box1);
    diskB(box1);
    diskA(box1);
}
showDisks();

function showTowers() {
    leftTower(box1);
    middleTower(box2);
    rightTower(box3);
}
showTowers();


/* Funcionalidades e estilo usando o DOM */

/* Torres */
function leftTower(tower) {
    tower.appendChild(tower1);
    tower1.classList.add('torres');
    return tower1;
}

function middleTower(tower) {
    tower.appendChild(tower2);
    tower2.classList.add('torres');
    return tower2;
}

function rightTower(tower) {
    tower.appendChild(tower3);
    tower3.classList.add('torres');
    return tower3;
}

/* Discos */
function diskA(disc) {
    disc.appendChild(disk1);
    disk1.classList.add('discos');
    disk1.style.width = '40%';
    disk1.style.height = '40px';
    disk1.style.backgroundColor = 'blue';
    return disk1;
}

function diskB(disc) {
    disc.appendChild(disk2);
    disk2.classList.add('discos');
    disk2.style.width = '60%';
    disk2.style.height = '40px';
    disk2.style.backgroundColor = 'darkblue';
    return disk2;
}

function diskC(disc) {
    disc.appendChild(disk3);
    disk3.classList.add('discos');
    disk3.style.width = '80%';
    disk3.style.height = '40px';
    disk3.style.backgroundColor = 'black';
    return disk3;
}