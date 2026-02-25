let titulo = document.querySelector('h1'); //abre o documento HTML e seleciona a tag digitara entre "('')", nesse caso atribuimos essa tag aberta a variavel titulo
titulo.innerHTML = 'Jogo do número secreto'; //insere na tag selecionada dentro da variavel o valor inserido apos o "="

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function verificarChute() { //cria e chama a respectiva função no documento html
  console.log('O botão foi clicado!')
}
