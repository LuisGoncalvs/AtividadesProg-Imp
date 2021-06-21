// Exercicio de Arrays

let filmes = ["star wars", "clube da luta", "o poderoso chefão", "top gun", "interestelar"];

console.log(filmes[1]);

toUpper = function (x) {
    return x.toUpperCase();
}

filmes = filmes.map(toUpper);

console.log(filmes)


let cartoons = ["toy story", "Procurando Nemo", "Kung-fu panda", "wally", "fortnite"];
cartoons.pop()

console.log(cartoons)

Array.prototype.push.apply(filmes, cartoons);

console.log(filmes)


const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9];

function comparacao(asiaScores, euroScores){
    if (asiaScores == euroScores){
        return "As notas são iguais"
    }
    else if (asiaScores != euroScores){
        return "As notas são diferentes"
    }
}

console.log(comparacao(asiaScores[6],euroScores[6]))

