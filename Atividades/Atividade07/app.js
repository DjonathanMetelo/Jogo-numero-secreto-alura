// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro

tabuada(2);

function tabuada(multiplicando){
    for(let multiplicador = 1; multiplicador <= 10; multiplicador++){
        let produto = multiplicando * multiplicador;
        console.log(`${multiplicando} X ${multiplicador} = ${produto}`)
    }
}