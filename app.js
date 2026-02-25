alert('Boas-vindas ao jogo do número secreto'); //imprime um pop up de mensagem na tela;
let numeroSecreto = 5; //cria uma variavel com o nome selecionado, e nesse caso atribui um valor a ela usando o simbulo "="
console.log(numeroSecreto) //imprime oque está contido entre () no log da pagina
let chute
let tentativas = 1;

while (chute != numeroSecreto) { //cria um loop que enquanto a condicional inserida entre "()" for verdadeira, o algoritmo irá executar o codigo contido entre {} até a condicional ser falsa
    chute = prompt('Escolha um número entre 1 e 10'); //Pede ao usuario que ele insira um dado, seja ele uma string, tecla ou etc; dentro das ("") aparece o testo que será exibido ao usuario e nesse caso atribui o que o usuario digitou a uma variavel; nesse caso a variavel "chute";
    if (chute == numeroSecreto) { //condicional que caso ela seja verdadeira ela executara o codigo contido dentro dela
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);; //o uso de `` permite que alem do texto escrito entre `` seja tambem possivel imprimir a variavel contida de "${}"
    } else {
        if (chute > numeroSecreto) {
                alert(`O número secreto é menor que ${chute}`);
        } else {
                alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++ //insere na variavel (nesse caso: "tentativas") o valor da mesma estipulada anteriormente, acrestido de "1"
    }
}