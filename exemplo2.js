/*Elabore um algoritmo que receba dois números e
 determine qual é o maior entre eles, se os números forem iguais, 
mostre uma mensagem no console "Os números são iguais".*/


let numero1 = 10
let numero2 = 10

if(numero1 > numero2){
    console.log(numero1  + " É maior que " + numero2)
}else if(numero2 > numero1){
    console.log(numero2 + " É maior que " + numero1)
} else{
  console.log("Eles são iguais ") // eles são iguais
}
