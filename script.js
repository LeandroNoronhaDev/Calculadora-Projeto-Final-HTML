const visor = document.getElementById('visor');

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
}

function calcularResultado() {
    try {
        if (visor.value !== '') {
            visor.value = eval(visor.value);
        }
    } catch (erro) {
        visor.value = 'Erro';
    }
}