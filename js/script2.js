let notas = prompt("Digite sua nota")
switch(notas.toUpperCase()){
    case "A":
    alert('Excelente')
    break;
    
    case "B":
    alert('Ótimo')
    break;
    
    case 'C':
    alert ('Bom')
    break;

    case 'D':
    alert ('Regular')
    break;

    case 'E':
    alert ('Ruim')
    break;

    case 'F':
    alert ('Nos vemos de novo ano que vem...')
    break;
    
    default:
    alert('Puts! Essa nota não é considerada...')
    break;
    
}