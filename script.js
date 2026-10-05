const visor = document.getElementById('visor');
const historico = document.getElementById('historico');

function adicionarNumero(numero) {
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

function alternarSinal() {
    const operandoAtual = visor.value.match(/([+\-*/])\s*(-?\d*\.?\d+)$/);

    if (operandoAtual) {
        const prefixo = visor.value.slice(0, operandoAtual.index) + operandoAtual[1];
        const numero = Number(operandoAtual[2]) * -1;
        visor.value = prefixo + (numero < 0 ? ` -${Math.abs(numero)}` : numero);
        return;
    }

    const numero = Number(visor.value);
    if (Number.isFinite(numero)) {
        visor.value = String(numero * -1);
    }
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
