let n1 = 10
let n2 = 2
//OPERADORES ARITMÈTICOS
console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n1 / n2)
console.log(n1 % n2)
console.log(n1 ** n2)

//OPERADORES DE ATRIBUIÇÂO
let n3 =20
n3 += 15//mesmo que n3 = n3 + 15
console.log("n3: " + n3)

//INCREMENTO E DECREMENTO
let i = 0
console.log(i++)//primeiro valor será zero
console.log(i)//segundo valor irá incrementar +1

let j = 1;
console.log(++j)
console.log(j)

//OPERADORES LÓGICOS
let idade = 21;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
console.log("Pode viajar: " + podeViajar);

//OERADORES ARITMÉTICOS
//primeiro: ()
//segundo: potenciação **
//terceiro: da esquerda pra direita Multiplicação, Divisão, Resto e divisão inteira
//quarto: + e -