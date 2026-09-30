let numero, saida, i;

function gerar() {
    numero = Number(document.getElementById('numero').value);
    saida = "";

    if (numero < 0) {
        saida = "Digite um número maior que zero. "
    } else if (numero > 10) {
        saida = "<h3> Número grande </h3>"
    } else {
        for (i = 0; i <= 10; i++) {
            saida = saida + numero + "X" + i + "=" + (numero * i) + "<br>";
        }
    }
    document.getElementById("resultado").innerHTML = saida;
}

function mostrar() {
    let alunos = ["Ana", "Pedro", "Elvis", "Lucas"];

    let saida2 = "";

    for (let a = 0; a < alunos.length; a++) {
        saida2 = saida2 + alunos[a] + "<br>";
    }

    document.getElementById("alunos").innerHTML = saida2;
}