/*Crie uma função que recebe 2 parâmetros e retorna o resultado
 da divisão entre eles. Diga se esse número é par ou ímpar.*/

function dividirNumero(num1, num2){

    let resultado = num1/num2
    
    if(num1 % num2 ===0 && resultado % 2 ===0){
        return `Temos como resultado da divisão o número ${resultado}.Este é um número par!!`
    } else{
        return "O resultado da divisão é ímpar " + resultado
    }
}
console.log(dividirNumero(15,5)) // resultado é impar 3