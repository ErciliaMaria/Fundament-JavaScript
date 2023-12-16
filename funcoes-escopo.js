let n = "global"
function mostrarN(){
    let n1 = "local"
    console.log("valor de n: " + n)
    if(true){
        var n2 = " valor de n detro de if"
    }
    console.log(n2)
    console.log("valor local de n1:" + n1)
}
mostrarN()
console.log("valor de n no escolo global: " + n)