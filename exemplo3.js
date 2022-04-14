/*Crie um algoritmo que receba três notas de um aluno, calcule 
sua média e mostre as seguintes mensagens de acordo com cada situação:

  - Se a media for igual ou maior que 7 - Aprovado
  - Se a media for maior e igual a cinco e menor que 7 - Recuperação
  - Se a media for menor que 5 - Reprovado*/

  /*let nota1 = 9.2
  let nota2 = 7.1
  let nota3 = 5.2

 let media = (nota1 + nota2 + nota3)/3

 if (media >= 7){
     console.log("Parabéns, Aprovado!")
 }
 if (media >= 5 && media < 7){
     console.log("Você está de Recuperação!")
 }
 if(media < 5){
    console.log("Você está Reprovado!")
     }*/

     function calcularMedia (nota1,nota2,nota3){
         const media = (nota1 + nota2 + nota3)/3
         
         if(media >= 7){
             return "Parabéns, Aprovado"
         }else if(media >= 5 && media < 7){
             return "Você está de Recuperação"
         } else(media < 5)
         return "Você infelizmente foi Reprovado"
         }
            
         
          
         console.log(calcularMedia(4.6, 5.6, 10))
        
    
    
  

 