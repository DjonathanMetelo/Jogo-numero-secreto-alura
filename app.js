let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) { //
    let campo = document.querySelector(tag); //abre o documento HTML e seleciona a tag digitara entre "('')", nesse caso atribuimos essa tag aberta a variavel campo
    campo.innerHTML = texto; //insere na tag selecionada dentro da variavel o valor inserido apos o "="
};

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto'); //
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() { //cria respectiva função no documento html
  let chute = document.querySelector('input').value;//recebe um valor digitado na tela

  if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativa' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled') //pega o elemento identificado pelo d passado como parametro. nesse caso o id 'reiniciar' / remove um atributo do botão nesse caso o atributo 'disabled'
        } else {
                if (chute > numeroSecreto) {
                        exibirTextoNaTela('p', 'O número secreto é menor');
                } else {
                        exibirTextoNaTela('p', 'O número secreto é maior');  
                }
                tentativas++;
                limparCampo();
        }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ''; //determina o valor do campo dentro da variavel
}

function reiniciarJogo(){
    let numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    let tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}