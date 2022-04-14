/*- Crie uma função que retorna a palavra (impar/par) 
de acordo com seu parâmetro.*/


function retornarParOuImpar(numero){
    if (numero %2 ==0){
        return "É par!"
    } else{
        return "É ímpar!"
    }
}
      
console.log(retornarParOuImpar(22)) // É par!

