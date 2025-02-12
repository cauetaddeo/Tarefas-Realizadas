const nota1 = 3
const nota2 = 2
const nota3 = 1
let media = (nota1 + nota2 + nota3)/3;
 if (media >= 7){
        console.log("Parabéns, você conseguiu passar! \nsua 1 nota foi: " +nota1+ "\nsua 2 nota foi:" + nota2 + "\nsua 3 nota foi:" +nota3+ "\nsua media foi:" +media);
        for (let i=0; i<6; i++){
            console.log("Você é o melhor!");
        }
 
    }

         else if (media < 7){
            console.log("Você não passou! \nsua nota foi: " +nota1+ "\nsua 2 nota foi:" + nota2 + "\nsua 3 nota foi:" +nota3+ "\nsua media foi:" +media);
            for (let i=0; i<6; i++){
                console.log("Continue estudando!")
            }


        }

