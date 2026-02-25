let titulo = document.querySelector('h1');


titulo.innerHTML = 'Hora do Desafio';

function botaoConsole(){
    console.log('o botão foi clicado');
};

function botaoAlerta(){
    alert('Eu amo JS');
};

function botaoPrompt(){
    let cidade = prompt('Digite uma cidade do brasil');
    alert(`Estive em ${cidade} e lembrei de você.`)
};

function botaoSoma(){ 
    let parcela1 = prompt('Digite a parcela de umnumero para somar.');
    let parcela2 = prompt('Digite a parcela de outro numero para somar com o anterior.');
    let soma = parseInt(parcela1) + parseInt(parcela2);
    alert(`A soma de ${parcela1} + ${parcela2} é: ${soma}`);
};