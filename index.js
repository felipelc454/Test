/*Função que recebe um número inteiro e retorna o somatório de todos os valores
inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado*/
function recebeNumero(numero){
    var somatorio = 0;

    for(var i=0; i< numero; i++){
        if(eDivisivel(i, 3) || eDivisivel(i, 5)){
            somatorio = somatorio + i;
        }
    }
    return somatorio;
}

//Função que verifica se um número é divisivel por outro
function eDivisivel(numero, divisor){
    return numero%divisor == 0 ? true : false;
}

let somatorio = recebeNumero(10);
console.log('O somatório dos números é igual a: ', somatorio);