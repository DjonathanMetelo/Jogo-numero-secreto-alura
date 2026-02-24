alert('Boas-vindas ao jogo do número secreto'); //imprime um pop up de mensagem na tela;
let numeroSecreto = 5; //cria uma variavel com o nome selecionado, e nesse caso atribui um valor a ela usando o simbulo "="
console.log(numeroSecreto) //imprime oque está contido entre () no log da pagina
let chute = prompt('Escolha um número entre 1 e 10'); //Pede ao usuario que ele insira um dado, seja ele uma string, tecla ou etc; dentro das ("") aparece o testo que será exibido ao usuario e nesse caso atribui o que o usuario digitou a uma variavel; nesse caso a variavel "chute"

if (chute == numeroSecreto) { //condicional que caso ela seja verdadeira ela executara o codigo contido dentro dela
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`); //o uso de `` permite que alem do texto escrito entre `` seja tambem possivel imprimir a variavel contida de "${}"
} else {
    alert('Você errou :(')
}