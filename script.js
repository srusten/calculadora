function calcular(operador) {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    let resultado;

    if (isNaN(n1) || isNaN(n2)) {
        resultado = "Digite dois números válidos!";
    } else {
        switch(operador) {
            case '+':
                resultado = n1 + n2;
                break;
            case '-':
                resultado = n1 - n2;
                break;
            case '*':
                resultado = n1 * n2;
                break;
            case '/':
                resultado = n2 !== 0 ? n1 / n2 : "Não é possível dividir por zero!";
                break;
        }
    }

    document.getElementById('resultado').textContent = "Resultado: " + resultado;
}