//Variáveis e estilização DOM
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


//Função para criação dos discos
function createDiscEasy() {
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

function createDiscMedium() {
    const tower = document.getElementsByClassName('tower1')[0];

    const disc1 = document.createElement('div');
    const disc2 = document.createElement('div');
    const disc3 = document.createElement('div');
    const disc4 = document.createElement('div');

    disc1.classList.add('disc1', 'disc');
    disc2.classList.add('disc2', 'disc');
    disc3.classList.add('disc3', 'disc');
    disc4.classList.add('disc4', 'disc');

    tower.appendChild(disc1);
    tower.appendChild(disc2);
    tower.appendChild(disc3);
    tower.appendChild(disc4)
}

function createDiscHard() {
    const tower = document.getElementsByClassName('tower1')[0];

    const disc1 = document.createElement('div');
    const disc2 = document.createElement('div');
    const disc3 = document.createElement('div');
    const disc4 = document.createElement('div');
    const disc5 = document.createElement('div');

    disc1.classList.add('disc1', 'disc');
    disc2.classList.add('disc2', 'disc');
    disc3.classList.add('disc3', 'disc');
    disc4.classList.add('disc4', 'disc');
    disc5.classList.add('disc5', 'disc');

    tower.appendChild(disc1);
    tower.appendChild(disc2);
    tower.appendChild(disc3);
    tower.appendChild(disc4)
    tower.appendChild(disc5)
}


//NIVEIS DE DIFICULDADE
const footer = document.querySelector('footer')
const buttonsDificulty = document.getElementById('buttons')

const easy = document.createElement('button')
const medium = document.createElement('button')
const hard = document.createElement('button')

easy.innerText = 'Fácil'
easy.id = 'easy'

medium.innerText = 'Médio'
medium.id = 'medium'

hard.innerText = 'Difícil'
hard.id = 'hard'

buttonsDificulty.appendChild(easy)
buttonsDificulty.appendChild(medium)
buttonsDificulty.appendChild(hard)

footer.addEventListener('click', selectDificulty)

function selectDificulty(event) {
    let select = event.target;
    if (select == easy) {
        createDiscEasy()
        hiddenButtons()
        createButtonReset()
    }
    if (select == medium) {
        createDiscMedium()
        hiddenButtons()
        createButtonReset()
    }
    if (select == hard) {
        createDiscHard()
        hiddenButtons()
        createButtonReset()
    }
}

function hiddenButtons() {
    easy.style.display = 'none'
    medium.style.display = 'none'
    hard.style.display = 'none'
}


//CONTADOR DE MOVIMENTOS 
const contador = document.getElementById('contador');
let movimentosRealizados = 0;

// Armazena todas as torres em um array
const towers = [tower1, tower2, tower3];

// Percorre o array para adicionar o click em todas as torres
for (let i = 0; i < towers.length; i++) {
    towers[i].addEventListener("click", movement);
}

// Variável que armazena se o jogador está na torre de origem ou na torre de destino
let local;
let clickmov = true;

function movement(e) {
    // Verifica se é o primeiro click ou não
    if (clickmov === true) {
        // Verifica se a torre está vazia
        if (e.currentTarget.childElementCount === 0) {
            clickmov = true;

        } else {
            local = e.currentTarget.lastChild;
            clickmov = false;
        }

    } else {
        // Se for o segundo click, verifica se é válido
        if (e.currentTarget.lastChild === null || local.clientWidth < e.currentTarget.lastChild.clientWidth) {
            e.currentTarget.appendChild(local);
            clickmov = true;
            movimentosRealizados += 1;
            contador.innerText = 'Movimentos realizados: ' + movimentosRealizados;
            checkVitory()
        } else {
            clickmov = true;
        }
    }
}

//VERIFICADOR DE VITÓRIA
container.addEventListener('click', checkVitory)

function checkVitory() {
    if (tower3.childElementCount === 5 &&
        tower2.innerHTML === '' &&
        tower1.innerHTML === '') {
        createModal('Você venceu!');
    }
    if (tower3.childElementCount === 4 &&
        tower2.innerHTML === '' &&
        tower1.innerHTML === '') {
        createModal('Você venceu!');
    }
    if (tower3.childElementCount === 3 &&
        tower2.innerHTML === '' &&
        tower1.innerHTML === '') {
        createModal('Você venceu!');
    }
}

function createModal(string) {
    const modal = document.createElement('div');
    const background = document.createElement('div');
    const paragrafo = document.createElement('p');

    modal.className = 'modal';
    modal.id = 'modal';
    paragrafo.innerText = string;
    paragrafo.className = 'paragrafo';
    paragrafo.id = 'paragrafo';
    background.className = 'background';
    background.id = 'background';

    modal.appendChild(paragrafo);
    container.appendChild(modal);
    container.appendChild(background);

    setTimeout(restartPage, 3000);
}

function restartPage() {
    document.location.reload(true)
}

// Função Reset
const restart = document.createElement('button')

function createButtonReset() {
    const divReset = document.getElementById('reset')

    restart.id = 'reset-button'
    restart.innerText = 'Reset'
    divReset.appendChild(restart)
}

const resetGame = () => {
    tower1.innerHTML = '';
    tower2.innerHTML = '';
    tower3.innerHTML = '';

    easy.style.display = 'block'
    medium.style.display = 'block'
    hard.style.display = 'block'

    restart.remove()

    movimentosRealizados = 0;
    contador.innerText = ''
}
restart.addEventListener('click', resetGame);