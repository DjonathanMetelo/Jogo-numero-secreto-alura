alert('Boas-vindas ao jogo do número secreto'); //imprime um pop up de mensagem na tela;
let tentativas = 1; //cria uma variavel com o nome selecionado, e nesse caso atribui um valor a ela usando o simbulo "="
let chute
let numeroSecreto = parseInt(Math.random() * 100 + 1); //gera um numero aleatorio entre 0 e menor que 1; nesse caso ao multiplicarmos ele por 100 temos os numeros de 0 a 100 como resultados, porem como queremos exluir o numero 0 como possibilidade, acrescemos o valor 1, tornando a nosso espaço de possibilidades os numeros de 1 a 100
console.log(numeroSecreto) //imprime oque está contido entre () no log da pagina



while (chute != numeroSecreto) { //cria um loop que enquanto a condicional inserida entre "()" for verdadeira, o algoritmo irá executar o codigo contido entre {} até a condicional ser falsa
    chute = prompt('Escolha um número entre 1 e 100'); //Pede ao usuario que ele insira um dado, seja ele uma string, tecla ou etc; dentro das ("") aparece o testo que será exibido ao usuario e nesse caso atribui o que o usuario digitou a uma variavel; nesse caso a variavel "chute";
    if (chute == numeroSecreto) { //condicional que caso ela seja verdadeira ela executara o codigo contido dentro dela
        break; //encerra o loop
    } else {
        if (chute > numeroSecreto) {
                alert(`O número secreto é menor que ${chute}`);
        } else {
                alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++ //insere na variavel (nesse caso: "tentativas") o valor da mesma estipulada anteriormente, acrestido de "1"
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; //cria uma variavel e transforma ela em uma condicional, e, caso seja verdadeira ele atribui um valor diferente a uma variavel, sendo a opção a direita do ":" um resultado e a esquerda outra
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`); //o uso de `` permite que alem do texto escrito entre `` seja tambem possivel imprimir a variavel contida de "${}"