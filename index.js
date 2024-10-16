const prompt = require('prompt-sync')()

let choice = prompt("Veuillez choisir soit l'épée soit l'arc en tapant e pour l'épée et a pour l'arc ")

while ((choice != "a") && (choice != "e")) {
    choice = prompt("Veuillez choisir soit l'épée soit l'arc en tapant a pour l'épée et e pour l'arc "
    )

    if (choice === "e") {
        console.log("Vous avez choisi l'épée etes vous sure de votre choix tapez Y pour confirmez et tapez N pour annuler");
        choice = prompt(" Y/N ")
    }
    
    if (choice === "Y") {
        console.log(" Vous vous emparez de l'épée ");
        break;
    
    } else if(choice === "N") {
            choice = prompt("Vous n'avez pas choisi l'épée ,veuillez choisir soit l'épée soit l'arc en tapant a pour l'épée et e pour l'arc ")
        }
  
    if (choice === "a") {
        console.log("Vous avez choisi l'arc etes vous sure de votre choix tapez Y pour confirmez et tapez N pour annuler");
        choice = prompt(" Y/N ")
    }
    if (choice === "Y") {
        console.log(" Vous vous emparez de l'arc ");
        break;
    
    }else if (choice === "N") {
            choice = prompt("Vous n'avez pas choisi l'arc ,veuillez choisir soit l'épée soit l'arc en tapant a pour l'épée et e pour l'arc ")
        }
    
    else {
        choice = prompt("Veuillez choisir soit l'épée soit l'arc en tapant e pour l'épée et a pour l'arc ")
    }
}















