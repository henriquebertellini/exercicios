let num = prompt('Digite o seu número')

let cont = 1
while((cont-1) != num){
    if(num < 0){
        alert("Apenas numeros positivos")
        break;
    }
    if(!Number(num)){
        alert("Apenas numeros")
        break;
    }
    console.log(cont)
    cont++
}