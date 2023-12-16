let numero = prompt("Digite um número")

let indice = 0
while (indice < 10){
    document.write( numero + " X " + indice  + " = " , indice * numero)
    indice++
}
document.write("saiu do loop while")

//Estrutura do...while
let indice1 = 0
do{
document.write( numero + " X " + indice1 + " = " , indice1 * numero )
indice1++
}while( indice1 <= 10)
document.write("saiu do loop do while")

//Estrutrura FOR
for(let j=0; j <= 10; j++){
    document.write( numero + " X " + j + " = ", j * numero)
}
document.write("saiu do loop for")