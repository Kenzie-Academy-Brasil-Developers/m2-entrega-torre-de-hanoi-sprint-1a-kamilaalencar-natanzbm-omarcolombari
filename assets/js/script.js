function createTower() {
    const box = document.getElementById('box');

    const tower1 = document.createElement('div');
    const tower2 = document.createElement('div');
    const tower3 = document.createElement('div');

    tower1.classList.add('tower1', 'tower');
    tower2.classList.add('tower2', 'tower');
    tower3.classList.add('tower3', 'tower');

    box.appendChild(tower1);
    box.appendChild(tower2);
    box.appendChild(tower3);
}
createTower();


function createDisc() {
    const tower = document.getElementsByClassName('tower1')[0];

    const disc1 = document.createElement('div');
    const disc2 = document.createElement('div');
    const disc3 = document.createElement('div');

    disc1.classList.add('disc1', 'disc');
    disc2.classList.add('disc2', 'disc');
    disc3.classList.add('disc3', 'disc');

    tower.appendChild(disc1);
    tower.appendChild(disc2);
    tower.appendChild(disc3);
}
createDisc();


let box = document.querySelector('body')
box.addEventListener('click', move)
let disco
function move(event){
    let disc = event.target
    //console.log(disc.className)
    if(disc.className == 'disc1 disc'){
        disco = event.target
        console.log(disco)
    }
    if(disc.className == 'disc2 disc'){
        disco = event.target
        console.log(disco)
    }
    if(disc.className == 'disc3 disc'){
        disco = event.target
        console.log(disco)
    }
    //console.log(disco)
    if(disc.className == 'tower1 tower'){
        disc.appendChild(disco)
    }
    if(disc.className == 'tower2 tower'){
        disc.appendChild(disco)
    }
    if(disc.className == 'tower3 tower'){
        disc.appendChild(disco)
    }
}