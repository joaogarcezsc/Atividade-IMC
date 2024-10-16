function operacao(){

//atribuindo os valores
const nome = document.getElementById('nome').value;
const sexo = document.getElementById('sexo').value;
const peso = parseFloat(document.getElementById('peso').value);
const altura = parseFloat(document.getElementById('altura').value);

//calculando imc
const imc = peso / (altura * altura);

console.log(`teste`);

// Classificar IMC 
let  condicao  = "";
if (sexo.toLowerCase() === 'masculino') {
    if (imc < 20.7) { condicao = "Abaixo do peso";}
    if (imc > 20.7 & imc < 26.4) { condicao = "Peso normal";}
    if (imc > 26.4 & imc < 27.8) {condicao = "Marginalmente acima do peso";}
    if (imc > 27.8 & imc < 31.1) { condicao = "Acima do peso ideal";}
    if (imc > 31.1) { condicao = "Obeso";}
} else { // feminino
    if (imc < 19.1) { condicao = "Abaixo do peso";}
    if (imc > 19.1 & imc < 25.8) { condicao = "Peso normal";}
    if (imc > 25.8 & imc < 27.3) { condicao = "Marginalmente acima do peso";}
    if (imc > 27.3 & imc < 32.3) { condicao = "Acima do peso ideal";}
    if (imc > 32.3) { condicao = "Obeso";}
}
// Obter peso ideal
const pesoideal = 24 * (altura*altura);

//exibirresultado
const resultadoDiv = document.getElementById('resultado');
resultadoDiv.innerHTML = `
    <strong>Resultados:</strong><br>
    Nome: ${nome}<br>
    Sexo: ${sexo}<br>
    Peso: ${peso} kg<br>
    Altura: ${altura} m<br>
    IMC: ${imc.toFixed(2)}<br>
    Condição: ${condicao}<br>
    Peso recomendado: ${pesoideal}kg
`;
}

