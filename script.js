const visor = document.getElementById('visor');
const historico = document.getElementById('historico');

function adicionarNumero(numero) {
    if (numero === '.') {
        const numeroAtual = visor.value.split(/[+\-*/]/).pop();

        if (numeroAtual.includes('.')) {
            return;
        }

        if (visor.value === '0') {
            visor.value = '0.';
            return;
        }

        if (numeroAtual === '') {
            visor.value += '0.';
            return;
        }
    }

    if (visor.value === '0') {
        visor.value = numero;
    } else {
        visor.value += numero; 
    }
}

function adicionarOperacao(operador) {
    const ultimoCaractere = visor.value.slice(-1);
    
    if (ultimoCaractere === '+' || ultimoCaractere === '-' || ultimoCaractere === '*' || ultimoCaractere === '/') {
        visor.value = visor.value.slice(0, -1) + operador;
    } else {
        visor.value += operador;
    }
}

function limparVisor(button) {
    visor.value = '0';
    historico.innerText = '';
}

function apagarCasa() {
    if (visor.value === 'Erro') {
        visor.value = '0';
        return;
    }

    visor.value = visor.value.slice(0, -1) || '0';
}

function adicionarPercentual() {
    const numeroAtual = visor.value.match(/\d*\.?\d+$/);

    if (!numeroAtual) {
        return;
    }

    const percentual = String(Number(numeroAtual[0]) / 100);
    visor.value = visor.value.slice(0, -numeroAtual[0].length) + percentual;
}

function calcularResultado() {
    try {
        if (visor.value !== '') {
            historico.innerText = visor.value;

            visor.value = eval(visor.value);
        }
    } catch (erro) {
        visor.value = 'Erro';
    }
}
