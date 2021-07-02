// Checkpoint criando um painel de microondas - 02//07//2021
// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré - definidos. 

// 1 - Pipoca – 10 segundos(padrão);
// 2 - Macarrão – 8 segundos(padrão);
// 3 - Carne – 15 segundos(padrão);
// 4 - Feijão – 12 segundos(padrão);
// 5 - Brigadeiro – 8 segundos(padrão);

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade.Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente";
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

const microondas = (prato, tempo) => {
    if (typeof prato != 'string' ||  typeof tempo != 'number') {
        return "Por favor, digite o nome de um prato pré definido"
    }
    else if (prato == "pipoca" && tempo == 10) {
        return "Prato pronto, bom apetite"
    }
    else if (prato == "pipoca" && tempo < 10) {
        return "Tempo insuficiente"
    }
    else if (prato == "pipoca" && tempo == 20) {
        return "Seu prato queimou"
    }
    else if (prato == "pipoca" && tempo >= 30) {
        return "Kabuuuuum, ta doido rapá??"
    }
    else if(prato == "pipoca" && tempo > 10 && tempo < 20){
        return "Ta quase queimando!"
    }
    else if(prato == "pipoca" && tempo > 20 && tempo < 30){
        return "Ta pra explodir doido!!"
    }
    // If do macarrão

    else if (prato == "macarrao" && tempo == 8) {
        return "Prato pronto, bom apetite"
    }   
    else if (prato == "macarrao" && tempo <= 7) {
        return "Tempo insuficiente"
    }
    else if (prato == "macarrao" && tempo == 16) {
        return "Seu prato queimou"
    }
    else if (prato == "macarrao" && tempo >= 24) {
        return "Kabuuuuum, ta doido rapá??"
    }
    else if(prato == "macarrao" && tempo > 8 && tempo <16){
        return "Ta quase queimando!"
    }
    else if(prato == "macarrao" && tempo > 16 && tempo < 24){
        return "Ta pra explodir doido!!"
    }
    // if da carne

    else if(prato == "carne" && tempo == 15) {
        return "Prato pronto, bom apetite"
    }
    else if(prato == "carne" && tempo <= 14){
        return "Tempo insuficiente"
    }
    else if(prato == "carne" && tempo == 30){
        return "Seu prato queimou"
    }
    else if(prato == "carne" && tempo >= 45){
        return "Kabuuuuum, ta doido rapá??"
    }
    else if(prato == "carne" && tempo > 15 && tempo < 30){
        return "Ta quase queimando!"
    }
    else if(prato == "carne" && tempo > 30 && tempo < 45){
        return "Ta pra explodir doido!!"
    }
    // if do feijão

    else if(prato == "feijao" && tempo == 12) {
        return "Prato pronto, bom apetite"
    }
    else if(prato == "feijao" && tempo <= 11){
        return "Tempo insuficiente"
    }
    else if(prato == "feijao" && tempo == 24){
        return "Seu prato queimou"
    }
    else if(prato == "feijao" && tempo >= 36){
        return "Kabuuuuum, ta doido rapá??"
    }
    else if(prato == "feijao" && tempo > 12 && tempo <24){
        return "Ta quase queimando!"
    }
    else if(prato == "feijao" && tempo > 24 && tempo < 36){
        return "Ta pra explodir doido!!"
    }
    // if do brigadeiro

    else if(prato == "brigadeiro" && tempo == 8) {
        return "Prato pronto, bom apetite"
    }
    else if(prato == "brigadeiro" && tempo <= 7){
        return "Tempo insuficiente"
    }
    else if(prato == "brigadeiro" && tempo == 16){
        return "Seu prato queimou"
    }
    else if(prato == "brigadeiro" && tempo >= 24){
        return "Kabuuuuum, ta doido rapá??"
    }
    else if(prato == "brigadeiro" && tempo > 8 && tempo <16){
        return "Ta quase queimando!"
    }
    else if(prato == "brigadeiro" && tempo > 16 && tempo < 24){
        return "Ta pra explodir doido!!"
    }
    else if(prato != "pipoca" || prato != "macarrão" || prato != "carne" || prato != "feijao" || prato != "brigadeiro"){
        return "Ei cara, eu não aqueço esse tipo de comida"
    }
}

console.log(microondas("pipoca", 10))
console.log(microondas("pipoca", 5))
console.log(microondas("pipoca", 15))
console.log(microondas("pipoca", 20))
console.log(microondas("pipoca", 25))
console.log(microondas("pipoca", 30))
console.log(microondas("pipoca", 35))

console.log("*************************************************************")

console.log(microondas("macarrao", 8))
console.log(microondas("macarrao", 4))
console.log(microondas("macarrao", 17))
console.log(microondas("macarrao", 24))
console.log(microondas("macarrao", 30))
console.log(microondas("macarrao", 15))
console.log(microondas("macarrao", 35))

console.log("***************************************")

console.log(microondas("cafe", 500))
console.log(microondas("lasanha", 850))