# desafio-dia-01-7DaysOfCode-
Reescrever o código abaixo de maneira que ele imprima as informações de maneira correta
Comparação de Valores no JavaScript: Entendendo == e ===
Em JavaScript, a comparação entre valores pode ser um pouco confusa para iniciantes, especialmente devido à conversão implícita de tipos de dados. Diferente de linguagens compiladas como Java ou C#, onde os erros são detectados antes da execução, em JavaScript essas discrepâncias só aparecem quando o código é executado.

Diferença entre == e ===
== (Igualdade solta): Compara apenas os valores, permitindo conversões implícitas entre tipos diferentes.
=== (Igualdade estrita): Compara tanto os valores quanto os tipos de dados, exigindo que sejam exatamente iguais.
O que minha tabela mostra?
 demonstrar como JavaScript lida com essas comparações. Veja os exemplos:

Valor 1	Valor 2	== (Apenas Valor)	=== (Valor e Tipo)
1 (number)	"1" (string)	✅ Sim	❌ Não
30 (number)	"30" (string)	✅ Sim	❌ Não
10 (number)	"10" (string)	✅ Sim	❌ Não
false (boolean)	"0" (string)	✅ Sim	❌ Não
null (object)	undefined (undefined)	✅ Sim	❌ Não
"(string)"	0 (number)	✅ Sim	❌ Não
O que podemos aprender com isso?
Comparação solta (==) pode levar a resultados inesperados

1 == "1" retorna true, pois JavaScript converte a string "1" para o número 1.
false == "0" também retorna true, pois "0" é tratado como false em um contexto booleano.

Comparação estrita (===) é mais segura

1 === "1" retorna false, pois os tipos são diferentes (número vs string).
null === undefined retorna false, pois, apesar de ambos representarem "ausência de valor", são tipos distintos.
Conversões implícitas podem gerar erros sutis

O JavaScript converte valores de forma automática em muitos casos, o que pode causar bugs difíceis de encontrar.

 Usar === sempre que possível ajuda a evitar erros, garantindo que tanto valor quanto tipo sejam levados em conta. Mas entender quando == pode ser útil também é importante, especialmente em operações onde a conversão de tipos é desejada.
![desafio 7 dias dia 01 jaine](https://github.com/user-attachments/assets/7fa8745e-210e-49af-b70a-d345e73be76d)
Código JavaScript Puro

// Definição dos valores a serem comparados
const valores = [
    { valor1: 1, tipo1: typeof 1, valor2: "1", tipo2: typeof "1" },
    { valor1: 30, tipo1: typeof 30, valor2: "30", tipo2: typeof "30" },
    { valor1: 10, tipo1: typeof 10, valor2: "10", tipo2: typeof "10" },
    { valor1: false, tipo1: typeof false, valor2: "0", tipo2: typeof "0" },
    { valor1: null, tipo1: typeof null, valor2: undefined, tipo2: typeof undefined },
    { valor1: "", tipo1: typeof "", valor2: 0, tipo2: typeof 0 }
];

// Função para comparar valores usando == e ===
function compararValores() {
    console.log("Comparação de Valores no JavaScript\n");
    console.log("Veja a diferença entre == (compara apenas o valor) e === (compara valor e tipo).\n");

    console.log("Valor 1\t(Tipo)\t\tValor 2\t(Tipo)\t\t== (Apenas Valor)\t=== (Valor e Tipo)");
    console.log("-".repeat(90));

    valores.forEach(({ valor1, tipo1, valor2, tipo2 }) => {
        const comparacaoSolta = valor1 == valor2 ? "✅ Sim" : "❌ Não";
        const comparacaoEstrita = valor1 === valor2 ? "✅ Sim" : "❌ Não";

        console.log(`${valor1} (${tipo1})\t${valor2} (${tipo2})\t${comparacaoSolta}\t\t${comparacaoEstrita}`);
    });
}

// Executar a função
compararValores();

 
