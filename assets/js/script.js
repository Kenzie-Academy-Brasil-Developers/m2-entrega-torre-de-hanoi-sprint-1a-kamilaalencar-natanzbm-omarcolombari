const container = document.getElementById('container');

const box1 = document.createElement('div');
const box2 = document.createElement('div');
const box3 = document.createElement('div');

const tower1 = document.createElement('div');
const tower2 = document.createElement('div');
const tower3 = document.createElement('div');

box1.id = 'box1';
box2.id = 'box2';
box3.id = 'box3';

tower1.classList.add('tower1', 'tower');
tower2.classList.add('tower2', 'tower');
tower3.classList.add('tower3', 'tower');

container.appendChild(box1);
container.appendChild(box2);
container.appendChild(box3);

box1.appendChild(tower1);
box2.appendChild(tower2);
box3.appendChild(tower3);


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


//CONTADOR DE MOVIMENTOS 
const contador = document.getElementById('contador')
let movimentosRealizados = 0

// armazena todas as todas em um array
const towers = [tower1, tower2, tower3];
// percorre o array para adicionar o click em todas as torres
for (let i = 0; i < towers.length; i++) {
    towers[i].addEventListener("click", moviment);
}

// variável que armazena se o jogador esta na torre de origem ou na torre de destino.
let local;
let clickmov = true;

function moviment(e) {
    // verifica se é o primeiro click ou não
    if (clickmov === true) {
        // verifica se a torre está vazia
        if (e.currentTarget.childElementCount === 0) {
            clickmov = true;

        } else {
            local = e.currentTarget.lastChild;
            clickmov = false;
        }
    } else {
        // se for o segundo click, verifica se é válido
        if(e.currentTarget.lastChild===null || local.clientWidth < e.currentTarget.lastChild.clientWidth){
            e.currentTarget.appendChild(local)
            clickmov = true
            movimentosRealizados += 1
            contador.innerText = 'Movimentos realizados: ' + movimentosRealizados
        }else{
            clickmov = true
        }
    }
    console.log(movimentosRealizados)
    checkVitory()
}

//VERIFICADOR DE VITÓRIA
function checkVitory(){
    if(tower3.childElementCount === 3){
        createModal('Você venceu!')
    }
}

function createModal(string) {
    const modal = document.createElement('div')
    const background = document.createElement('div')

    const paragrafo = document.createElement('p')
    paragrafo.innerText = string

    modal.className = 'modal'
    modal.id = 'modal'
    paragrafo.className = 'paragrafo'
    paragrafo.id = 'paragrafo'
    background.className = 'background'
    background.id = 'background'

    modal.appendChild(paragrafo)
    container.appendChild(modal)
    container.appendChild(background)

    setTimeout(restartPage, 3000)
}

function restartPage() {
    location.reload()
}