let fruta = prompt("Digite uma fruta")
switch(fruta.toLowerCase()){
    case "maçã":
    alert('Não vendemos essa fruta aqui')
    break;
    
    case "kiwi":
    alert('Estamos com escassez de kiwi')
    break;
    
    case 'melancia':
    alert ('Aqui está, são 3 reais o quilo')
    break;
    
    default:
    alert('Seleção errada, tente novamente!')
    break;
    
}