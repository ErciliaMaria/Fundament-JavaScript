let n = 0
if (!n){
    n = 10
}
console.log(n)
//Agora usando curto-circuito

let n1 = 0
n1 = n1 || 30
console.log(n1)

let isValid = false
/*if(isValid){
    console.log("é válido")
}
*/
isValid && console.log("é válido")//só irá executar se isValid for true

isValid || console.log(" não é válido")//só irá executar se isValid for false

