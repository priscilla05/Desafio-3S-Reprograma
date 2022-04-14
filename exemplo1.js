//Elabore um algoritmo que receba um número (1-7)
// e devolva o dia da semana correspondente.

function ReceberNumeroDevolverDia(dia){
    switch(dia){
        case "Dia 1":
            return "Domingo"
        case "Dia 2":
            return "Segunda"
        case "Dia 3":
            return "Terça"
        case "Dia 4":
            return "Quarta"
        case "Dia 5":
            return "Quinta" 
        case "Dia 6":
            return "Sexta"
        case "Dia 7":
            return "Sábado"                       
        default: 
            return "Não é um número válido"
    }

}

console.log(ReceberNumeroDevolverDia("Dia 2")) // segunda

