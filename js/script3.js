let num = prompt('Digite o seu número')

let cont = 1
while((cont-1) != num){
    if(num < 0 || num != Number()){
        alert("Inválido")
        break;
    }
    console.log(cont)
    cont++
}
