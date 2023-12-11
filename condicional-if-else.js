let idade = 22;
let paisPresentes = false;
let comprouBilhete = true;
let maiorIdade = (idade >=18) ? "É maior de idade" : "É menor de idade" //Operador ternário
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete

if(!comprouBilhete){
    console.log("não, não comprou o bilhete")
    }else{
      console.log(maiorIdade)
}

//outro exemplo
let nota1 = 0
let nota2 = 7
let media = (nota1 + nota2) / 2
if(nota1 == 0 || nota2 == 0 ){
    console.log("Reprovado")
} else if(media < 7){
    console.log("Reprovado, mas tem como recuperar")
} else{
    console.log("Aprovado")
}
