function exibirTextoNaTela(tag, texto) { //
    let campo = document.querySelector(tag); //abre o documento HTML e seleciona a tag digitara entre "('')", nesse caso atribuimos essa tag aberta a variavel campo
    campo.innerHTML = texto; //insere na tag selecionada dentro da variavel o valor inserido apos o "="
};

function gerarNumeroAleatorio() {
    parseInt(Math.random() * 10 + 1);
};

function verificarChute() { //cria respectiva função no documento html
  let chute = document.querySelector('input').value;//
  console.log(chute == numeroSecreto);
}

let numeroSecreto = gerarNumeroAleatorio();
exibirTextoNaTela('h1', 'Jogo do número secreto'); //
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
