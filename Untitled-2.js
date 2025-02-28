// Função para comparar valores e tipos
function compararValores(valor1, valor2) {
    let resultadoIgual = valor1 == valor2 ? '✅ Sim' : '❌ Não';
    let resultadoEstrict = valor1 === valor2 ? '✅ Sim' : '❌ Não';

    return `
        <tr>
            <td>${valor1} (${typeof valor1})</td>
            <td>${valor2} (${typeof valor2})</td>
            <td>${resultadoIgual}</td>
            <td>${resultadoEstrict}</td>
        </tr>
    `;
}

// Criando estrutura da tabela
document.body.innerHTML = `
    <h2>Comparação de Valores no JavaScript</h2>
    <p>Veja a diferença entre <b>==</b> (compara apenas o valor) e <b>===</b> (compara valor e tipo).</p>

    <table border="1">
        <tr>
            <th>Valor 1</th>
            <th>Valor 2</th>
            <th>== (Apenas Valor)</th>
            <th>=== (Valor e Tipo)</th>
        </tr>
        ${compararValores(1, '1')}
        ${compararValores(30, '30')}
        ${compararValores(10, '10')}
        ${compararValores(false, '0')}
        ${compararValores(null, undefined)}
        ${compararValores(' ', 0)}
    </table>

    <h3>Teste com Seus Próprios Valores</h3>
    <input type="text" id="valor1" placeholder="Digite o primeiro valor">
    <input type="text" id="valor2" placeholder="Digite o segundo valor">
    <button onclick="testeComparacao()">Comparar</button>
    <p id="resultado"></p>
`;

// Função para comparar valores digitados pelo usuário
function testeComparacao() {
    let val1 = document.getElementById('valor1').value;
    let val2 = document.getElementById('valor2').value;

    let resultado = `📌 Comparação Personalizada:<br>
    ${val1} == ${val2} ➝ <b>${val1 == val2}</b> (Comparação de Valor) <br>
    ${val1} === ${val2} ➝ <b>${val1 === val2}</b> (Comparação de Valor e Tipo)`;

    document.getElementById('resultado').innerHTML = resultado;
}
