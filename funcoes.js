//declaração de funcão
//blocos de código reaproveitáveis
function ola(){
    document.write("olá mundo")
}
ola()

//expressao de funcao
let ola2 = function(){
    console.log("hello word")
}
ola2()

//arrow function
let ola3 = () =>{
    console.log("ola mundo de arrow function")
}
ola3()

//retorno de valores
function obterDiaSemana(){
    return new Date().getDay()
}
let dia = obterDiaSemana()
console.log(dia)

//funcão que recebe parâmetros
function somar(n1, n2){
    return n1 + n2
}
let soma = somar(3,5)
console.log(soma)
//reaproveitando funções
alert(somar(5,5))